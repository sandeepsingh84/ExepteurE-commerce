import React, { useEffect, useState } from "react";

import axios from "axios";
export const DummyAPI = () => {
  const [data, setdata] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://dummyjson.com/products")
  //     .then((resolve) => {
  //       console.log("resolve", resolve);
  //       setdata(resolve?.data?.products);
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://dummyjson.com/carts")
  //     .then((resolve) => {
  //       console.log("resolve", resolve);
  //       setdata(resolve?.data?.carts);
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((resolve) => {
        console.log("resolve", resolve);
        setdata(resolve?.data?.users);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div>
      {/* <div className="grid grid-cols-4 ">
        {data?.map((items) => (
          <div className="border border-red-800 p-2 ">
            <div className="text-center">{items.id}</div>
            <div className="text-center font-bold text-xl">{items.title}</div>
            <div>{items.description}</div>
            <img src={items?.images[0]} className="h-32 w-32 ml-28 ring-2 ring-gray-500 rounded mt-6"/> 
          </div>
        ))}
      </div> */}

      {/* 
  <div className="grid grid-cols-4 ">
        {data?.map((items) => (
          <div className="border border-red-800 p-2 ">
            <div className="text-center">{items.id}</div>
            <div className="text-center font-bold text-xl">{items.discountTotal}</div>
            <div>{items.total}</div>
         </div>
        ))}
      </div>  */}

      <div className="grid grid-cols-4 ">
        {data?.map((items) => (
          <div className="border border-red-800 p-2 ">
            <div className="text-center">{items.id}</div>
            <img src={items.image} />
            <div>{items.firstName}</div>

            <div>{items.lastName}</div>
            <div>{items.bloodGroup}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
