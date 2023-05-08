import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const SingleproductList = ({
  setCartItems
}) => {
  const [data, setdata] = useState();
  const [productFilter, setProductFilter] = useState([]);
  console.log("productFilter", productFilter);
  const [picture, setPicture] = useState([0]);

  let { productId } = useParams();
  console.log(productId);

  const filtersArr = [
    {
      catId: "fragrances",
      filters: [
        {
          filterName: "Fragrance Type",
          filterValue: ["Rose", "Jasmine"],
        },
      ],
    },

    {
      catId: "smartphones",
      filters: [
        {
          filterName: "Colour",
          filterValue: ["Black", "Gray/Silver", "Gold"],
        },
        {
          filterName: "RAM+ROM",
          filterValue: ["8+28", "8+64", "12+256"],
        },
      ],
    },

    {
      catId: "laptops",
      filters: [
        {
          filterName: "Colour",
          filterValue: ["Black", "Gray/Silver", "Gold"],
        },
        {
          filterName: "RAM+ROM",
          filterValue: ["4+128", "8+256", "16+500"],
        },
      ],
    },

    {
      catId: "skincare",
      filters: [
        {
          filterName: "Quantity",
          filterValue: ["30ml", "100ml", "250ml"],
        },
      ],
    },

    {
      catId: "groceries",
      filters: [
        {
          filterName: "Quantity",
          filterValue: ["500gm", "1kg", "5kg"],
        },
      ],
    },

    {
      catId: "home-decoration",
      filters: [
        {
          filterName: "Colour",
          filterValue: ["Green", "White", "Gray", "Black"],
        },
        {
          filterName: "Size",
          filterValue: ["Small", "Medium", "Large"],
        },
      ],
    },

    {
      catId: "furniture",
      filters: [
        {
          filterName: "Colour",
          filterValue: ["Brown", "Gray", "Black"],
        },
        {
          filterName: "Size",
          filterValue: ["250*500", "400*500", "700*950"],
        },
      ],
    },

    {
      catId: "tops",
      filters: [
        {
          filterName: "Colour",
          filterValue: ["Green", "Pink", "Black"],
        },
        {
          filterName: "Size",
          filterValue: ["M", "XL", "XXL"],
        },
      ],
    },

    {
      catId: "womens-dresses",
      filters: [
        {
          filterName: "Colour",
          filterValue: ["Purple", "Green", "White", "Yellow"],
        },
        {
          filterName: "Size",
          filterValue: ["M", "XL", "XXL"],
        },
      ],
    },

    {
      catId: "womens-shoes",
      filters: [
        {
          filterName: "Colour",
          filterValue: ["Black", "Gray", "White"],
        },
        {
          filterName: "Size",
          filterValue: ["7", "7.5", "8", "8.5", "9"],
        },
      ],
    },

    {
      catId: "mens-shirts",
      filters: [
        {
          filterName: "Colour",
          filterValue: ["Black", "Gray", "White", "Blue", "Purple"],
        },
        {
          filterName: "Size",
          filterValue: ["M", "L", "XL", "XXL"],
        },
      ],
    },

    {
      catId: "mens-shoes",
      filters: [
        {
          filterName: "Colour",
          filterValue: ["Black", "Brown", "White"],
        },
        {
          filterName: "Size",
          filterValue: ["8", "9", "9.5"],
        },
      ],
    },

    {
      catId: "mens-watches",
      filters: [
        {
          filterName: "Colour",
          filterValue: ["Black", "Brown", "Gray", "Gold"],
        },
      ],
    },

    {
      catId: "mens-watches",
      filters: [
        {
          filterName: "Colour",
          filterValue: ["Black", "Brown", "Gray", "Gold"],
        },
      ],
    },

    {
      catId: "womens-watches",
      filters: [
        {
          filterName: "Colour",
          filterValue: ["Black", "Silver", "Gold"],
        },
      ],
    },

    {
      catId: "womens-bags",
      filters: [
        {
          filterName: "Colour",
          filterValue: ["Black", "Brown", "Red", "Blue", "Golden"],
        },
      ],
    },

    {
      catId: "womens-jewellery",
      filters: [
        {
          filterName: "Colour",
          filterValue: ["Black", "Brown", "Red", "Blue", "Golden"],
        },
      ],
    },

    {
      catId: "womens-jewellery",
      filters: [
        {
          filterName: "Colour",
          filterValue: ["Black", "Brown", "Red", "Blue", "Golden"],
        },
      ],
    },

    {
      catId: "sunglasses",
      filters: [
        {
          filterName: "Colour",
          filterValue: ["Black", "Day&Night"],
        },
      ],
    },

    {
      catId: "automotive",
      filters: [
        {
          filterName: "Voltage",
          filterValue: ["5V-10V", "12V-18V"],
        },
      ],
    },

    {
      catId: "motorcycle",
      filters: [
        {
          filterName: "Colour",
          filterValue: ["Black & Gray", "Red", "Green", "Yellow &White"],
        },
      ],
    },

    {
      catId: "ligting",
      filters: [
        {
          filterName: "Colour",
          filterValue: ["Purple", "Red", "Green", "Yellow"],
        },
      ],
    },
  ];

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((resolve) => {
        console.log("resolve", resolve);
        setdata(resolve?.data);
        setPicture(resolve?.data?.images[0]);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [productId]);

  useEffect(() => {
    let findedFilter = filtersArr?.find(
      (item) => item?.catId === data?.category
    );
    setProductFilter(findedFilter);
  }, [data]);

  // useEffect(() => {
  //   axios
  //     .get(`https://dummyjson.com/products`)
  //     .then((resolve) => {
  //       console.log("resolve", resolve);
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
  // }, []);

  return (
    <div className=" flex  justify-center gap-8 h-[700px]">
      <div className="flex flex-col gap-4 mt-8">
        {data?.images?.map((items) => (
          <div className="border shadow" onClick={()=>{ setPicture(items)}}>
            <img src={items} className="h-24 w-24" />
          </div>
        ))}
      </div>

      <div className="">
        <img
          src={picture}
          className="h-[600px] w-[500px] rounded-md  mt-8 shadow-lg"
        />
      </div>

      <div className="h-max w-max mt-12">
        <div className="text-2xl font-bold">{data?.brand}</div>
        <div className="mt-2 text-xl"> {data?.description}</div>

        <div className="font-bold text-xl mt-4">Price: {data?.price}</div>
        <div className="text-sm mt-2">
          Tax included. Shipping calculated at checkout.
        </div>

        {/* <p>Filters</p> */}
        <div>
          <div className="mt-8 ">
            <div className="text-gray-400 border-b-2  mt-2">
              Choose from other Variants
            </div>
            {productFilter?.filters?.map((val) => {
              return (
                <>
                  <h1 className="mb-2  font-bold px-6">{val?.filterName}</h1>

                  <div className="flex gap-2  items-center ">
                    {val?.filterValue?.map((filVal) => (
                      <div className="flex  gap-2 items-center align-center">
                        <input
                          className="h-[20px] w-[20px]  ml-4 "
                          type="radio"
                          name={val?.filterName}
                        />
                        <p className="border px-4 ">{filVal}</p>
                      </div>
                    ))}
                  </div>
                </>
              );
            })}{" "}
          </div>
        </div>
        <div className="text-xl font-bold border border-yellow-400 bg-yellow-400 h-[24] w-[24] p-1 text-center text-white mt-8 rounded-md shadow-lg">
          <button>Buy Now</button>
        </div>

        <div className="text-xl font-bold border border-yellow-400 rounded-md bg-yellow-400 h-[24] w-[24] p-1 text-center text-white mt-6 shadow-lg">
          <button onClick={()=>{ setCartItems((prev)=>[...prev,data])}}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
