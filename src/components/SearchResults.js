import React from "react";
import ShortNFilterBar from "./ShortNFilterBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SearchResults() {
  const [itemList, setitemList] = useState([1, 2, 3, 4]);
  const [name, setname] = useState("....");
  const [loading, setloading] = useState(true);
  const [searchQuery, setsearchQuery] = useState("");
  const { id } = useParams();

  useEffect(() => async () => {
    
      let url =
        "https://affiliate-api.flipkart.net/affiliate/1.0/search.json?query=lg";
      const axios = require("axios");

      const response = await axios.get(
        "https://affiliate-api.flipkart.net/affiliate/1.0/search.json",
        {
          params: {
            query: "spiderman",
          },
          headers: {
            "Fk-Affiliate-Id": "harshit960",
            "Fk-Affiliate-Token": "403145a980b743eba1582a1626407ba4",
            "Access-Control-Allow-Origin": "localhost",
          },
        }
      );
      console.log(response);
      let data = fetch(url, {
        headers: {
          "Fk-Affiliate-Id": "harshit960",
          "Fk-Affiliate-Token": "403145a980b743eba1582a1626407ba4",
          "Access-Control-Allow-Origin": "localhost",
        },
      });
      console.log(data);
      let passedData = await data.json();
      setitemList(passedData);
      setloading(false);
    
  });

  return (
    <>
      <ShortNFilterBar />
      <div className=" flex flex-wrap  pt-16">
        {itemList.map((item) => (
          <div class="flex justify-center w-1/2 mx-0 border-l border-b p-0 h-72 ">
            {() => setname(item.title)}

            <div class="shadow-sm bg-white max-w-sm">
              <a href={item.link}>
                <img
                  class="max-h-44"
                  src={
                    item.thumbimages
                      ? item.thumbimages
                      : "https://www.dpcanashik.com/uploads/default/blank.png"
                  }
                  alt=""
                />

                <div class="p-2">
                  <h5 class="text-gray-700 text-sm font-medium mb-0 "></h5>
                  <p class="text-gray-500 text-sm mb-0.5 indent-0"></p>
                  <h5 class="text-gray-800 text-sm font-medium mb-0 ">
                    {"₹" + item.current_price}
                  </h5>
                  <h5 class="text-gray-400 text-sm font-medium mb-0 line-through">
                    {"₹" + item.original_price}
                  </h5>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
