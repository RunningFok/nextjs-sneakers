const SneaksAPI = require("sneaks-api");

export default async function PopularSneakers() {
  const sneaks = new SneaksAPI();
  return await new Promise((resolve, reject) => {
    sneaks.getMostPopular(
      10,
      function (err, products) {
        const popularSneakers = [];
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
          popularSneakers.push(newSneaker);
        });
        resolve(popularSneakers);
        console.log(popularSneakers)
        return popularSneakers;
      },
      (errorResponse) => {
        reject(errorResponse);
      }
    );
  });
}
