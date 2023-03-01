import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import SneakerBox from "./SneakerBox";
import PopularSneakers from "./helper/PopularSneakers";

export default async function Home() {
  const popularSneakers = await PopularSneakers();
  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {popularSneakers.map((sneaker) => (
          <SneakerBox
            styleID={sneaker.styleID}
            shoeName={sneaker.shoeName}
            thumbnail={sneaker.thumbnail}
          />
        ))}
      </div>
    </main>
  );
}
