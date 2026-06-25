import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brittany Paul — Ozark Cirque",
  description:
    "Aerial artist, educator, and founder of Ozark Cirque. Circus performance and education in Northwest Arkansas.",
  openGraph: {
    title: "Brittany Paul — Ozark Cirque",
    description:
      "Aerial artist, educator, and founder of Ozark Cirque. Circus performance and education in Northwest Arkansas.",
    siteName: "Ozark Cirque",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
