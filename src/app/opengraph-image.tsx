import { ImageResponse } from "next/og";
import { siteUrl } from "@/lib/site";

export const alt = "Neeraj Yamaji — Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px 76px",
          background: "#080a0f",
          color: "#f3f5f7",
          fontFamily: "sans-serif",
          borderLeft: "12px solid #3b82f6",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "#3b82f6" }} />
          <div style={{ fontSize: 24, color: "#9ba6b9" }}>PORTFOLIO / PUNE, INDIA</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -4 }}>Neeraj Yamaji</div>
          <div style={{ fontSize: 38, color: "#b6c1d5" }}>Frontend Developer</div>
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 16, fontSize: 25 }}>
            <div style={{ color: "#78a9ff" }}>React</div>
            <div style={{ color: "#4c566b" }}>/</div>
            <div style={{ color: "#78a9ff" }}>TypeScript</div>
            <div style={{ color: "#4c566b" }}>/</div>
            <div style={{ color: "#78a9ff" }}>AI tools</div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #273043", paddingTop: 26, fontSize: 22 }}>
          <div style={{ color: "#9ba6b9" }}>{siteUrl.hostname}</div>
          <div style={{ color: "#f87171" }}>Built after midnight.</div>
        </div>
      </div>
    ),
    size,
  );
}
