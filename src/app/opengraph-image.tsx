import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Resume Builder — craft your A4 resume with a live, interactive editor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Palette — hard-coded hex so Satori renders predictably (no CSS vars).
const YELLOW_TOP = "#FFE17A";
const YELLOW_MID = "#FFCC3D";
const YELLOW_BOT = "#E79A14";
const AMBER = "#FFCC3D";
const AMBER_DEEP = "#8A5A10";
const INK = "#15171E";
const INK_SOFT = "#3A3C44";
const PANEL_BG = "#1B1D25";
const PANEL_BG_HI = "#22252F";
const PANEL_BORDER = "#2C2F39";
const WELL_BG = "#131519";
const WELL_BORDER = "#2A2D36";
const TEXT = "#E9E9EE";
const MUTED = "#8A8D97";
const SUBTLE = "#62656F";

const THEMES = [
  { id: "navy", name: "Navy", accent: "#23316d", sub: "#525c87" },
  { id: "ink", name: "Ink", accent: "#1a1c24", sub: "#50525b" },
  { id: "graphite", name: "Graphite", accent: "#3a4250", sub: "#6d7380" },
  { id: "teal", name: "Teal", accent: "#1f5e5e", sub: "#527a7a" },
];

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "stretch",
          backgroundImage: `linear-gradient(160deg, ${YELLOW_TOP} 0%, ${YELLOW_MID} 50%, ${YELLOW_BOT} 100%)`,
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          color: INK,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Sheen — same top→bottom gloss the CTA button uses */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(180deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0) 40%, rgba(0,0,0,0) 60%, rgba(120,70,0,0.20) 100%)",
            display: "flex",
          }}
        />

        {/* LEFT — copy */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "68px 56px 64px 72px",
            width: 640,
            flexShrink: 0,
            zIndex: 1,
          }}
        >
          {/* Top block: brand + headline + subline */}
          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            {/* Brand chip */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: INK,
                  color: AMBER,
                  fontSize: 24,
                  fontWeight: 800,
                  letterSpacing: -0.4,
                  boxShadow:
                    "0 0 0 1px rgba(0,0,0,0.2), 0 3px 8px rgba(0,0,0,0.18)",
                }}
              >
                R
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  letterSpacing: -0.2,
                  color: INK,
                }}
              >
                Resume Builder
              </div>
            </div>

            {/* Headline */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 68,
                fontWeight: 800,
                letterSpacing: -2.4,
                lineHeight: 1.02,
                color: INK,
              }}
            >
              <span>Craft your A4 résumé</span>
              <span>with a live preview.</span>
            </div>

            {/* Subline */}
            <div
              style={{
                fontSize: 22,
                color: INK_SOFT,
                letterSpacing: -0.2,
                lineHeight: 1.4,
                maxWidth: 520,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>Minimal, designer-crafted layouts with full control over</span>
              <span>typography, theme, and ATS-safe PDF export.</span>
            </div>
          </div>

          {/* Bottom: feature chips — styled to match the product's dark chips */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {[
              "Live preview",
              "Drag & drop",
              "Theme controls",
              "ATS-safe PDF",
            ].map((label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 16px",
                  borderRadius: 999,
                  backgroundColor: INK,
                  color: TEXT,
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: -0.1,
                  boxShadow:
                    "inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 4px rgba(0,0,0,0.18)",
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — tilted, clipped panel showing real Theme + Typography UI */}
        <div
          style={{
            position: "absolute",
            right: -140,
            top: 44,
            width: 720,
            height: 620,
            display: "flex",
            transform: "rotate(4deg)",
            transformOrigin: "top right",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              backgroundImage: `linear-gradient(180deg, ${PANEL_BG_HI} 0%, ${PANEL_BG} 100%)`,
              borderRadius: 18,
              padding: "26px 28px",
              boxShadow: [
                "inset 0 1px 0 rgba(255,255,255,0.04)",
                "0 0 0 1px rgba(0,0,0,0.35)",
                "0 40px 80px -20px rgba(60,30,0,0.55)",
                "0 16px 32px -8px rgba(60,30,0,0.4)",
              ].join(", "),
              gap: 22,
              color: TEXT,
            }}
          >
            {/* THEME */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <SectionHeading
                title="THEME"
                hint="Accent (name + section titles) and sub-accent."
              />
              <div style={{ display: "flex", gap: 10 }}>
                {THEMES.map((t) => {
                  const isActive = t.id === "teal";
                  return (
                    <div
                      key={t.id}
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: 10,
                        overflow: "hidden",
                        boxShadow: isActive
                          ? `0 0 0 2px ${AMBER}, 0 0 0 3.5px ${PANEL_BG}, 0 0 12px -2px ${AMBER}55`
                          : "none",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: 46,
                          backgroundColor: t.accent,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: [
                            "inset 0 0 0 2px rgba(255,255,255,0.28)",
                            "inset 0 1.5px 0 rgba(255,255,255,0.35)",
                            "inset 0 -1.5px 0 rgba(0,0,0,0.3)",
                          ].join(", "),
                        }}
                      >
                        {isActive && (
                          <div
                            style={{
                              display: "flex",
                              width: 16,
                              height: 16,
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#fff",
                              fontSize: 14,
                              fontWeight: 800,
                            }}
                          >
                            ✓
                          </div>
                        )}
                      </div>
                      <div
                        style={{
                          width: "100%",
                          height: 22,
                          backgroundColor: t.sub,
                          boxShadow:
                            "inset 0 0 0 2px rgba(255,255,255,0.22), inset 0 1px 0 rgba(255,255,255,0.3)",
                        }}
                      />
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          paddingTop: 6,
                          paddingBottom: 4,
                          fontSize: 12,
                          fontWeight: 500,
                          color: isActive ? TEXT : MUTED,
                        }}
                      >
                        {t.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* TYPOGRAPHY */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <SectionHeading title="TYPOGRAPHY" hint="Your biggest headline." />

              {/* Target pills */}
              <Segmented
                items={["Name", "Section", "Subtitle", "Body"]}
                activeIndex={0}
              />

              {/* Weight */}
              <FieldLabel text="WEIGHT" />
              <Segmented
                items={["Regular", "Medium", "Semibold", "Bold"]}
                activeIndex={1}
              />

              {/* Tracking */}
              <FieldRow
                label="TRACKING"
                hint="Negative tightens, positive opens."
              />
              <SliderMock value={0.28} display="-0.028 em" />

              {/* Line height (disabled — because target is Name) */}
              <FieldRow
                label="LINE HEIGHT"
                hint="Name uses a fixed line height for heading spacing."
              />
              <SliderMock value={0.22} display="1.05" disabled />
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

function SectionHeading({ title, hint }: { title: string; hint: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: MUTED,
          letterSpacing: 1.3,
        }}
      >
        {title}
      </div>
      <div style={{ fontSize: 11, color: SUBTLE, letterSpacing: -0.1 }}>
        {hint}
      </div>
    </div>
  );
}

function FieldLabel({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "flex",
        fontSize: 11,
        fontWeight: 700,
        color: MUTED,
        letterSpacing: 1.3,
      }}
    >
      {text}
    </div>
  );
}

function FieldRow({ label, hint }: { label: string; hint: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: MUTED,
          letterSpacing: 1.3,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: 11,
          color: SUBTLE,
          letterSpacing: -0.1,
          maxWidth: 320,
          textAlign: "right",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {hint}
      </div>
    </div>
  );
}

function Segmented({
  items,
  activeIndex,
}: {
  items: string[];
  activeIndex: number;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: 3,
        borderRadius: 10,
        backgroundColor: WELL_BG,
        border: `1px solid ${WELL_BORDER}`,
        boxShadow:
          "inset 0 1.5px 2px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(0,0,0,0.25)",
        gap: 2,
      }}
    >
      {items.map((it, i) => {
        const isActive = i === activeIndex;
        return (
          <div
            key={it}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "9px 10px",
              borderRadius: 7,
              fontSize: 13,
              fontWeight: isActive ? 600 : 500,
              color: isActive ? TEXT : MUTED,
              backgroundImage: isActive
                ? `linear-gradient(180deg, ${PANEL_BG_HI} 0%, ${PANEL_BG} 100%)`
                : "none",
              boxShadow: isActive
                ? "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.35), 0 1px 2px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)"
                : "none",
            }}
          >
            {it}
          </div>
        );
      })}
    </div>
  );
}

function SliderMock({
  value,
  display,
  disabled = false,
}: {
  value: number; // 0..1 — thumb position
  display: string;
  disabled?: boolean;
}) {
  const trackHeight = 26;
  const thumbSize = 16;
  const fillPct = Math.max(0, Math.min(1, value)) * 100;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        opacity: disabled ? 0.4 : 1,
      }}
    >
      {/* Track */}
      <div
        style={{
          flex: 1,
          height: trackHeight,
          borderRadius: 999,
          backgroundColor: WELL_BG,
          border: `1px solid ${WELL_BORDER}`,
          boxShadow:
            "inset 0 1.5px 2px rgba(0,0,0,0.45), inset 0 -1px 0 rgba(255,255,255,0.04)",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Fill */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: `calc(${fillPct}% + 16px)`,
            borderRadius: 999,
            backgroundImage:
              "linear-gradient(90deg, #F5E07A 0%, #F5C14A 55%, #D89A1C 100%)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.32), inset 0 -1px 0 rgba(120,70,0,0.28), 0 0 0 1px rgba(130,80,20,0.4)",
            display: "flex",
          }}
        />
        {/* Thumb */}
        <div
          style={{
            position: "absolute",
            left: `calc(${fillPct}% - ${thumbSize / 2}px)`,
            width: thumbSize,
            height: thumbSize,
            borderRadius: 999,
            backgroundImage:
              "linear-gradient(180deg, #ffffff 0%, #f1f1f2 100%)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.9), inset 0 0 0 2px rgba(255,255,255,0.4), 0 0 0 1px rgba(120,70,0,0.55), 0 2px 4px rgba(0,0,0,0.45)",
            display: "flex",
          }}
        />
      </div>

      {/* Value chip */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          height: 30,
          minWidth: 74,
          padding: "0 10px",
          borderRadius: 7,
          backgroundColor: WELL_BG,
          border: `1px solid ${WELL_BORDER}`,
          boxShadow: "inset 0 1.5px 2px rgba(0,0,0,0.45)",
          fontSize: 12.5,
          color: TEXT,
          letterSpacing: -0.1,
        }}
      >
        {display}
      </div>
    </div>
  );
}
