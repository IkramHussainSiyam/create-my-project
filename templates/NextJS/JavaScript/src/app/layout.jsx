import ToastContainer from "@/components/ToastContainer";
import { Inter } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Project title",
  description: "Project description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontSans.variable}>
        <main>{children}</main>

        <ToastContainer />
      </body>
    </html>
  );
}
