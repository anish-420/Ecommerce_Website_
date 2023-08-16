import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Cateogories from "../components/Route/Cateogories/Cateogories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored";
import Footter from "../components/Layout/Footter";

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        <Hero />
        <Cateogories />
        <BestDeals />
        <FeaturedProduct />
        <Events />
        <Sponsored />
        <Footter />
    </div>
  )
}

export default HomePage