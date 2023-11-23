import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code Sensei",
  description: "Context-Enhanced code search engine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` bg-midnight`}>{children}</body>
    </html>
  );
}
