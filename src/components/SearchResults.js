import React from "react";

import ShortNFilterBar from "./ShortNFilterBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import InfiniteScroll from "react-infinite-scroll-component";
export default function SearchResults() {
  const [itemList, setitemList] = useState([]);

  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    console.log("is in effect");
    
    getData();
    
  }, [id]);
  
  const getData = async () => {
    
    let url = "http://127.0.0.1:5000/search/" + id + "/1";
    let data = await fetch(url);
    let passedData = await data.json();
    setitemList(passedData.products);
    setPage(2);
    setloading(false);
    
  };

  const fetchMoreData = async () => {
    setPage(page + 1);
    console.log(page, "featch ,eore");
    let url = "http://127.0.0.1:5000/search/" + id + "/" + page;
    let data = await fetch(url);
    let passedData = await data.json();
    passedData.products.map((item) => {
      setitemList((previousState) => [...previousState, item]);
    });

    setloading(false);
  };
  return (
    <>
      <ShortNFilterBar />
      <div className=" flex flex-wrap  pt-16">
        <div className="flex w-full relative self-center justify-center">
          {loading ? (
            <HashLoader color="#898989" className="self-center" />
          ) : (
            ""
          )}
        </div>
        <InfiniteScroll
          dataLength={itemList.length/4}
          next={fetchMoreData}
          hasMore={true}
          loader={<HashLoader color="#898989" className="self-center" />}
          className="flex flex-wrap"
        >
          {itemList.map((item) => {
            return (
              <div class="flex justify-center w-1/2 mx-0 border-l border-b p-0 h-84 ">
                <div class="shadow-sm bg-white max-w-sm justify-center content-center">
                  <a href={item.productUrl} className="flex flex-col ">
                    <img
                      class="max-h-44 w-fit self-center"
                      src={item.imageUrls}
                      alt=""
                    />

                    <div class="p-2">
                      <h5 class="text-gray-700 text-sm font-bold mb-0 ">
                        {item.productBrand}
                      </h5>
                      <h5 class="text-gray-700 text-sm font-medium mb-0 ">
                        {item.title}
                      </h5>

                      <h5 class="text-gray-800 text-sm font-medium mb-0 ">
                        {"₹" + item.flipkartSpecialPrice}
                      </h5>
                      <h5 class="text-gray-400 text-sm font-medium mb-0 line-through">
                        {"₹" + item.flipkartSellingPrice}
                      </h5>
                      <p class="text-gray-500 text-sm mb-0.5 indent-0 self-center">
                        {item.store}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </>
  );
}
