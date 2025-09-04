import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import "./globals.scss";
import { ReactNode } from "react";

export const metadata = {
  title: "Film Quiz",
};

export default function RootLayout({ children, params }: { children: ReactNode; params?: any }) {
  const showBar = !params?.quizId;

  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
