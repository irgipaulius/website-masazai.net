import React, { useState } from "react";
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

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className={styles.section} id="main">
      <div className={styles.section_inner}>
        <div className={styles.intro}>
          <p className={styles.intro_title}>Masažo paslaugos</p>
          <p className={styles.intro_sub}>
            Paslaugos teikiamos profilaktiniais, išvaizdos koregavimo, kosmetiniais,
            celiulito gydymo, skausmų mažinimo ir antistresiniais tikslais.
            Spustelėkite, kad sužinotumėte daugiau.
          </p>
        </div>

        <div className={styles.accordion}>
          {panels.map(({ key, markdown, isPopular }, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={key}
                className={`${styles.panel} ${isPopular ? styles.panel_popular : ""} ${
                  isOpen ? styles.panel_open : ""
                }`}
                onClick={() => !isOpen && toggle(i)}
              >
                {/* Collapsed label — vertical text */}
                <div className={styles.panel_label_wrap}>
                  {isPopular && <span className={styles.panel_dot} />}
                  <span className={styles.panel_label}>{key}</span>
                </div>

                {/* Expanded content */}
                <div className={styles.panel_content}>
                  <div className={styles.panel_content_header}>
                    <h3 className={styles.panel_content_title}>{key}</h3>
                    <button
                      className={styles.close_btn}
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenIndex(null);
                      }}
                      aria-label="Uždaryti"
                    >
                      ×
                    </button>
                  </div>
                  <div className={styles.panel_content_body}>
                    <ReactMarkdown
                      className={mdStyles.reactMarkDown}
                      children={markdown}
                      remarkPlugins={[remarkGfm]}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
