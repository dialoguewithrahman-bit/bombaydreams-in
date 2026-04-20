import Image from "next/image";

const commitments = [
  {
    number: "01",
    title: "Transparent Deal Log",
    description:
      "Every brief, quote, and counter logged in shared dashboard with no hidden deductions.",
    image: "/commit-1.jpg",
  },
  {
    number: "02",
    title: "The Positioning Protocol",
    description:
      "Career positioning audit, live portfolio page on website, and monthly strategy calls.",
    image: "/commit-2.jpg",
  },
  {
    number: "03",
    title: "Payment Guarantee Protocol",
    description: "Agency advances payments if brands delay past 45 days.",
    image: "/commit-3.jpg",
  },
  {
    number: "04",
    title: "ASCI Compliance Layer",
    description: "Brand posts reviewed against ASCI guidelines before publication.",
    image: "/commit-4.jpg",
  },
  {
    number: "05",
    title: "Digital Identity Shield",
    description:
      "Deepfakes, scraped images, and impersonation accounts flagged and removed within 48 hours.",
    image: "/commit-5.jpg",
  },
];

export default function CommitmentsSection() {
  return (
    <section
      id="the-agency"
      style={{
        background: "#0f0f0f",
        borderTop: "1px solid #2a2a2a",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "120px 24px" }}>
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
            Our commitments
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: "#f5f0eb",
              lineHeight: 1.1,
              maxWidth: "600px",
            }}
          >
            What we actually do differently
          </h2>
        </div>

        {/* Commitment items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
          {commitments.map((c, i) => (
            <div
              key={c.number}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0",
                border: "1px solid #2a2a2a",
                marginBottom: "1px",
                background: "#141414",
                overflow: "hidden",
              }}
              className="commitment-row"
            >
              {/* Text side */}
              <div
                style={{
                  padding: "56px 48px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  order: i % 2 === 0 ? 0 : 1,
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    color: "#c9a84c",
                    letterSpacing: "0.14em",
                    marginBottom: "20px",
                    fontWeight: 500,
                  }}
                >
                  {c.number}
                </p>
                <h3
                  style={{
                    fontSize: "clamp(20px, 2.5vw, 28px)",
                    fontWeight: 300,
                    color: "#f5f0eb",
                    marginBottom: "16px",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  {c.title}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#888880" }}>
                  {c.description}
                </p>
              </div>

              {/* Image side */}
              <div
                style={{
                  position: "relative",
                  minHeight: "420px",
                  order: i % 2 === 0 ? 1 : 0,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  style={{ objectFit: "contain", objectPosition: "center 15%" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(12,12,12,0.2)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .commitment-row {
            grid-template-columns: 1fr !important;
          }
          .commitment-row > div:last-child {
            min-height: 240px !important;
            order: 0 !important;
          }
          .commitment-row > div:first-child {
            order: 1 !important;
            padding: 40px 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
