import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

type CardProps = {
  title: string;
};

const PreviewCard: React.FC<CardProps> = ({ title }) => {
  return (
    <Link href="/">
      <div className={styles.cardBox}>
        <Image
          className={styles.image}
          src="https://picsum.photos/200/300"
          alt="alt-img"
          width={240}
          height={280}
        />
      </div>
    </Link>
  );
};

export default PreviewCard;
