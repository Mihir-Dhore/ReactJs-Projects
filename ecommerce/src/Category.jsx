import React from "react";

export default function Category({ categories, setSelectedCategory }) {
  // let setSelectedCategory = () => {
  //   console.log("setSelectedCategory");
  // };
  return (
    <>
      <div className="category">
        <h1 className="text-[24px] mb-2 font-[600]">Product Categodry</h1>
        <ul>
          {categories.map((item, index) => {
            return (
              <li
                key={index}
                className="bg-[#ccc] mb-3 p-2 font-serif text-[18px] cursor-pointer"
                onClick={() => setSelectedCategory(item)}
              >
                {item.name}
                {/* {item.category} */}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
