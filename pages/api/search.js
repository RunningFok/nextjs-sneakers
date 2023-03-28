// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import SearchByKeyword from "@/app/helper/SearchByKeyword";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { q: query } = req.query;
      const sneakerList = await SearchByKeyword({ keyword: query });
      res.status(200).json(sneakerList);
    } catch (error) {
      res.status(500).end();
    }
  }
}
