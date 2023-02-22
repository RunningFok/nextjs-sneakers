import Link from "next/link";
import Image from "next/image";

export default function Sneaker() {
  return (
    <div>
      <h1>{shoeName}</h1>
      <h2>{colorway}</h2>
      <h2>{retailPrice}</h2>
      <h2>{releaseDate}</h2>
      <p>{description}</p>
      <Link href="{_id}">
        <Image src={thumbnail} alt={shoeName} width={800} height={800}/>
      </Link>
    </div>
  );
}
