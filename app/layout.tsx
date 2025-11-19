import type { Metadata } from "next";
import { Oswald, Raleway } from "next/font/google";
import "./globals.css";
import NavPanel from "./components/NavPanel"
import WorkAvailability from "./components/WorkAvailability";
import CopyrightBar from "./components/CopyrightBar"


const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "700"]
})

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400"]
})

export const metadata: Metadata = {
  title: "Full-Stack Developer | React & Node.js | Ryno van Eeden",
  description: "Portfolio of Full-Stack Developer Ryno van Eeden, based in Michigan, USA. Experienced in React, Next.js, Node.js, MongoDB, Tailwind CSS and modern web development. View projects, skills, and contact information.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Node.js Developer",
    "MongoDB",
    "Tailwind CSS",
    "Remote Developer",
    "Michigan Developer",
    "Portfolio",
    "Web Developer"
  ],
  alternates: {
  canonical: "https://www.rvaneeden.com",
},
  authors: [{ name: "Ryno van Eeden" }],
  creator: "Ryno van Eeden",
  publisher: "Ryno van Eeden",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Full-Stack Developer Portfolio | React & Node.js | Ryno van Eeden",
    description:
      "Explore the portfolio of Full-Stack Developer Ryno van Eeden. Skilled in React, Next.js, Node.js, MongoDB, Tailwind CSS and modern web development.",
    url: "https://www.rvaneeden.com",
    siteName: "Ryno van Eeden Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ryno van Eeden Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
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
  className={`bg-black text-white ${raleway.variable} ${oswald.variable} antialiased`}
>
        
        <NavPanel />
        <WorkAvailability />
        {children}
        <CopyrightBar />
      </body>
    </html>
  );
}
