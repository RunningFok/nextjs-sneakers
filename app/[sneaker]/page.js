import FetchSneakerId from "../helper/FetchSneakerId";
import Link from "next/link";
import Image from "next/image";

export default async function SneakerDetail({ params }) {
  console.log(params);
  const { sneaker } = params;
  const sneakerData = await FetchSneakerId({ styleID: sneaker });
  return(
    <div>
    {sneakerData.shoeName}
    <Link href={`/${sneakerData.styleID}`}>
      <Image src={sneakerData.thumbnail} alt={sneakerData.shoeName} width={200} height={200} />
    </Link>
    <h2>{sneakerData.brand}</h2>
    <h2>{sneakerData.colorway}</h2>
    <h2>{sneakerData.retailPrice}</h2>
    <h2>{sneakerData.releaseDate}</h2>
    <p>{sneakerData.description}</p>

</div>
  )

}
