import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHeartRegular,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  return (
    <>
      <header className="p-6   border-b-2">
        <div class="grid grid-cols-3 gap-4">
          <div class="bg-white text-3xl text-center font-semibold">
            Exclusive
          </div>
          <div class="col-span-2 ">
            <ul className="flex items-center gap-4 cursor-pointer hyphens-auto">
              <li>Home</li>
              <li>Contact</li>
              <li>About</li>
              <li>Sign Up</li>
              <div className=" relative w-64 ml-28">
                <input
                  type="search"
                  className="w-full rounded-lg bg-slate-200 border pt-2 pb-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="What are you looking for?"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute text-xl right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
              </div>
              <FontAwesomeIcon className="text-2xl" icon={faHeartEmpty} />
              <FontAwesomeIcon className="text-2xl" icon={faShoppingCart} />
            </ul>

            {/* <div class="flex justify-between items-center"> */}
            {/*               
              <h3 className="cursor-pointer">Home</h3>
              <h3>Contact</h3>
              <h3>About</h3>
              <h3>Sign Up</h3> */}
          </div>
        </div>
        {/* </div> */}
      </header>
    </>
  );
}
