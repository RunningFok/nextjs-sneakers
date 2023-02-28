import Link from "next/link";
import Image from "next/image";

export default async function SneakerBox({ key, id, shoeName, thumbnail }) {
  return (
    <div>
      <li key={key}>
        {shoeName}
        <Link href="${key}">
          <Image src={thumbnail} alt={shoeName} width={200} height={200} />
        </Link>
      </li>
    </div>
  );
}
