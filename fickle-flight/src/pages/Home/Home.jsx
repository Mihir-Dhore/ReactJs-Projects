import React from "react";
import { Header } from "../../Components/Header/Header";
import "./Home.css";
import { RecentSearches } from "../../Components/RecentSearches/RecentSearches";
export const Home = () => {
  return (
    <div>
      <Header />
      <RecentSearches />
    </div>
  );
};
