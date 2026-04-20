const stats = [
  { label: "27 talents represented", symbol: "◇" },
  { label: "Bombay, India", symbol: "◇" },
  { label: "₹40L+ in deals negotiated", symbol: "◇" },
  { label: "100% on-time payments", symbol: "◇" },
  { label: "15% flat commission — always", symbol: "◇" },
  { label: "48hr deepfake takedown SLA", symbol: "◇" },
  { label: "Cross-format strategy", symbol: "◇" },
];

const allStats = [...stats, ...stats];

export default function TickerSection() {
  return (
    <section
      style={{
        borderTop: "1px solid #2a2a2a",
        borderBottom: "1px solid #2a2a2a",
        padding: "18px 0",
        overflow: "hidden",
        background: "#0c0c0c",
      }}
    >
      <div className="ticker-track" style={{ display: "flex", whiteSpace: "nowrap", width: "max-content" }}>
        {allStats.map((stat, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
              padding: "0 32px",
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#888880",
            }}
          >
            <span style={{ color: "#c9a84c", fontSize: "10px" }}>{stat.symbol}</span>
            {stat.label}
          </span>
        ))}
      </div>
    </section>
  );
}
