import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eSIMba - eSIM quốc tế giá tốt, kết nối tức thì",
  description: "Mua eSIM quốc tế, kích hoạt tức thì, không cần SIM vật lý. Kết nối 5G/LTE tốc độ cao ở hơn 185 quốc gia.",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
