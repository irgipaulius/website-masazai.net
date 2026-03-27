import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { PricingPanelContents } from "./panel/PricingPanel";
import styles from "./MassageAccordion.module.css";
import mdStyles from "./markdown.module.css";

const POPULAR_INDICES = new Set([1, 3, 5, 6, 4, 7]);

export default function MassageAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const allKeys = Object.keys(PricingPanelContents.contents);

  const panels = Object.entries(PricingPanelContents.contents)
    .filter(([key]) => key !== "Kainoraštis")
    .map(([key, markdown]) => ({
      key,
      markdown,
      isPopular: POPULAR_INDICES.has(allKeys.indexOf(key)),
    }));

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  return (
    <section className={styles.section} id="main">
      <div className={styles.intro}>
        <h2 className={styles.intro_title}>Masažo paslaugos</h2>
        <p className={styles.intro_sub}>
          Paslaugos teikiamos profilaktiniais, išvaizdos koregavimo, kosmetiniais,
          celiulito gydymo, skausmų mažinimo ir antistresiniais tikslais.
        </p>
      </div>

      <div className={styles.cards_wrap}>
        <div className={styles.cards}>
          {panels.map(({ key, isPopular }, i) => (
            <button
              key={key}
              className={`${styles.card} ${isPopular ? styles.card_popular : ""} ${
                openIndex === i ? styles.card_active : ""
              }`}
              onClick={() => setOpenIndex(i)}
              aria-haspopup="dialog"
            >
              {isPopular && <span className={styles.badge}>⭐ Populiarus</span>}
              <span className={styles.card_name}>{key}</span>
              <span className={styles.card_cta}>Sužinoti daugiau →</span>
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className={styles.overlay}
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={panels[openIndex].key}
        >
          <div
            className={styles.lightbox}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.lightbox_header}>
              <h3 className={styles.lightbox_title}>{panels[openIndex].key}</h3>
              <button
                className={styles.lightbox_close}
                onClick={() => setOpenIndex(null)}
                aria-label="Uždaryti"
              >
                ×
              </button>
            </div>
            <div className={styles.lightbox_body}>
              <ReactMarkdown
                className={mdStyles.reactMarkDown}
                children={panels[openIndex].markdown}
                remarkPlugins={[remarkGfm]}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
