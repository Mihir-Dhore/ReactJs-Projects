import React from "react";

export default function Home() {
  return (
    <>
      <div className="shadow-lg pr-20">
        <div class="grid grid-cols-3 mt-0">
          <div class="bg-white border-r-2	 border-b-black flex justify-center h-fit pb-4 ">
            <ul className="pt-6">
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
        <div className="">
          <SaleProduct />
        </div>
      </div>
    </>
  );
}
function SaleProduct(params) {
  return (
    <div className="flex items-center  space-x-4">
      <h1 className="font-semibold text-3xl">Flash Sales</h1>
      <div className="flex flex-col items-center">
        <p className="text-lg">Days</p>
        <h1 className="text-xl">04</h1>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-lg">Hours</p>
        <h1 className="text-xl">43</h1>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-lg">Minutes</p>
        <h1 className="text-xl">23</h1>
      </div>

      <div>
        
      </div>
    </div>
  );
}
