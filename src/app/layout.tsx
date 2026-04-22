import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Resume Builder — Vishal Maurya",
  description: "A personal resume builder with live preview and PDF export.",
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
