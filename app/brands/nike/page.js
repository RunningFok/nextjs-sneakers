import SearchByKeyword from "../../helper/SearchByKeyword";
import SneakerBox from "../../SneakerBox";

export default async function NikePage() {
  const nikeList = await SearchByKeyword({ keyword: "Nike" });
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