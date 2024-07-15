import React from "react";
import { Header } from "../../Components/Header/Header";
import "./Home.css";
import { RecentSearches } from "../../Components/RecentSearches/RecentSearches";
import { PopularDestination } from "../../Components/PopularDestination/PopularDestination";
export const Home = () => {
  return (
    <div>
      <Header />
      <RecentSearches />
      <PopularDestination />
    </div>
  );
};
