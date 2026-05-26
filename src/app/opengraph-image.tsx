import { ImageResponse } from "next/og";

export const alt = "Dina Riani — Portfolio BUT GEA, contrôle de gestion";
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
          backgroundColor: "#FEFCF8",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div style={{ width: "48px", height: "2px", backgroundColor: "#C9A84C" }} />
          <div
            style={{
              fontSize: "22px",
              letterSpacing: "8px",
              textTransform: "uppercase",
              color: "#C9A84C",
              fontWeight: 600,
            }}
          >
            Portfolio
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          <span style={{ fontSize: "120px", color: "#C9A84C" }}>Dina</span>
          <span style={{ fontSize: "120px", color: "#1C1815" }}>RIANI</span>
        </div>

        <div style={{ width: "80px", height: "4px", backgroundColor: "#C9A84C", margin: "40px 0" }} />

        <div style={{ fontSize: "34px", color: "#6B6058", maxWidth: "900px", lineHeight: 1.3 }}>
          Étudiante en BUT GEA — spécialisée en contrôle de gestion, comptabilité et finance.
        </div>
      </div>
    ),
    { ...size }
  );
}
