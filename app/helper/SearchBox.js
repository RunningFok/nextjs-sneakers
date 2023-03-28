"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchInput = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const onSearch = (event) => {
    event.preventDefault();
    const encodedSearchQuery = encodeURI(searchQuery)
    router.push(`/search?q=${encodedSearchQuery}`)

    console.log("current query:", searchQuery);
  };

  return (
    
    <form className="flex justify-center w-2/3" onSubmit={onSearch}>
      <input
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-zinc-9"
        placeholder="What are you looking for?"
      />
    </form>
  );
};

export default SearchInput;
