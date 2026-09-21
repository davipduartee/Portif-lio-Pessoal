import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline} em ${site.region}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #070B12 0%, #0F1622 55%, #12203a 100%)",
          padding: "72px",
          color: "#F2F5FA",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "18px",
              border: "2px solid rgba(46,125,255,0.45)",
              background: "rgba(46,125,255,0.16)",
              color: "#7FB2FF",
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            »
          </div>
          <div style={{ display: "flex", fontSize: "34px", fontWeight: 700 }}>
            DL <span style={{ color: "#93A2B8", fontWeight: 400, marginLeft: "10px" }}>Company</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ display: "flex", fontSize: "64px", fontWeight: 700, lineHeight: 1.1, maxWidth: "980px" }}>
            Tecnologia que faz sua concessionária vender mais todo mês.
          </div>
          <div style={{ display: "flex", fontSize: "30px", color: "#93A2B8", maxWidth: "900px" }}>
            Identidade digital · Tráfego pago · IA · CRM próprio
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              padding: "14px 28px",
              borderRadius: "14px",
              background: "#FF6A13",
              color: "#070B12",
              fontSize: "26px",
              fontWeight: 700,
            }}
          >
            Acelerar minhas vendas
          </div>
          <div style={{ display: "flex", fontSize: "26px", color: "#93A2B8" }}>{site.region}</div>
        </div>
      </div>
    ),
    size,
  );
}
