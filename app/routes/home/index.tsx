import type { Route } from "./+types/index";

import BannerSwiper from "~/components/Slider/slider";
import Hero from "~/components/Hero/hero";
import CoverMap from "~/components/CoverMap/CoverMap";
import Statistic from "~/components/Statistics/statistics";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "Prince Logistics Services" },
    { name: "description", content: "My dev in truck website" },
  ];
}

const HomePage = () => {
    return ( <>
        <BannerSwiper />
        <Hero />
        <CoverMap />
        <Statistic />

    </> 
    );
}
 
export default HomePage;