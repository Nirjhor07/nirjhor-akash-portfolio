import { Space_Grotesk, Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

// Configure Space Grotesk for creative and tech display typography
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Configure Inter for clean, legible body reading copy
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "nr7 | Full Stack Developer | portfolio",
  description: "Explore the premium portfolio of NR7 (Ashraf Hossain Akash) - Full Stack Web Developer & Machine Learning Enthusiast. Showcasing pixel-perfect React interfaces, high-performance Node APIs, and intelligent ML models.",
  keywords: "Nirjhor Akash, Ashraf Hossain Akash, NR7, Portfolio, Full Stack Developer, Machine Learning, Next.js, Framer Motion, GSAP",
  authors: [{ name: "Ashraf Hossain Akash", url: "https://github.com/nirjhorakash" }],
  openGraph: {
    title: "nr7 | Full Stack Developer",
    description: "Welcome to my portfolio. I build high-performance, beautiful, and intelligent web applications.",
    url: "https://nirjhor-akash-portfolio.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NR7 | Full Stack Developer & ML Enthusiast",
    description: "Creative developer portfolio featuring React, Node, and ML integrations.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased dark`}
      suppressHydrationWarning={true}
    >
      <body 
        className="min-h-full flex flex-col bg-[#050505] text-[#e5e2e1] font-sans"
        suppressHydrationWarning={true}
      >
        <SmoothScroll>
          <div className="relative min-h-screen flex flex-col overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full ambient-glow-1 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full ambient-glow-2 blur-[120px] pointer-events-none" />
            
            <div className="flex-1 flex flex-col relative z-10">
              {children}
            </div>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
