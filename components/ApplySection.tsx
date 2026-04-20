"use client";

import { useActionState } from "react";
import { submitApplyForm } from "@/app/actions";

const initialState = { success: false, message: "" };

export default function ApplySection() {
  const [state, formAction, pending] = useActionState(submitApplyForm, initialState);

  return (
    <section
      id="apply"
      style={{
        borderTop: "1px solid #2a2a2a",
        background: "#0c0c0c",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "120px 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
        className="apply-grid"
      >
        {/* Left: copy */}
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
            Join the roster
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: "#f5f0eb",
              lineHeight: 1.1,
              marginBottom: "32px",
            }}
          >
            Apply to be represented
          </h2>

          <div
            style={{
              padding: "32px",
              borderLeft: "2px solid #c9a84c",
              background: "#141414",
              marginBottom: "48px",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#f5f0eb",
                lineHeight: 1.6,
                marginBottom: "0",
              }}
            >
              &ldquo;You&apos;ve been signed before. You probably didn&apos;t hear from them for
              three months. Here it&apos;s different.&rdquo;
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              "Written 90-day career plan within seven days",
              "Named brands and audition targets",
              "Four-hour message response guarantee",
              "15% flat commission — no hidden fees",
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
            Application form
          </h3>

          {state.success ? (
            <div
              style={{
                padding: "32px",
                background: "rgba(201,168,76,0.1)",
                border: "1px solid #c9a84c",
                color: "#c9a84c",
                fontSize: "14px",
                lineHeight: 1.7,
              }}
            >
              <p style={{ fontWeight: 600, marginBottom: "8px" }}>Application received.</p>
              <p>{state.message}</p>
            </div>
          ) : (
            <form action={formAction} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={labelStyle}>Full name *</label>
                  <input name="name" required placeholder="Your name" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Profession *</label>
                  <select name="profession" required style={selectStyle}>
                    <option value="">Select</option>
                    <option>Model</option>
                    <option>Actor</option>
                    <option>Creator</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={labelStyle}>Email *</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Phone</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Instagram handle</label>
                <input
                  name="instagram"
                  placeholder="@yourhandle"
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Tell us about yourself</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your experience, goals, and what you're looking for in an agency..."
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
                  padding: "16px 32px",
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
                {pending ? "Submitting..." : "Submit application"}
              </button>

              <p style={{ fontSize: "12px", color: "#888880", lineHeight: 1.6 }}>
                We respond to every application within 48 hours.
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .apply-grid {
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
