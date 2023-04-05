import SearchByKeyword from "../../helper/SearchByKeyword";
import SneakerBox from "../../SneakerBox";

export default async function OnitsukaTiger() {
  const sneakerList = await SearchByKeyword({ keyword: "Onitsuga Tiger" });
  return (
    <div>
      <h2 className="text-black text-center m-20 ui-sans-serif font-black	text-3xl">
        {sneakerList[0].keyword}
      </h2>
      <div className="grid gap-16 mb-12 grid-cols-fluid items-center justify-center p-10 sm:flex-row bg-white">
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
}
