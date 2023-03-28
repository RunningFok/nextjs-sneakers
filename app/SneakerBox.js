import Link from "next/link";
import Image from "next/image";

export default function SneakerBox({ styleID, shoeName, thumbnail }) {
  return (
    <div key={styleID.toString()}>
      {shoeName}
      <Link href={`/${styleID}`}>
        <Image src={thumbnail} alt={shoeName} width={200} height={200} />
      </Link>
    </div>
  );
}
