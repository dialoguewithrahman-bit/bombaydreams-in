"use client";

import { useState, useActionState } from "react";
import { submitBrandForm } from "@/app/actions";

const campaignTypes = ["Influencer", "Brand Film", "Editorial", "Event"];

const initialState = { success: false, message: "" };

export default function BrandsSection() {
  const [activeCampaign, setActiveCampaign] = useState("Influencer");
  const [state, formAction, pending] = useActionState(submitBrandForm, initialState);

  return (
    <section
      id="brands"
      style={{
        borderTop: "1px solid #2a2a2a",
        background: "#0f0f0f",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "120px 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: "80px", maxWidth: "800px" }}>
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#c9a84c",
              marginBottom: "16px",
            }}
          >
            For brands
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: "#f5f0eb",
              lineHeight: 1.15,
              marginBottom: "24px",
            }}
          >
            Casting that closes in days, not weeks.
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#888880",
            }}
          >
            Talent that actually shows up — briefed, on-message, on-time. Curated shortlist, rate
            card, and availability within 24 working hours.
          </p>
        </div>

        {/* Campaign type tabs */}
        <div style={{ display: "flex", gap: "0", marginBottom: "64px", flexWrap: "wrap" }}>
          {campaignTypes.map((type, i) => (
            <button
              key={type}
              onClick={() => setActiveCampaign(type)}
              style={{
                padding: "12px 28px",
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                background: activeCampaign === type ? "#c9a84c" : "transparent",
                color: activeCampaign === type ? "#0c0c0c" : "#888880",
                border: "1px solid",
                borderColor: activeCampaign === type ? "#c9a84c" : "#2a2a2a",
                borderRight: i < campaignTypes.length - 1 ? "none" : "1px solid",
                borderRightColor: activeCampaign === type ? "#c9a84c" : "#2a2a2a",
                transition: "all 0.2s",
                fontWeight: activeCampaign === type ? 600 : 400,
              }}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="brands-grid"
        >
          {/* Left: info */}
          <div>
            <div style={{ marginBottom: "48px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 300,
                  color: "#f5f0eb",
                  marginBottom: "16px",
                  letterSpacing: "-0.01em",
                }}
              >
                {activeCampaign} casting
              </h3>
              <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#888880" }}>
                {activeCampaign === "Influencer" &&
                  "Micro to macro influencers with authentic audiences. Verified engagement rates and brand safety scores included in every brief."}
                {activeCampaign === "Brand Film" &&
                  "Actors and directors with proven on-camera presence. Full production coordination and contract management included."}
                {activeCampaign === "Editorial" &&
                  "Editorial models with diverse portfolio experience. Rate cards, usage rights, and exclusivity terms provided upfront."}
                {activeCampaign === "Event" &&
                  "Hosts, emcees, and brand ambassadors for live events. Availability confirmed 48 hours in advance, no last-minute surprises."}
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                "Curated shortlist within 24 working hours",
                "Rate card transparency — no hidden fees",
                "ASCI-compliant brief review included",
                "Payment handled through agency",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <span style={{ color: "#c9a84c", marginTop: "2px", fontSize: "10px" }}>◇</span>
                  <p style={{ fontSize: "14px", color: "#888880", lineHeight: 1.6 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div style={{ background: "#141414", border: "1px solid #2a2a2a", padding: "48px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 300,
                color: "#f5f0eb",
                marginBottom: "32px",
                letterSpacing: "-0.01em",
              }}
            >
              Start a brief
            </h3>

            {state.success ? (
              <div
                style={{
                  padding: "24px",
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid #c9a84c",
                  color: "#c9a84c",
                  fontSize: "14px",
                  lineHeight: 1.6,
                }}
              >
                {state.message}
              </div>
            ) : (
              <form action={formAction} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <input type="hidden" name="campaign_type" value={activeCampaign} />

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={labelStyle}>Company *</label>
                    <input name="company" required placeholder="Brand name" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Your name</label>
                    <input name="name" placeholder="Full name" style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="work@brand.com"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Budget range</label>
                  <select name="budget" style={selectStyle}>
                    <option value="">Select budget</option>
                    <option>Under ₹1L</option>
                    <option>₹1L – ₹5L</option>
                    <option>₹5L – ₹20L</option>
                    <option>₹20L+</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Campaign brief</label>
                  <textarea
                    name="brief"
                    rows={4}
                    placeholder="Tell us about your campaign, timeline, and talent requirements..."
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                {state.message && !state.success && (
                  <p style={{ fontSize: "13px", color: "#e05a5a" }}>{state.message}</p>
                )}

                <button
                  type="submit"
                  disabled={pending}
                  style={{
                    padding: "14px 32px",
                    background: pending ? "#888880" : "#c9a84c",
                    color: "#0c0c0c",
                    border: "none",
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: pending ? "not-allowed" : "pointer",
                    fontWeight: 600,
                    transition: "opacity 0.2s",
                  }}
                >
                  {pending ? "Submitting..." : "Send brief"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .brands-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "11px",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#888880",
  marginBottom: "8px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  background: "#0c0c0c",
  border: "1px solid #2a2a2a",
  color: "#f5f0eb",
  fontSize: "14px",
  fontFamily: "inherit",
  outline: "none",
  transition: "border-color 0.2s",
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  cursor: "pointer",
};
