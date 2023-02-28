import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Sneaker from "./Sneaker";
import PopularSneakers from "./PopularSneakers";

export default async function Home() {
  const popularSneakers = await PopularSneakers();
  console.log(popularSneakers)
  return (
    <div>
      <h1>Sneaker Page</h1>
      {popularSneakers.map((sneaker) => (
        <Sneaker
          key={sneaker.id}
          id={sneaker.id}
          shoeName={sneaker.shoeName}
          thumbnail={sneaker.thumbnail}
        />
      ))}
    </div>
  );
}
