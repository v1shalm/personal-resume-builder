import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://personal-resume-builder-ten.vercel.app";
const SITE_TITLE = "Resume Builder — Craft your A4 resume with live preview";
const SITE_DESC =
  "A tactile, keyboard-first resume builder. Drag-and-drop sections, tokenized skills, font + color controls, and ATS-safe PDF export. Built with Next.js and React.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — Resume Builder",
  },
  description: SITE_DESC,
  keywords: [
    "resume builder",
    "CV builder",
    "A4 resume",
    "PDF resume",
    "product designer resume",
    "ATS-safe resume",
    "online resume maker",
    "résumé",
    "Next.js resume builder",
  ],
  authors: [{ name: "Vishal Maurya", url: "https://vishal-maurya.framer.website" }],
  creator: "Vishal Maurya",
  applicationName: "Resume Builder",
  category: "productivity",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESC,
    siteName: "Resume Builder",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    creator: "@v1shalm",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Next auto-registers src/app/icon.svg, src/app/apple-icon.tsx, and
  // src/app/opengraph-image.tsx — no manual `icons` field needed.
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#2a2a30" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Apply the persisted theme class to <html> BEFORE React hydrates, so the
// page never flashes with the wrong palette. Defaults to dark when no
// preference is stored.
const themeBootstrap = `
(function() {
  try {
    var stored = JSON.parse(localStorage.getItem('resume-builder:theme') || 'null');
    var t = stored && stored.state && stored.state.theme ? stored.state.theme : 'dark';
    if (t === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
