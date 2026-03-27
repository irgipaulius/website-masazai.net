#!/usr/bin/env node
/**
 * generate-seo.js
 * Runs as "prebuild" before every `npm run build`.
 * Reads PricingPanel.js, builds LocalBusiness + hasOfferCatalog JSON-LD,
 * and injects it into public/index.html at <!-- JSON_LD_PLACEHOLDER -->.
 */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

// ─── Load PricingPanel data without ES module toolchain ──────────────────────
function loadPricingPanel() {
  const filePath = path.join(__dirname, "../src/components/panel/PricingPanel.js");
  let src = fs.readFileSync(filePath, "utf8");
  // Remove all export keywords
  src = src.replace(/export const PricingData =/g, "const PricingData =");
  src = src.replace(/export const PricingPanelContents =/g, "const PricingPanelContents =");
  src += "\n__result__ = PricingPanelContents;";
  const sandbox = { __result__: null };
  vm.runInNewContext(src, sandbox);
  return sandbox.__result__;
}

// ─── Strip markdown syntax to plain text ────────────────────────────────────
function stripMarkdown(md) {
  return md
    .replace(/!\[.*?\]\(.*?\)/g, "")        // images
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // links
    .replace(/#{1,6}\s+/gm, "")             // headings
    .replace(/\*\*(.*?)\*\*/g, "$1")        // bold
    .replace(/\*(.*?)\*/g, "$1")            // italic
    .replace(/^\s*[-*+]\s+/gm, "")         // list bullets
    .replace(/\|[^\n]+\|/g, "")            // table rows
    .replace(/[-:]+\|[-: |]+/g, "")        // table separators
    .replace(/&nbsp;/g, " ")               // html entities
    .replace(/&euro;/g, "€")
    .replace(/\n{2,}/g, " ")
    .replace(/\n/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

// ─── Business constants ───────────────────────────────────────────────────────
const BUSINESS = {
  name: "Masažas Pas Jeleną",
  url: "https://masazai.net",
  telephone: "+37067273695",
  description:
    "Profesionalus privatus masažas Kaune, Girstutyje. Klasikinis, anticeliulitinis, " +
    "limfodrenažinis, nėščiųjų masažas ir kt. Virš 30 metų patirtis. Prieinamos kainos.",
  priceRange: "€–€€",
  facebook: "https://www.facebook.com/Masazuotoja",
  neighbourhood: "Girstutis",
  city: "Kaunas",
  country: "LT",
};

// ─── Build JSON-LD ────────────────────────────────────────────────────────────
function buildJsonLd(pricingPanel) {
  const contents = pricingPanel.contents;

  const offers = Object.entries(contents)
    .filter(([key]) => key !== "Kainoraštis")
    .map(([name, markdown]) => ({
      "@type": "Offer",
      name,
      description: stripMarkdown(markdown).slice(0, 500),
      priceCurrency: "EUR",
      seller: { "@type": "LocalBusiness", name: BUSINESS.name },
    }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: BUSINESS.telephone,
    description: BUSINESS.description,
    priceRange: BUSINESS.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.city,
      addressRegion: "Kauno apskritis",
      addressCountry: BUSINESS.country,
      description: BUSINESS.neighbourhood,
    },
    sameAs: [BUSINESS.facebook],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Masažo paslaugos",
      itemListElement: offers,
    },
  };

  return JSON.stringify(jsonLd, null, 2);
}

// ─── Inject into index.html ───────────────────────────────────────────────────
function injectIntoHtml(jsonLdString) {
  const htmlPath = path.join(__dirname, "../public/index.html");
  let html = fs.readFileSync(htmlPath, "utf8");

  const scriptTag = `<script type="application/ld+json">\n${jsonLdString}\n</script>`;

  if (html.includes("<!-- JSON_LD_PLACEHOLDER -->")) {
    html = html.replace("<!-- JSON_LD_PLACEHOLDER -->", scriptTag);
  } else if (html.includes('<script type="application/ld+json">')) {
    html = html.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      scriptTag
    );
  } else {
    html = html.replace("</head>", `  ${scriptTag}\n</head>`);
  }

  fs.writeFileSync(htmlPath, html, "utf8");
  console.log("✅ SEO JSON-LD injected into public/index.html");
}

// ─── Run ──────────────────────────────────────────────────────────────────────
try {
  const pricingPanel = loadPricingPanel();
  const jsonLdString = buildJsonLd(pricingPanel);
  injectIntoHtml(jsonLdString);
} catch (err) {
  console.error("❌ generate-seo.js failed:", err.message);
  process.exit(1);
}
