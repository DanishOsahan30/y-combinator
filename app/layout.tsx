import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";



const workSans = Work_Sans({
  variable: "--font-work-sans",
  weight: ['900', '800', '700', '600', '500', '400', '300', '200', '100'],
  style: 'normal',
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Y-Combinator",
  description: "Grow Your Idea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={workSans.variable}
      >
        {children}
      </body>
    </html>
  );
}
