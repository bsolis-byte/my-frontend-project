import "./globals.css";
import type { Metadata } from "next";
import Nav from "../components/Nav";
import ScrollAnimation from "../components/ScrollAnimation";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <ScrollAnimation children={undefined} />
        {children}
      </body>
    </html>
  );
}
