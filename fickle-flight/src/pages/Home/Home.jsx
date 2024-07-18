import React from "react";
import { Header } from "../../Components/Header/Header";
import "./Home.css";
import { RecentSearches } from "../../Components/RecentSearches/RecentSearches";
import { PopularDestination } from "../../Components/PopularDestination/PopularDestination";
import { ReccHolidays } from "../../Components/ReccHolidays/ReccHolidays";
import { PopularStays } from "../../Components/PopularStays/PopularStays";
import { Updates } from "../../Components/Updates/Updates";
import { Footer } from "../../Components/Footer/Footer";
export const Home = () => {
  return (
    <div>
      <Header />
      <RecentSearches />
      <PopularDestination />
      <ReccHolidays />
      <PopularStays />
      {/* <Updates /> */}
      <Footer />
    </div>
  );
};
