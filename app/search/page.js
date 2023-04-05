"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SneakerBox from "../SneakerBox";

export default function SearchPage() {
  const [sneakerList, setSneakerList] = useState([]);

  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;

  

  async function getData() {
    const response = await fetch(`/api/search?q=${searchQuery}`, {
      next: { revalidate: 10 },
    });
    return response.json();
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData();

      setSneakerList(response);
    };
    fetchData();
  }, [getData]);

  console.log("sneakerList = await getData()");
  console.log(sneakerList);

  console.log("Return Here");

  const searchedSneakers = (
    <div>
      <h2 className="text-black text-center m-20 ui-sans-serif font-bold	text-3xl">
        Searched for <span className="italic font-black">{searchQuery}</span>
      </h2>
      <div className="grid h-full relative w-full flex-col flex-1 gap-16 mb-12 grid-cols-fluid items-center justify-center p-10 sm:flex-row bg-white">
        {sneakerList.map((sneaker) => (
          <SneakerBox
            styleID={sneaker.styleID}
            shoeName={sneaker.shoeName}
            thumbnail={sneaker.thumbnail}
          />
        ))}
      </div>
    </div>
  );

  return sneakerList === null ? (
    <h1>Loading... </h1>
  ) : (
    <div className="flex-1 flex-grow grid gap-16 mb-20 grid-cols-fluid items-center justify-center bg-white">
      {searchedSneakers}
    </div>
  );
}
