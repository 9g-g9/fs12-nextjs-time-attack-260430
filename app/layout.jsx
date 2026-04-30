import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";

import Header from "@/components/common/Header";

const NotoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "할일 기록",
  description: "오늘의 할일을 기록하고 관리합니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={NotoSansKR.className}>
      <body className="min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
