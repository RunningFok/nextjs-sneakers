import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Sneaker from "./sneaker";

const inter = Inter({ subsets: ["latin"] });
const SneaksAPI = require("sneaks-api");

export default function Home() {
  const sneaks = new SneaksAPI();
  const getMostPopular = sneaks.getMostPopular(10, function (err, products) {
    console.log(products);
    console.log(err)
  });

  return (
    <div>
      <h1>Sneaker Page</h1>
      {getMostPopular.map((sneaker) => (
        <Sneaker
          shoeName={sneaker.shoeName}
          id={sneaker._id}
          colorway={sneaker.colorway}
          retailPrice={sneaker.retailPrice}
          releaseDate={sneaker.releaseDate}
          description={sneaker.description}
        />
      ))}
    </div>
  );
}
