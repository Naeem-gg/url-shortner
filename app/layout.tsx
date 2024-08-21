import { IBM_Plex_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ReactNode } from "react";

const fontHeading = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: "400",
});

const fontBody = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: "400",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}
      >
        {children}
      </body>
    </html>
  );
}
