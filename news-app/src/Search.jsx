import React, { useState } from "react";
import { useGlobalContext } from "./Context";

export const Search = () => {
  // Access query from globalContext
  const { query, searchPost } = useGlobalContext();

  return (
    <div>
      {/* <h1>Tech News App</h1> */}
      <form action="">
        <input
          type="text"
          placeholder="Search Here..."
          value={query}
          onChange={(event) => searchPost(event.target.value)}
        />
      </form>
      {/* <p>{searchValue} fdf</p> */}
    </div>
  );
};
