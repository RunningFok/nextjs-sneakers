import Image from "next/image";
import { Inter } from "@next/font/google";
import SearchByKeyword from "../../helper/SearchByKeyword";
import SneakerBox from "../../SneakerBox";

export default async function AdidasGazelle() {
  const sneakerList = await SearchByKeyword({ keyword: "Adidas Gazelle" });
  console.log(sneakerList);
  return (
    <div className="grid gap-16 mb-12 grid-cols-fluid items-center justify-center p-10 sm:flex-row bg-white">
      {sneakerList.map((sneaker) => (
        <SneakerBox
          styleID={sneaker.styleID}
          shoeName={sneaker.shoeName}
          thumbnail={sneaker.thumbnail}
        />
      ))}
    </div>
  );
}
