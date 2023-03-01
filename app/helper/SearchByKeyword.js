const SneaksAPI = require("sneaks-api");

export default async function SearchByKeyword({ keyword }) {
  const sneaks = new SneaksAPI();
  return await new Promise((resolve, reject) => {
    sneaks.getProducts(
      keyword,
      20,
      function (err, products) {
        const sneakersResult = [];
        products.map(function (sneaker) {
          const newSneaker = {};
          newSneaker["styleID"] = sneaker.styleID;
          newSneaker["brand"] = sneaker.brand;
          newSneaker["shoeName"] = sneaker.shoeName;
          newSneaker["colorway"] = sneaker.colorway;
          newSneaker["retailPrice"] = sneaker.retailPrice;
          newSneaker["releaseDate"] = sneaker.releaseDate;
          newSneaker["description"] = sneaker.description;
          newSneaker["thumbnail"] = sneaker.thumbnail;
          console.log(newSneaker);
          sneakersResult.push(newSneaker);
        });
        resolve(sneakersResult);
        console.log(sneakersResult)
        return sneakersResult;
      },
      (errorResponse) => {
        reject(errorResponse);
      }
    );
  });
}
