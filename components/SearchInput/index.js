import { useRouter } from "next/router";
import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";

export const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState();
  const router = useRouter();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    router.push(`/news/search?term=${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <div className="relative flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search News"
          className="block w-full pr-12 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <div className="absolute inset-y-0 right-0 flex items-center px-1.5 cursor-pointer ">
          <SearchIcon className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </form>
  );
};
