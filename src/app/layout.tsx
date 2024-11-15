import type { Metadata } from "next";
import Header from "./ui/Header";
import GoogleAnalytics from "@/utils/GoogleAnalytics";
import MetaPixel from "@/utils/MetaPixel";
// import "../styles/globals.css";

// const geistSans = localFont({
//   src: 'public/fonts/GeistVF',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: 'public/fonts/GeistVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

export const metadata: Metadata = {
  title: "한국 비자, 투자 비자",
  description:
    "한국은 세계에서 투자 금액이 가장 적어도 투자 비자를 받을 수 있는 국가입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <MetaPixel />
        <Header />
        {children}
      </body>
    </html>
  );
}
