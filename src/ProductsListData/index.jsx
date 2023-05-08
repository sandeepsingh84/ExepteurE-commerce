import axios from "axios";
import React, { useState, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductsListData = () => {
  const [data, setdata] = useState();
  const navigate=useNavigate();
  

  let { catId } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${catId}`)
      .then((resolve) => {
        console.log("resolve", resolve);
        setdata(resolve?.data.products);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [catId]);

  return (
    <div>
      <div className="grid grid-cols-3 mt-4 p-12 ">
        {data?.map((items) => (
          <div className="border h-max w-max p-2 border-black mt-6 rounded-md hover hover:bg-gray-400 hover:text-white" onClick={()=>{
            navigate(`/SingleproductList/${items.id}`)


          }}>
                      
                        
            {/* <Link to={`/SingleproductList/${items.id}`}></Link>  */}
                       

            <div className="font-bold text-xl">{items.title}</div>
            <div className="grid grid-col-1  gap-5">
              <div className="group relative items-center justify-center overflow-hidden cursor-pointer ">
                <div className=" pt-4 rounded-md">
                  <img
                    src={items.images[0]}
                    className="  flex justify-center rounded-md bg-black  ml-2  h-[250px] w-[250px] object-cover group-hover:rotate-1 group-hover:scale-125 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex justify-between px-2 items-center mt-4">
                <div className="font-bold  rounded-md border h-max w-max p-2 ">
                  {" "}
                  Price:{items.price}
                </div>

                <div className="flex  gap-3 items-center">
                  <button>
                    <svg
                      className=""
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-cart4"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                    </svg>
                  </button>

                  <div className="font-bold border h-max w-max p-1 rounded-md ">
                    Buy Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsListData;
