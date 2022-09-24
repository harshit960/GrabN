import React, { useContext } from "react";
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
      
      let url = "http://127.0.0.1:5000/search/" + id;
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
                    <p class="text-gray-500 text-sm mb-0.5 indent-0 self-center">{item.store}</p>
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
