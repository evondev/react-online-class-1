import { useQuery } from "@tanstack/react-query";
import classNames from "classnames";
import React, { useState } from "react";
const ITEMS_PER_PAGE = 2;
function PropertyList() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useQuery({
    queryKey: ["properties", currentPage],
    queryFn: async () => {
      const response = await fetch(
        `/api/property?skip=${
          (currentPage - 1) * ITEMS_PER_PAGE
        }&limit=${ITEMS_PER_PAGE}`
      );
      const data = await response.json();
      return data;
    },
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
  const properties = data?.properties || [];
  const total = data?.total || 0;
  const total_pages = Math.ceil(total / ITEMS_PER_PAGE);
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mb-10">
        {properties.map((property: any) => (
          <div key={property.id}>
            <img
              src={property.image[0]}
              className="w-full h-[200px] rounded-lg object-cover"
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-5">
        {new Array(total_pages).fill(0).map((_, index) => (
          <button
            onClick={() => setCurrentPage(index + 1)}
            key={index}
            disabled={currentPage === index + 1}
            className={classNames(
              "flex items-center justify-center w-10 h-10 border rounded-lg ",
              currentPage === index + 1
                ? "bg-blue-500 border-blue-500 text-white"
                : "hover:bg-blue-500 hover:border-blue-500 hover:text-white text-black border-gray-300"
            )}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PropertyList;
