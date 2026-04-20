"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: "1px solid #2a2a2a",
        background: "rgba(12,12,12,0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <nav
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontSize: "18px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#f5f0eb",
            textDecoration: "none",
          }}
        >
          Bombay Dreams
        </Link>

        {/* Desktop nav */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            alignItems: "center",
          }}
          className="hidden md:flex"
        >
          {["Talents", "Services", "The Agency", "Brands"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              style={{
                fontSize: "13px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#888880",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#f5f0eb")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#888880")}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <a
            href="#apply"
            style={{
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#888880",
              textDecoration: "none",
              display: "none",
            }}
            className="hidden md:block"
          >
            Apply
          </a>
          <a
            href="#apply"
            style={{
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "8px 20px",
              border: "1px solid #c9a84c",
              color: "#c9a84c",
              textDecoration: "none",
              transition: "all 0.2s",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLElement;
              el.style.background = "#c9a84c";
              el.style.color = "#0c0c0c";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "#c9a84c";
            }}
          >
            Represent me
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <span style={{ width: 22, height: 1.5, background: "#f5f0eb", display: "block" }} />
            <span style={{ width: 22, height: 1.5, background: "#f5f0eb", display: "block" }} />
            <span style={{ width: 22, height: 1.5, background: "#f5f0eb", display: "block" }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            borderTop: "1px solid #2a2a2a",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            background: "#0c0c0c",
          }}
        >
          {["Talents", "Services", "The Agency", "Brands", "Apply"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setOpen(false)}
              style={{
                fontSize: "14px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#888880",
                textDecoration: "none",
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
