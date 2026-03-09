import type { Metadata } from "next";
import { Poppins, Nunito } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Puthal Web - Premium Solutions",
  description: "Next level web development and design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${nunito.variable} antialiased font-body bg-[#fdfaff] min-h-screen text-[#1a0a2a]`}
      >
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />

      </body>
    </html>
  );
}
