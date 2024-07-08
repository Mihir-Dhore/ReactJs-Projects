import logo from "./logo.svg";
import "./App.css";
import Category from "./Category";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  let [selectedCategory, setSelectedCategory] = useState("");

  let getCategory = () => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => res.data)
      .then((finalRes) => {
        setCategories(finalRes);
        console.log("Categories:: ", finalRes);
        setSelectedCategory(finalRes);
      });
  };

  let getProuducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => res.data)
      .then((finalProd) => {
        console.log("Products:: ", finalProd);

        setProducts(finalProd.products);
      });
  };
  useEffect(() => {
    getCategory();
    getProuducts();
  }, []);

  useEffect(() => {
    if (selectedCategory !== "") {
      // alert("ds//");
      axios
        .get(`https://dummyjson.com/products/category/${selectedCategory.name}`)
        .then((res) => res.data)
        .then((finalProd) => {
          console.log("Products:: ", finalProd);

          setProducts(finalProd.products);
        });
      // console.log(selectedCategory.name);
    }
  }, [selectedCategory]);

  let productItems = products.map((prod, index) => {
    return (
      <div className="card" key={index}>
        <ProductItems pData={prod} />
      </div>
    );
  });
  return (
    <>
      <div>
        {/* <Category /> */}
        <h1 className="text-center text-[30px] font-bold  mt-3">Our Product</h1>

        <div className="grid grid-cols-3 gap-4 pt-8 pl-10">
          <div>
            <Category
              categories={categories}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
          <div className="col-span-2 pr-10">
            <div className="grid grid-cols-3 gap-4  ">
              {/* {productItems} */}
              {/* {products.length} */}
              {products.length > 0 ? productItems : "No Product Found"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
function ProductItems({ pData }) {
  return (
    <div className="shadow-lg text-center pb-4">
      <img src={pData.images} className="h-48	w-60 "></img>
      <h3>{pData.title}</h3>
      <b>Rs. {pData.price}</b>
    </div>
  );
}
