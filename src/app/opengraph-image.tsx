import { ImageResponse } from "next/og";
import { logoDataUrl } from "@/lib/brand";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Movo Technologies. Built in Motion.";

export default async function OpengraphImage() {
  const src = await logoDataUrl();
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
        color: "#111111",
        fontFamily: "sans-serif",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} width={180} height={127} alt="" />

      <div
        style={{
          display: "flex",
          marginTop: 24,
          fontSize: 72,
          fontWeight: 600,
          letterSpacing: -2,
        }}
      >
        Built in Motion.
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 20,
          fontSize: 24,
          color: "#6b7280",
        }}
      >
        Technology. Products. Creative systems. Ventures.
      </div>
    </div>,
    { ...size },
  );
}
