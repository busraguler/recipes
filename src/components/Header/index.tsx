import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/"></Link>
    </header>
  );
}

export default Header;
