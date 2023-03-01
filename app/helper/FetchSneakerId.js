const SneaksAPI = require("sneaks-api");

export default async function FetchSneakerId({ styleID }) {
  const sneaks = new SneaksAPI();
  const id = styleID;
  return await new Promise((resolve, reject) => {
    sneaks.getProductPrices(
      id,
      function (err, product) {
        const sneaker = {
          styleID: product.styleID.toString(),
          brand: product.brand,
          shoeName: product.shoeName,
          colorway: product.colorway,
          retailPrice: product.retailPrice,
          releaseDate: product.releaseDate,
          description: product.description,
          thumbnail: product.thumbnail,
        };
        resolve(sneaker);
        return sneaker;
      },
      (errorResponse) => {
        reject(errorResponse);
      }
    );
  });
}
