import type { Metadata } from "next";
import { Rubik as Font_Rubik } from 'next/font/google'
import "./globals.css";

const Rubik = Font_Rubik({
  weight: ['300','400','500','600','700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Time Tracking Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Rubik.variable} antialiased font-Rubik bg-veryDarkBlue text-paleBlue grid grid-cols-1 place-items-center lg:h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
