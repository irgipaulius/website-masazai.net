import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { PricingPanelContents } from "./panel/PricingPanel";
import styles from "./ServiceDescriptions.module.css";
import mdStyles from "./markdown.module.css";

export default function ServiceDescriptions() {
  const entries = Object.entries(PricingPanelContents.contents).filter(
    ([key]) => key !== "Kainoraštis"
  );

  const [openItems, setOpenItems] = useState(new Set());
  const itemRefs = useRef({});

  const toggle = (key) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  useEffect(() => {
    const handler = (e) => {
      const { contentKey } = e.detail;
      setOpenItems((prev) => new Set([...prev, contentKey]));
      setTimeout(() => {
        const el = itemRefs.current[contentKey];
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 60);
    };
    document.addEventListener("openService", handler);
    return () => document.removeEventListener("openService", handler);
  }, []);

  return (
    <section
      className={styles.service_descriptions}
      id="service-descriptions"
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Masažo paslaugų aprašymai</h2>
        <div className={styles.accordion}>
          {entries.map(([key, markdown]) => {
            const isOpen = openItems.has(key);
            return (
              <div
                key={key}
                className={styles.item}
                ref={(el) => {
                  itemRefs.current[key] = el;
                }}
              >
                <button
                  className={`${styles.header} ${isOpen ? styles.header_open : ""}`}
                  onClick={() => toggle(key)}
                  aria-expanded={isOpen}
                >
                  <span>{key}</span>
                  <span
                    className={`${styles.chevron} ${isOpen ? styles.chevron_open : ""}`}
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                </button>
                <div
                  className={`${styles.body} ${isOpen ? styles.body_open : ""}`}
                >
                  <div className={styles.body_inner}>
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
