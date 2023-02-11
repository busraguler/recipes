import styles from "./styles.module.scss";
import PreviewCard from "../components/PreviewCard";
import CardContainer from "../components/CardContainer";
import Card, { CardProps } from "../components/Card";

async function getRecipes() {
  try {
    const response = await fetch("https://dummyjson.com/posts?limit=10");
    return response.json();
  } catch (error: any) {
    throw new Error(error);
  }
}

export default async function Recipes() {
  const { posts } = await getRecipes();
  return (
    <CardContainer>
      {posts.map((item: CardProps) => {
        return <Card key={item?.id} {...item} />;
      })}
    </CardContainer>
  );
}
