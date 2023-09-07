import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import classNames from "classnames";
import React, { Fragment, useState } from "react";
const ITEMS_PER_PAGE = 1;
function PropertyListMore() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["properties"],
      queryFn: async ({ pageParam = 0 }) => {
        const response = await fetch(
          `/api/property?skip=${pageParam}&limit=${ITEMS_PER_PAGE}`
        );
        const data = await response.json();
        if (!data)
          return {
            properties: [],
            total: 0,
            skip: 0,
          };
        return {
          properties: data.properties,
          total: data.total,
          skip: pageParam,
        };
      },
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.properties.length < ITEMS_PER_PAGE) return undefined;
        return lastPage.properties.length + lastPage.skip;
      },
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
    });
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mb-10">
        {data?.pages.map((item: any, index) => (
          <Fragment key={index}>
            {item.properties.map((property: any) => (
              <div key={property.id}>
                <span>{property.id}</span>
                <img
                  src={property.image[0]}
                  className="w-full h-[200px] rounded-lg object-cover"
                  alt=""
                />
              </div>
            ))}
          </Fragment>
        ))}
      </div>
      <div className="flex items-center justify-center gap-5">
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          Load more
        </button>
      </div>
    </div>
  );
}

export default PropertyListMore;
