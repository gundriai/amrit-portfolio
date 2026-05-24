import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://Amrit.dev"),
  title: "Amrit | Video Editor & Creative Visual Storyteller",
  description:
    "Professional video editor specializing in cinematic edits, sports content, commercials, reels, and storytelling visuals. Based in Nepal.",
  keywords: [
    "video editor",
    "cinematic editing",
    "Nepal video editor",
    "sports editing",
    "reels editor",
    "YouTube editor",
    "motion graphics",
    "color grading",
    "commercial video",
    "creative storytelling",
  ],
  authors: [{ name: "Amrit" }],
  creator: "Amrit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Amrit.dev",
    title: "Amrit | Video Editor & Creative Visual Storyteller",
    description:
      "Professional video editor specializing in cinematic edits, sports content, commercials, and storytelling visuals.",
    siteName: "Amrit Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amrit - Video Editor Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amrit | Video Editor & Creative Visual Storyteller",
    description:
      "Professional video editor specializing in cinematic edits, sports content, and storytelling visuals.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="bg-[#080808] text-white overflow-x-hidden"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        {children}
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#0f0f0f",
              border: "1px solid rgba(255,45,85,0.3)",
              color: "white",
            },
          }}
        />
      </body>
    </html>
  );
}
