import FetchSneakerId from "../helper/FetchSneakerId";
import Link from "next/link";
import Image from "next/image";

export default async function SneakerDetail({ params }) {
  console.log(params);
  const { sneaker } = params;
  const sneakerData = await FetchSneakerId({ styleID: sneaker });
  return (
    <div className=" bg-white text-black py-8 place-items-center ">
      <title>nextSneaker - {sneaker.shoeName}!</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Find your next pair of sneakers!" />
      <link rel="icon" href="/favicon.ico" />
      <h2 className="text-center ui-sans-serif font-bold text-2xl">
        {sneakerData.shoeName}
      </h2>

      <Link href={`/${sneakerData.styleID}`}>
        <Image
          className="place-items-center mx-auto"
          src={sneakerData.thumbnail}
          alt={sneakerData.shoeName}
          width={600}
          height={600}
        />
      </Link>
      <h2 className="text-center font-semibold text-base">
        Release Date:{sneakerData.releaseDate}
      </h2>
      <h2 className="text-center font-semibold text-base">
        {sneakerData.colorway}
      </h2>
      <h2 className="text-center font-semibold text-xl">
        ${sneakerData.retailPrice}
      </h2>
      <br />
      <br />
      <p className="text-center font-normal text-sm mx-60">
        {sneakerData.description}
      </p>
    </div>
  );
}
