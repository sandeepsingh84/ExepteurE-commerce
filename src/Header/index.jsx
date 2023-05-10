import React from "react";
import { Link } from "react-router-dom";


export const Header = () => {
  return (
    <div className="flex justify-between bg-gray-600 text-white font-bold p-2 position:fixed">
      <div className="h-28 w-28 border rounded-md ">
        <img
          src="

          https://i.pinimg.com/originals/5d/95/38/5d95381726fea01966a317b8943b1b87.jpg"
          className=""
        />
      </div>
      <div className="text-5xl mt-8">EXEPTEUR</div>

      <div>
        <div>
          <div>
           
          </div>
          <div className="text-black">
            <label for="search" Search />
            <input
              type="text"
              id="search"
              name="search"
              placeholder="search"
              
              className="mt-8 h-14 w-56 border border-black rounded-md"
            />
          </div>






        </div>
      </div>





      <div className="flex gap-5 items-center ">
        <div>
        
        <a href="/CartItems">
          <button  >     <svg 
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              class="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
           
          </button>
    
          </a>
        </div>

        <div>
          <button className="mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="white"
              class="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </button>
        </div>

        <div className="">
          <button><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg></button>
        </div>
      </div>
    </div>
  );
};
