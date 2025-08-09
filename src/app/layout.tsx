import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Providers } from "./providers";
import { config } from "../config";

// Load the IBM Plex Sans font with all available weights. The `variable`
// property enables the use of CSS variables for the font in Tailwind classes.
const fontSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

// Define the site‑wide metadata using values from config. This ensures search
// engines and link previews use the correct title and description instead of
// the default Next.js placeholders.
export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} antialiased font-sans`}>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}