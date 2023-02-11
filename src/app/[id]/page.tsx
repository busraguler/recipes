import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { notFound } from "next/navigation";
import pageStyles from "../styles.module.scss";
import CardContainer from "../../components/CardContainer";

async function getRecipeById(id: any) {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    return response.json();
  } catch (error: any) {
    throw new Error(error);
  }
}
export default async function RecipeDetail({ params }: any) {
  const { id, title, body } = await getRecipeById(params.id);
  if (!id) {
    return notFound();
  }
  return (
    <CardContainer>
      <div className={styles.detailContainer}>
        <h1 className={styles.title}>{title + "Büşra GÜler gülmez sananae"}</h1>
        <div className={styles.detailImage}>
          <Image src="/kahvalti.jpg" alt="alt-img" fill />
        </div>
        <div className={styles.description}>
          <p>{body}</p>
        </div>
      </div>
    </CardContainer>
  );
}
