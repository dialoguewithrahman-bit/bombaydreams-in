import Image from "next/image";

const talents = [
  { name: "Aanya Kapoor", category: "Model", image: "/talent-1.jpg" },
  { name: "Vir Sehgal", category: "Model", image: "/talent-4.jpg" },
  { name: "Rohan Mehta", category: "Actor", image: "/talent-2.jpg" },
  { name: "Meher Joshi", category: "Actor", image: "/talent-5.jpg" },
  { name: "Ishita Rao", category: "Creator", image: "/talent-3.jpg" },
  { name: "Kabir Anand", category: "Creator", image: "/talent-6.jpg" },
];

export default function TalentsSection() {
  return (
    <section
      id="talents"
      style={{
        borderTop: "1px solid #2a2a2a",
        background: "#0c0c0c",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "120px 24px" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "64px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#c9a84c",
                marginBottom: "16px",
              }}
            >
              The roster
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
              The people we work with
            </h2>
          </div>
          <a
            href="#apply"
            style={{
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#c9a84c",
              textDecoration: "none",
              borderBottom: "1px solid #c9a84c",
              paddingBottom: "2px",
              whiteSpace: "nowrap",
            }}
          >
            View complete list →
          </a>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {talents.map((talent) => (
            <div
              key={talent.name}
              style={{
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                background: "#141414",
              }}
              className="talent-card"
            >
              <div style={{ position: "relative", paddingBottom: "125%", overflow: "hidden" }}>
                <Image
                  src={talent.image}
                  alt={talent.name}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                    transition: "transform 0.6s ease",
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="talent-img"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, transparent 50%, rgba(12,12,12,0.9) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "24px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#c9a84c",
                      marginBottom: "6px",
                    }}
                  >
                    {talent.category}
                  </p>
                  <h3
                    style={{
                      fontSize: "18px",
                      fontWeight: 400,
                      color: "#f5f0eb",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {talent.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories row */}
        <div
          style={{
            display: "flex",
            gap: "0",
            marginTop: "64px",
            border: "1px solid #2a2a2a",
          }}
        >
          {["Models", "Actors", "Creators"].map((cat, i) => (
            <div
              key={cat}
              style={{
                flex: 1,
                padding: "24px 32px",
                borderRight: i < 2 ? "1px solid #2a2a2a" : "none",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#888880",
                }}
              >
                {cat}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .talent-card:hover .talent-img {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
}
