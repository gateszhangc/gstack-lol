import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Newsreader } from "next/font/google";

import { getRuntimeSiteUrl } from "@/lib/runtime-site-url";
import { siteContent } from "@/lib/site-content";

import "./globals.css";

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "700", "800"],
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

const siteUrl = getRuntimeSiteUrl(siteContent.metadata.url);
const projectName = process.env.NEXT_PUBLIC_PROJECT_NAME?.trim() || "gstack";
const googleAnalyticsId =
  process.env.GOOGLE_ANALYTICS_ID?.trim() ||
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID?.trim() ||
  "";
const clarityProjectId =
  process.env.CLARITY_PROJECT_ID?.trim() ||
  process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim() ||
  "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteContent.metadata.title,
  description: siteContent.metadata.description,
  applicationName: projectName,
  keywords: [...siteContent.metadata.keywords],
  authors: [{ name: "gstack.lol" }],
  creator: "gstack.lol",
  publisher: "gstack.lol",
  category: "developer tools",
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: siteContent.metadata.title,
    description: siteContent.metadata.description,
    url: siteUrl,
    siteName: projectName,
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "gstack editorial landing page cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.metadata.title,
    description: siteContent.metadata.description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} antialiased`}
      >
        {googleAnalyticsId ? (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "${googleAnalyticsId}", {
  anonymize_ip: true,
  page_path: window.location.pathname,
});`,
              }}
              id="google-analytics"
            />
          </>
        ) : null}
        {clarityProjectId ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${clarityProjectId}");`,
            }}
            id="microsoft-clarity"
          />
        ) : null}
        {children}
      </body>
    </html>
  );
}
