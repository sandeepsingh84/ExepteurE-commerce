import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import CustomModal from "../../CustomModal";
import { Link } from "react-router-dom";
import Styles from "./index.module.css";

export const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [displayOut, setDisplayOut] = useState(false);
  const [data, setdata] = useState([]);

  console.log("visible", visible);
  const refSearch = useRef(null);

  const handleClickSearchOutside = (event) => {
    if (refSearch.current && !refSearch.current.contains(event.target)) {
      if (event.target.id === "menuItem") {
        setDisplayOut(true);
      } else {
        setDisplayOut(false);
      }
    }
  };

  useEffect(() => {
    if (displayOut)
      document.addEventListener("click", handleClickSearchOutside, true);
    return () => {
      document.removeEventListener("click", handleClickSearchOutside, true);
    };
  }, [displayOut]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((resolve) => {
        console.log("resolve", resolve);
        setdata(resolve?.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  // useGetCurrentUsers(setUser);
  return (
    <div>
      <div className="bg-gray-600 text-white font-bold p-2 border border-white mt-2 px-2">
        <ul className="flex justify-between text-xl ">
          <li className="hover:ease-in-out duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-gray-400 shadow rounded-md  ">
            <Link to="/about">About</Link>
          </li>

          <li
            className=" hover:bg-gray-400 rounded-md shadow relative"
            id="menuItem"
            onClick={() => {
              // setVisible(true);
              setDisplayOut(true);
            }}
          >
            <button> Categories</button>

            {displayOut && (
              <div ref={refSearch}>
                <div
                  className={`${Styles?.searchDropDown} 
              
                `}
                >
                  <ul>
                    <li
                      className={`${Styles?.searchDropDownItem} ${Styles?.disabled}`}
                    >
                      <div></div>
                    </li>
                    {/* {searchText?.length > 0 ? (
                    searchText?.map((item) => (
                      <li
                        key={item?.variants?.productId}
                        className={`${Styles?.searchDropDownItem}`}
                        onClick={() => {
                          // navigate(`/product-detail/${item?.srv_id}`);
                          router.push(
                            `/product/${item?.variants?.productId}`
                          );
                          setDisplayOut(false);
                        }}
                      >
                        <Image
                          src={item?.variants?.media[0]?.url}
                          alt='prdctIng'
                          height={30}
                          width={30}
                        />
                        <div
                          className='text-sm font-bold'
                          style={{ color: 'black', alignSelf: 'center' }}
                        >
                          {item?.name}
                        </div>
                      </li>
                    ))
                  ) : isLoading ? (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <LoadingCircle loadingColor='black' />
                    </div>
                  ) : (
                    <div
                      style={{ textAlign: 'center' }}
                      className={`${Styles?.noProductsFound}`}
                    >
                      No products found
                    </div>
                  )} */}

                    {data?.map((items) => (
                      <div className="w-full">
                        <div className="text-center font-bold text-base hover hover:bg-gray-400 hover:rounded-md hover:shadow-md p-2 w-full">
                          <Link to={`/productList/${items}`}>{items}</Link>
                        </div>
                      </div>
                    ))}
                  </ul> 
                </div>
              </div>
            )}
          </li>
          <li className="hover:bg-gray-400 rounded-md shadow">Deals</li>
          <li className="hover:bg-gray-400 rounded-md shadow">Our Services</li>
        </ul>
      </div>

      <CustomModal visible={visible} maskClick={() => setVisible(false)}>
        <div>
          {data?.map((items) => (
            <div>
              <div className="text-center text-white bg-gray-600  font-bold hover hover:bg-gray-400 ">
                <Link to={`/productList/${items}`}>{items}</Link>
              </div>
            </div>
          ))}
        </div>
      </CustomModal>
    </div>
  );
};
