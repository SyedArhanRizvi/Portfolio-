import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TechStudios | Full Stack & AI Solutions",
  description:
    "TechStudio is a dynamic team of developers delivering high-quality full stack solutions using MERN, Next.js, React Native, and Python. We also build AI/ML-driven applications.",
  keywords: [
    "TechStudio",
    "MERN Stack",
    "Next.js",
    "React Native",
    "Full Stack Development",
    "AI",
    "Machine Learning",
    "Startup",
    "Python",
    "Freelance Team",
    "Web & Mobile Apps",
  ],
  author: "TechStudio Team",
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
