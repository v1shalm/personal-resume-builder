import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Resume Builder — a tactile, keyboard-first resume tool with live preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1a1c22",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #24262e 0%, #1a1c22 60%)",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          color: "#e9e9ee",
          padding: 56,
        }}
      >
        {/* Top row — brand mark + copy */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage:
                "linear-gradient(180deg, #ffd967 0%, #ffc43d 50%, #f0a020 100%)",
              boxShadow:
                "inset 0 2px 0 rgba(255,255,255,0.4), 0 0 0 1px #8a5a10, 0 4px 12px rgba(0,0,0,0.5)",
              fontSize: 34,
              fontWeight: 800,
              color: "#2a1a05",
              letterSpacing: -0.5,
            }}
          >
            R
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div
              style={{
                fontSize: 34,
                fontWeight: 700,
                letterSpacing: -0.8,
                color: "#f3f3f6",
              }}
            >
              Resume Builder
            </div>
            <div
              style={{
                fontSize: 18,
                color: "#9497a3",
                letterSpacing: -0.1,
              }}
            >
              Live preview · Drag-and-drop · ATS-safe PDF export
            </div>
          </div>
        </div>

        {/* Two-pane mock */}
        <div
          style={{
            display: "flex",
            flex: 1,
            gap: 22,
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid #35373f",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.04), 0 20px 44px -12px rgba(0,0,0,0.6)",
          }}
        >
          {/* LEFT — paper preview */}
          <div
            style={{
              flex: 1.55,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#13151a",
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #2a2e38 1px, transparent 0)",
              backgroundSize: "20px 20px",
              padding: 28,
            }}
          >
            <div
              style={{
                width: "86%",
                height: "92%",
                backgroundColor: "#fbfaf7",
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                padding: "28px 30px",
                boxShadow:
                  "0 0 0 1px #404350, 0 10px 24px -6px rgba(0,0,0,0.4), 0 24px 42px -16px rgba(0,0,0,0.5)",
              }}
            >
              {/* Name */}
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 600,
                  color: "#23316d",
                  fontFamily: "Georgia, Times New Roman, serif",
                  letterSpacing: -0.8,
                  lineHeight: 1,
                }}
              >
                Vishal Maurya
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#15171e",
                  marginTop: 8,
                }}
              >
                Product Designer
              </div>
              {/* Tagline */}
              <div
                style={{
                  fontSize: 9,
                  color: "#34363f",
                  marginTop: 10,
                  maxWidth: "70%",
                  lineHeight: 1.45,
                }}
              >
                Product Designer crafting end-to-end digital products across
                eCommerce, AI-powered SaaS, and fintech.
              </div>
              {/* Divider */}
              <div
                style={{
                  display: "flex",
                  marginTop: 14,
                  gap: 3,
                }}
              >
                {Array.from({ length: 52 }).map((_, i) => (
                  <div
                    key={i}
                    style={{ width: 4, height: 1, backgroundColor: "#d3d5dc" }}
                  />
                ))}
              </div>
              {/* Body: two columns */}
              <div
                style={{
                  display: "flex",
                  marginTop: 16,
                  gap: 20,
                  flex: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flex: 1.55,
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: "#23316d",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    Experience
                  </div>
                  <div
                    style={{
                      fontSize: 9,
                      fontWeight: 700,
                      color: "#15171e",
                      marginTop: 2,
                    }}
                  >
                    Sr. Associate UI Designer — Pineapple Design Studio
                  </div>
                  <div style={{ fontSize: 7.5, color: "#6c6f7a" }}>
                    Dec 2024 – Present
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 3,
                      marginTop: 4,
                    }}
                  >
                    {[88, 92, 78].map((w, i) => (
                      <div
                        key={i}
                        style={{
                          height: 4,
                          width: `${w}%`,
                          backgroundColor: "#d3d5dc",
                          borderRadius: 1,
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: "#23316d",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    Skills
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 3,
                      marginTop: 2,
                    }}
                  >
                    {[85, 75, 68, 82, 58].map((w, i) => (
                      <div
                        key={i}
                        style={{
                          height: 4,
                          width: `${w}%`,
                          backgroundColor: "#d3d5dc",
                          borderRadius: 1,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — editor mock */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#22252e",
              backgroundImage:
                "linear-gradient(180deg, #252832 0%, #22252e 100%)",
              padding: 22,
              gap: 14,
            }}
          >
            {/* Tabs */}
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              {["Header", "Experience", "Skills", "Education"].map((t, i) => (
                <div
                  key={t}
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: i === 1 ? "#f0f0f3" : "#70737c",
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
            {/* Field label */}
            <div
              style={{
                fontSize: 9,
                fontWeight: 600,
                color: "#8a8d97",
                letterSpacing: 0.8,
                textTransform: "uppercase",
                marginTop: 2,
              }}
            >
              Role
            </div>
            {/* Input field mock */}
            <div
              style={{
                height: 34,
                borderRadius: 8,
                backgroundColor: "#13151a",
                border: "1px solid #35373f",
                display: "flex",
                alignItems: "center",
                padding: "0 12px",
                fontSize: 12,
                color: "#e9e9ee",
                boxShadow:
                  "inset 0 1.5px 2px rgba(0,0,0,0.4)",
              }}
            >
              Sr. Associate UI Designer
            </div>
            {/* Skill chips — tokens */}
            <div
              style={{
                fontSize: 9,
                fontWeight: 600,
                color: "#8a8d97",
                letterSpacing: 0.8,
                textTransform: "uppercase",
                marginTop: 6,
              }}
            >
              Skills
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
              }}
            >
              {["Figma", "User Research", "Prototyping", "Design Systems"].map(
                (s) => (
                  <div
                    key={s}
                    style={{
                      padding: "5px 10px",
                      fontSize: 11,
                      color: "#e9e9ee",
                      backgroundImage:
                        "linear-gradient(180deg, #2c2f38 0%, #24262e 100%)",
                      border: "1px solid #3b3e48",
                      borderRadius: 7,
                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.04), 0 1px 2px rgba(0,0,0,0.4)",
                    }}
                  >
                    {s}
                  </div>
                ),
              )}
            </div>
            {/* Export CTA */}
            <div style={{ flex: 1 }} />
            <div
              style={{
                alignSelf: "flex-end",
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 18px",
                borderRadius: 10,
                fontSize: 13,
                fontWeight: 700,
                color: "#2a1a05",
                backgroundImage:
                  "linear-gradient(180deg, #ffd967 0%, #ffc43d 50%, #f0a020 100%)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.4), 0 0 0 1px #8a5a10, 0 2px 6px rgba(0,0,0,0.4)",
              }}
            >
              Export PDF
              <div
                style={{
                  padding: "2px 6px",
                  borderRadius: 4,
                  border: "1px solid #8a5a10",
                  backgroundColor: "rgba(200,140,30,0.35)",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 1,
                }}
              >
                ⌘E
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
