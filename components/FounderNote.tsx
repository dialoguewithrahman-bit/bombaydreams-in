export default function FounderNote() {
  return (
    <section
      id="founder"
      style={{
        borderTop: "1px solid #2a2a2a",
        background: "#0c0c0c",
        padding: "120px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "80px",
          alignItems: "start",
        }}
        className="founder-grid"
      >
        {/* Left — label + signature */}
        <div style={{ paddingTop: "6px" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "20px",
            }}
          >
            A note from the founder
          </p>
          <div
            style={{
              width: "32px",
              height: "1px",
              background: "#c9a84c",
              opacity: 0.5,
              marginBottom: "40px",
            }}
          />
          <p
            style={{
              fontSize: "15px",
              fontWeight: 500,
              color: "#f5f0eb",
              marginBottom: "4px",
              letterSpacing: "0.02em",
            }}
          >
            Mohammad H. Rahman
          </p>
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#888880",
            }}
          >
            Founder, Bombay Dreams
          </p>
        </div>

        {/* Right — letter body */}
        <div>
          <p
            style={{
              fontSize: "72px",
              lineHeight: 0.8,
              color: "#c9a84c",
              opacity: 0.25,
              marginBottom: "24px",
              fontFamily: "Georgia, serif",
              userSelect: "none",
            }}
          >
            &ldquo;
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <p
              style={{
                fontSize: "clamp(17px, 2vw, 21px)",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "#f5f0eb",
                letterSpacing: "0.01em",
              }}
            >
              I started Bombay Dreams because I&apos;d watched talented people in this city get
              signed, forgotten, and eventually leave the industry having never been properly
              represented. The problem was never the talent. It was always the agency.
            </p>

            <p
              style={{
                fontSize: "clamp(15px, 1.6vw, 18px)",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "#888880",
              }}
            >
              Most talent agencies in Bombay operate on hope and introductions. We operate on
              systems. Every talent who comes through this roster gets a written 90-day career
              plan, a transparent deal log, and a direct line. Not because it&apos;s nice to
              have. Because your career is a business and it deserves to be run like one.
            </p>

            <p
              style={{
                fontSize: "clamp(15px, 1.6vw, 18px)",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "#888880",
              }}
            >
              I came back to Bombay after three and a half years in the UK with a specific
              frustration: the gap between how international talent management works and how it
              works here. Bombay Dreams is my answer to that gap.{" "}
              <span style={{ color: "#f5f0eb" }}>Eight years in, it still is.</span>
            </p>
          </div>

          <div
            style={{
              marginTop: "48px",
              paddingTop: "40px",
              borderTop: "1px solid #2a2a2a",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <span style={{ fontSize: "10px", color: "#c9a84c" }}>◇</span>
            <p
              style={{
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#888880",
              }}
            >
              Est. 2017 · Bombay, India
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .founder-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
