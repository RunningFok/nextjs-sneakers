import { useEffect } from "react";

export default function useUpdateSneakerz({data}) {
  useEffect(() => {
    console.log("helllloooo from updatesneakerzzzzzzzzzzz")
    console.log(data);
  }, [data]);
}
