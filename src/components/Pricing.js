import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { PricingPanelContents } from "./panel/PricingPanel";
import styles from "./Pricing.module.css";
import mdStyles from "./markdown.module.css";

export default function Pricing() {
  const { pricing, pricing_container, pricing_title, pricing_table } = styles;
  const { reactMarkDown } = mdStyles;

  const priceTableMarkdown = PricingPanelContents.contents["Kainoraštis"];

  return (
    <div className={pricing} id="pricing">
      <div className={pricing_container}>
        <h2 className={pricing_title}>Kainoraštis</h2>
        <div className={pricing_table}>
          <ReactMarkdown
            className={reactMarkDown}
            children={priceTableMarkdown}
            remarkPlugins={[remarkGfm]}
          />
        </div>
      </div>
    </div>
  );
}
