import { ReactNode } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./globals.scss";

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
