import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0A0A0A",
        color: "#F5F5F5",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontSize: 40,
          fontWeight: 600,
          letterSpacing: -1,
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "#8C52FF",
          }}
        />
        MOVO
      </div>
      <div
        style={{
          marginTop: 28,
          fontSize: 72,
          fontWeight: 600,
          letterSpacing: -2,
        }}
      >
        We Build Momentum.
      </div>
      <div style={{ marginTop: 20, fontSize: 26, color: "#9CA3AF" }}>
        Built in Motion.
      </div>
    </div>,
    { ...size },
  );
}
