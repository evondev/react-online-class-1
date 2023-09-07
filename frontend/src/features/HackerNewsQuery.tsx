import { fetchingHits } from "@/request/news-request";
import { useQuery } from "@tanstack/react-query";
import { debounce } from "lodash";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
type HackerNewsResponse = {
  title?: string;
  url?: string;
};

function HackerNewsQuery() {
  const [query, setQuery] = useState("");
  const { data, isLoading, error, isFetching, refetch } = useQuery({
    queryKey: ["hits", query],
    queryFn: () => fetchingHits(query),
    cacheTime: 1000 * 60 * 10,
    staleTime: 1000 * 60 * 5,
    // enabled: !!id,
    // refetchOnWindowFocus: false,
  });
  const handleChangeQuery = debounce((e: any) => {
    setQuery(e.target.value);
  }, 500);
  return (
    <div>
      <div className="p-5">
        <input
          type="text"
          placeholder="Enter your query"
          className="w-full p-3 border border-gray-200 rounded-lg disabled:bg-gray-100"
          onChange={handleChangeQuery}
          disabled={isLoading || isFetching}
        />
      </div>
      <button onClick={() => refetch()}>Refetch data</button>
      {/* <button className="btn-attribute">Add attribute</button> */}
      {/* <button onClick={() => setQuery(randomData)}>Change query</button> */}
      {isLoading && <div>Loading...</div>}
      {/* {loading && <div>Loading...</div>}
      { */}
      {!isLoading &&
        data.length > 0 &&
        data.map((hit: any, index: number) => (
          <div key={index}>{hit.title}</div>
        ))}
    </div>
  );
}

export default HackerNewsQuery;
