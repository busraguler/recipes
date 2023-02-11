import styles from "./styles.module.scss";
import "../styles/globals.scss";
import { Mukta } from "@next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";

const roboto = Mukta({ subsets: ["latin"], weight: "300" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={roboto.className}>
      <body className={styles.container}>
        <Header />
        <main className={styles.pageContainer}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
