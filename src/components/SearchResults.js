import React from "react";
import ShortNFilterBar from "./ShortNFilterBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SearchResults() {
  const [itemList, setitemList] = useState([]);
  const [product, setproduct] = useState("....");
  const [loading, setloading] = useState(true);
  const [searchQuery, setsearchQuery] = useState("");
  const { id } = useParams();

  useEffect(() => async () => {
    if (loading) {
      let url = "https://grabn-api.herokuapp.com/search/" + id;
      let data = await fetch(url);
      let passedData = await data.json();
      setitemList(passedData.products);
      setloading(false);
    }
  });

  return (
    <>
      <ShortNFilterBar />
      <div className=" flex flex-wrap  pt-16">
        {itemList.map((item) => {
          return (
            <div class="flex justify-center w-1/2 mx-0 border-l border-b p-0 h-72 ">
              <div class="shadow-sm bg-white max-w-sm">
                <a href={item.productBaseInfoV1.productUrl}>
                  <img
                    class="max-h-44"
                    src={
                      item.productBaseInfoV1.imageUrls[0]
                        ? item.productBaseInfoV1.imageUrls[0]
                        : "https://www.dpcanashik.com/uploads/default/blank.png"
                    }
                    alt=""
                  />

                  <div class="p-2">
                    <h5 class="text-gray-700 text-sm font-medium mb-0 ">
                      {item.productBaseInfoV1.title}
                    </h5>

                    <p class="text-gray-500 text-sm mb-0.5 indent-0"></p>
                    <h5 class="text-gray-800 text-sm font-medium mb-0 ">
                      {"₹" + item.productBaseInfoV1.flipkartSpecialPrice}
                    </h5>
                    <h5 class="text-gray-400 text-sm font-medium mb-0 line-through">
                      {"₹" + item.productBaseInfoV1.flipkartSellingPrice}
                    </h5>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
