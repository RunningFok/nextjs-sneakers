import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import SneakerBox from "./SneakerBox";
import PopularSneakers from "./helper/PopularSneakers";

export default async function Home() {
  const popularSneakers = await PopularSneakers();
  return (
    <div>
      <h2 className="text-black text-center m-20 ui-sans-serif font-black	text-7xl">
        Kicks Of The Day
      </h2>
      <div className="grid h-full relative w-full flex-col flex-1 gap-16 mb-12 grid-cols-fluid items-center justify-center p-10 sm:flex-row bg-white">
        {popularSneakers.map((sneaker) => (
          <SneakerBox
            styleID={sneaker.styleID}
            shoeName={sneaker.shoeName}
            thumbnail={sneaker.thumbnail}
          />
        ))}
      </div>{" "}
    </div>
  );
}
