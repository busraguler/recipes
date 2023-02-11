import React from "react";
import styles from "./styles.module.scss";

type CardProps = {
  children?: React.ReactNode;
};

const CardContainer: React.FC<CardProps> = ({ children }) => {
  return <div className={styles.cardContainer}>{children}</div>;
};

export default CardContainer;
