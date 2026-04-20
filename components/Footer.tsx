"use client";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #2a2a2a",
        background: "#0c0c0c",
        padding: "64px 24px 40px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "64px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontSize: "18px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#f5f0eb",
                marginBottom: "12px",
              }}
            >
              Bombay Dreams
            </p>
            <p style={{ fontSize: "13px", color: "#888880", lineHeight: 1.6 }}>
              Bombay · Est. 2017
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#888880",
                lineHeight: 1.7,
                marginTop: "16px",
                maxWidth: "240px",
              }}
            >
              Bombay&apos;s agency that treats your career like a business.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#888880",
                marginBottom: "24px",
              }}
            >
              Navigate
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "Talents", href: "#talents" },
                { label: "Services", href: "#services" },
                { label: "The Agency", href: "#the-agency" },
                { label: "Brands", href: "#brands" },
                { label: "Apply", href: "#apply" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: "14px",
                    color: "#888880",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#f5f0eb")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#888880")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#888880",
                marginBottom: "24px",
              }}
            >
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ fontSize: "14px", color: "#888880" }}>Bombay, India</p>
              <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
                {[
                  { label: "Instagram", href: "https://www.instagram.com/ourbombaydreams/" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/company/our-bombay-dreams/" },
                  { label: "X", href: "https://x.com/ourbombaydreams" },
                ].map((platform) => (
                  <a
                    key={platform.label}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "12px",
                      letterSpacing: "0.06em",
                      color: "#888880",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c9a84c")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#888880")}
                  >
                    {platform.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #2a2a2a",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p style={{ fontSize: "12px", color: "#888880", letterSpacing: "0.04em" }}>
            © 2025 Bombay Dreams. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: "12px",
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
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
