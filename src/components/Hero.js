import React, { useEffect, useRef } from "react";
import { scroller } from "react-scroll";

import styles from "./Hero.module.css";

export default function Hero() {
  const {
    hero,
    hero_bg,
    hero_container,
    hero_title,
    hero_subtitle,
    hero_about,
    hero_line,
    hero_motion,
    hero_motion_s2,
    hero_motion_s3,
    hero_motion_s4,
    hero_line_wrap,
    hero_cta_button,
  } = styles;

  const heroRef = useRef(null);

  const scrollToPricing = () => {
    scroller.scrollTo("pricing", {
      duration: 1000,
      smooth: true,
      offset: -80,
    });
  };

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotionQuery.matches) return;

    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const rangeX = 12;
    const rangeY = 16;

    let rafId = 0;

    const setVars = (x, y) => {
      el.style.setProperty("--parallax-x", `${x.toFixed(2)}px`);
      el.style.setProperty("--parallax-y", `${y.toFixed(2)}px`);
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setVars(currentX, currentY);
      rafId = window.requestAnimationFrame(animate);
    };

    const onMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      targetX = clamp(nx * rangeX, -rangeX, rangeX);
      targetY = clamp(ny * rangeY, -rangeY, rangeY);
    };

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;
      const centerY = rect.top + rect.height / 2;
      const t = clamp((centerY - viewportH / 2) / (viewportH / 2), -1, 1);
      targetY = clamp(targetY + t * -6, -rangeY, rangeY);
    };

    const onDeviceOrientation = (e) => {
      if (typeof e.beta !== "number" || typeof e.gamma !== "number") return;
      const nx = clamp(e.gamma / 25, -1, 1);
      const ny = clamp(e.beta / 35, -1, 1);
      targetX = clamp(nx * rangeX, -rangeX, rangeX);
      targetY = clamp(ny * rangeY, -rangeY, rangeY);
    };

    setVars(0, 0);
    rafId = window.requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("deviceorientation", onDeviceOrientation, { passive: true });

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("deviceorientation", onDeviceOrientation);
    };
  }, []);

  return (
    <div className={hero} id="hero" ref={heroRef}>
      <div
        className={hero_bg}
        aria-hidden="true"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.jpg)` }}
      ></div>
      <div className={hero_container}>
        <p className={`${hero_title} hero_title animate__animated animate__fadeInDown`}>
          <span className={hero_motion}>MASAŽAS</span>
        </p>
        <p className={`${hero_subtitle} hero_subtitle animate__animated animate__fadeInDown`}>
          <span className={`${hero_motion} ${hero_motion_s2}`}>PAS JELENĄ</span>
        </p>
        <div className={`${hero_line_wrap} hero_line_wrap animate__animated animate__fadeIn`}>
          <div className={`${hero_line} hero_line`}></div>
        </div>
        <p className={`${hero_about} hero_about animate__animated animate__fadeInDown`}>
          <span className={`${hero_motion} ${hero_motion_s3}`}>Profesionalus masažas Kaune</span>
        </p>
        <button
          className={`${hero_cta_button} hero_cta_button animate__animated animate__fadeInUp`}
          onClick={scrollToPricing}
        >
          Žiūrėti kainas ↓
        </button>
      </div>
    </div>
  );
}
