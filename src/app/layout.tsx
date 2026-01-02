import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import TopNav from "@/components/topNav/TopNav";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

// export const viewport: Viewport = {
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "red" },
//     { media: "(prefers-color-scheme: black)", color: "red" },
//   ],
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        {/* Google tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17199578214"
          strategy="afterInteractive"
        />

        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'AW-17199578214');
          `}
        </Script>
      </head>
      <body>
        <Providers
          themeProps={{ attribute: "class", defaultTheme: "light" }}
        >
          <section className="relative">
            <TopNav />
            {children}
          </section>
        </Providers>
      </body>
    </html>
  );
}
