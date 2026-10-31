import Footer from "@/components/footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default:"Muhammad Alif Anail Adi|portofolio",
    template:"%s|Muhammad Alif Anail Adi",
  },
  description: "Portofolio Muhammad Alif Anail Adi,Siswa SMKN 1 Kepanjen calon Junior Web Ceveloper di Kelas Industri UBIG",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-latar text-gray-800">
        <Navbar/>       
        {children}
        <Footer/>
        </body>
    </html>
  );
}
