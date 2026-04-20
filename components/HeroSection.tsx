"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  { src: "/hero-1.jpg", alt: "Bombay Dreams talent" },
  { src: "/hero-2.jpg", alt: "Bombay Dreams model" },
  { src: "/hero-calvin.jpg", alt: "Bombay Dreams actor" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ position: "relative", height: "100vh", overflow: "hidden", background: "#0c0c0c" }}>
      {/* Images */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            zIndex: i === current ? 1 : 0,
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            style={{ objectFit: "cover", objectPosition: "center top" }}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background:
            "linear-gradient(to bottom, rgba(12,12,12,0.3) 0%, rgba(12,12,12,0.1) 40%, rgba(12,12,12,0.85) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 3,
          padding: "0 24px 72px",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#c9a84c",
            marginBottom: "20px",
            fontWeight: 500,
          }}
        >
          Models · Actors · Creators
        </p>
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 72px)",
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#f5f0eb",
            maxWidth: "800px",
            marginBottom: "32px",
          }}
        >
          Bombay&apos;s agency that treats your career like a business.
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "#888880",
            letterSpacing: "0.04em",
            marginBottom: "40px",
          }}
        >
          Transparent. Proactive. Cross-format.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="#apply"
            style={{
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "14px 32px",
              background: "#c9a84c",
              color: "#0c0c0c",
              textDecoration: "none",
              fontWeight: 600,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
          >
            Apply to roster
          </a>
          <a
            href="#brands"
            style={{
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "14px 32px",
              border: "1px solid rgba(245,240,235,0.3)",
              color: "#f5f0eb",
              textDecoration: "none",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(245,240,235,0.8)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(245,240,235,0.3)")}
          >
            I&apos;m a brand
          </a>
        </div>
      </div>

      {/* Slide dots */}
      <div
        style={{
          position: "absolute",
          right: "24px",
          bottom: "72px",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? 24 : 6,
              height: 2,
              background: i === current ? "#c9a84c" : "rgba(245,240,235,0.3)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.3s",
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
