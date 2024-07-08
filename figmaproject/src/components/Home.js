import React from "react";

export default function Home() {
  return (
    <>
      <div className="shadow-lg">
        <div class="grid grid-cols-3 mt-0">
          <div class="bg-white shadow-lg border-b-black flex justify-center  ">
            <ul className="">
              <li>Women's Fashion</li>
              <li>Men's Fashion</li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sport & Outdoor</li>
              <li>Baby's & Toy</li>
              <li>Groceries</li>
              <li>Electronics & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </div>
          <div class="col-span-2  ">
            <img
              className="w-full h-2/3 p-9"
              src="https://w0.peakpx.com/wallpaper/778/515/HD-wallpaper-iphone-5-brand-advertising-s.jpg"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
