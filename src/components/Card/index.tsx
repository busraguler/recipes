import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

export type CardProps = {
  title: string;
  id?: string;
  body?: string;
};

const Card: React.FC<CardProps> = ({ id, title, body }) => {
  return (
    <Link href={`/${id}`}>
      <div className={styles.cardContainer}>
        <div className={styles.cardImage}>
          <Image src="/kahvalti.jpg" alt="alt-img" fill />
        </div>

        <div className={styles.textContainer}>
          <div className={styles.title}>{title}</div>
          <p>
            Sadece 10 dakikada bekletmeden hazırlayabileceğiniz mayasız
            kabardıkça kabaran yumuşacık nefis bazlamalar 💯Sadece 10 dakikada
            bekletmeden hazırlayabileceğiniz mayasız kabardıkça kabaran
            yumuşacık nefis bazlamalar 💯
          </p>
        </div>
      </div>
    </Link>
  );
};
export default Card;
