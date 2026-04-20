"use client";

import { useState, useEffect } from "react";

export default function RotatePrompt() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => {
      const isMobile = window.innerWidth < 1024;
      const isPortrait = window.innerHeight > window.innerWidth;
      setVisible(isMobile && isPortrait);
    };

    check();
    window.addEventListener("resize", check);
    window.addEventListener("orientationchange", check);
    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("orientationchange", check);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#0c0c0c",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        padding: "48px 32px",
      }}
    >
      {/* Top wordmark */}
      <p
        style={{
          position: "absolute",
          top: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "13px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#c9a84c",
          whiteSpace: "nowrap",
          fontWeight: 500,
        }}
      >
        Bombay Dreams
      </p>

      {/* Animated phone icon */}
      <div style={{ position: "relative", width: "80px", height: "80px" }}>
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "80px",
            height: "80px",
            animation: "rotatePhone 2.4s cubic-bezier(0.4,0,0.2,1) infinite",
          }}
        >
          {/* Phone body */}
          <rect
            x="22"
            y="8"
            width="36"
            height="64"
            rx="6"
            stroke="#c9a84c"
            strokeWidth="2"
            fill="none"
          />
          {/* Screen */}
          <rect
            x="26"
            y="18"
            width="28"
            height="42"
            rx="2"
            fill="#1a1a1a"
            stroke="#2a2a2a"
            strokeWidth="1"
          />
          {/* Home indicator */}
          <rect x="34" y="64" width="12" height="2" rx="1" fill="#c9a84c" opacity="0.6" />
          {/* Speaker */}
          <rect x="33" y="11" width="14" height="2" rx="1" fill="#c9a84c" opacity="0.4" />
        </svg>

        {/* Arc arrow */}
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "-20px",
            right: "-28px",
            width: "56px",
            height: "56px",
            animation: "arcPulse 2.4s cubic-bezier(0.4,0,0.2,1) infinite",
          }}
        >
          <path
            d="M20 80 A50 50 0 0 1 80 20"
            stroke="#c9a84c"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />
          {/* Arrowhead */}
          <polygon
            points="80,8 92,24 68,24"
            fill="#c9a84c"
            opacity="0.9"
          />
        </svg>
      </div>

      {/* Text */}
      <div style={{ textAlign: "center", maxWidth: "260px" }}>
        <h2
          style={{
            fontSize: "26px",
            fontWeight: 300,
            letterSpacing: "-0.01em",
            color: "#f5f0eb",
            lineHeight: 1.2,
            marginBottom: "16px",
          }}
        >
          Rotate your phone
        </h2>
        <p
          style={{
            fontSize: "13px",
            color: "#888880",
            letterSpacing: "0.04em",
            lineHeight: 1.7,
          }}
        >
          This experience is best viewed in landscape mode.
        </p>
      </div>

      {/* Thin gold divider */}
      <div
        style={{
          width: "40px",
          height: "1px",
          background: "#c9a84c",
          opacity: 0.5,
        }}
      />

      {/* Bottom label */}
      <p
        style={{
          fontSize: "11px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#888880",
        }}
      >
        Models · Actors · Creators
      </p>

      <style>{`
        @keyframes rotatePhone {
          0%   { transform: rotate(0deg); }
          25%  { transform: rotate(0deg); }
          55%  { transform: rotate(-90deg); }
          75%  { transform: rotate(-90deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes arcPulse {
          0%   { opacity: 0.3; transform: scale(0.9); }
          25%  { opacity: 1;   transform: scale(1); }
          55%  { opacity: 0.3; transform: scale(0.9); }
          75%  { opacity: 0.6; transform: scale(0.95); }
          100% { opacity: 0.3; transform: scale(0.9); }
        }
      `}</style>
    </div>
  );
}
