import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Zack - Building the Web",
  description:
    "I’m Zack, a passionate frontend developer student currently honing my skills at IT-Högskolan. I specialize in building modern, responsive websites using React. This portfolio showcases my work and the journey I’m on to become a skilled web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
