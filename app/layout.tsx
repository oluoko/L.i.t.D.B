import type { Metadata } from "next";
import Script from "next/script";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "L.i.t.D.B",
  description: "Light in the dark Bible",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontVariables} antialiased`} suppressHydrationWarning>
        <Providers>{children}</Providers>
        <Script
          id="reftagger-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var refTagger = {
                settings: {
                  bibleVersion: 'NIV'
                }
              };
            `,
          }}
        />
        <Script
          src="https://api.reftagger.com/v2/RefTagger.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
