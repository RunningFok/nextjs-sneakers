import SearchByKeyword from "../../helper/SearchByKeyword";
import SneakerBox from "../../SneakerBox";

export default async function AirJordan1Low() {
  const sneakerList = await SearchByKeyword({ keyword: "Air Jordan 1 Low" });
  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {sneakerList.map((sneaker) => (
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
