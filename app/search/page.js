"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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

  const allSneakers = sneakerList.map((sneaker) => {
    console.log(sneaker.styleID);
    console.log(sneaker.shoeName);
    console.log(sneaker.thumbnail);
    return (
      <div key={sneaker.styleID}>
        {sneaker.shoeName}
        <Link href={`/${sneaker.styleID}`}>
          <Image
            src={sneaker.thumbnail}
            alt={sneaker.shoeName}
            width={200}
            height={200}
          />
        </Link>
      </div>
    );
  });

  return sneakerList === null ? (
    <h1>Loading... </h1>
  ) : (
    <main>
      <div className="grid gap-16 grid-cols-fluid">{allSneakers}</div>
    </main>
  );
}
