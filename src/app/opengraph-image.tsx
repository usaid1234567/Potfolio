import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/constants/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#07070C",
          color: "#EDEDF4",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 32,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#A78BFA",
            marginBottom: 24,
          }}
        >
          {SITE_CONFIG.name}
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            textAlign: "center",
            padding: "0 80px",
            backgroundImage: "linear-gradient(135deg, #7C5CFF 0%, #3E8BFF 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {SITE_CONFIG.title}
        </div>
      </div>
    ),
    { ...size }
  );
}
