import React from "react";
import ScrollAnimation from "./ScrollAnimation";

export default function Hero() {
  return (
    <ScrollAnimation delay={50}>
      <section className="hero-wrap">

        <div className="hero-left">
          <div className="fade-in"></div>
          <div className="left-gradient-shapes" />

          <div className="hex-frame">
            <img src="/pic(1).png" alt="portrait" />
          </div>
        </div>

        <div className="hero-right">
          <div className="fade-in"></div>
          <h1>Welcome to my portfolio</h1>
        </div>

      </section>
    </ScrollAnimation>
  );
}
