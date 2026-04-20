"use client";

const services = [
  {
    number: "01",
    category: "Commercial",
    subtitle: "Models",
    description:
      "Print, runway, and brand campaigns with rate-card transparency and usage rights audited line by line.",
  },
  {
    number: "02",
    category: "Screen",
    subtitle: "Actors",
    description:
      "Films, OTT series, and ad films including audition pipelines, coaching introductions, and contract review.",
  },
  {
    number: "03",
    category: "Digital",
    subtitle: "Creators",
    description:
      "Brand integrations, long-form deals, and IP ownership designed to convert audience into screen careers.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        padding: "120px 24px",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "80px" }}>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#c9a84c",
            marginBottom: "16px",
          }}
        >
          What we do
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            color: "#f5f0eb",
            lineHeight: 1.1,
          }}
        >
          Three ways we work
        </h2>
      </div>

      {/* Service cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1px",
          border: "1px solid #2a2a2a",
        }}
      >
        {services.map((service, i) => (
          <div
            key={service.number}
            style={{
              padding: "48px 40px",
              background: "#141414",
              borderRight: i < 2 ? "1px solid #2a2a2a" : "none",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#1a1a1a")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#141414")}
          >
            <p
              style={{
                fontSize: "11px",
                color: "#c9a84c",
                letterSpacing: "0.12em",
                marginBottom: "32px",
                fontWeight: 500,
              }}
            >
              {service.number}
            </p>
            <h3
              style={{
                fontSize: "26px",
                fontWeight: 300,
                color: "#f5f0eb",
                marginBottom: "6px",
                letterSpacing: "-0.01em",
              }}
            >
              {service.category}
            </h3>
            <p
              style={{
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#c9a84c",
                marginBottom: "24px",
              }}
            >
              {service.subtitle}
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#888880",
              }}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Quote */}
      <div
        style={{
          marginTop: "80px",
          padding: "48px 40px",
          borderLeft: "2px solid #c9a84c",
          background: "#141414",
        }}
      >
        <p
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            fontWeight: 300,
            lineHeight: 1.6,
            color: "#f5f0eb",
            fontStyle: "italic",
            maxWidth: "720px",
          }}
        >
          &ldquo;Every talent is mapped across all three lanes from day one. The creator-to-actor
          transition is not an accident — it&apos;s a strategy.&rdquo;
        </p>
      </div>
    </section>
  );
}
