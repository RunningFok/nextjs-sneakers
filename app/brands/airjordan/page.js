import SearchByKeyword from "../../helper/SearchByKeyword";
import SneakerBox from "../../SneakerBox";

export default async function AirJordanPage() {
  const nikeList = await SearchByKeyword({ keyword: "Air Jordan" });
  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {nikeList.map((sneaker) => (
          <SneakerBox
            styleID={sneaker.styleID}
            shoeName={sneaker.shoeName}
            thumbnail={sneaker.thumbnail}
          />
        ))}
      </div>
    </main>
  );
}
