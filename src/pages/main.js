import React from "react";
import { First } from "react-bootstrap/esm/PageItem";
import FirstSection from "../components/first-section/first-section";
import Hero from "../components/hero/hero";
import LogoSlider from "../components/logoslider/logoslider";
import Subscription from "../components/subscription/subscription";
import Footer from "../partials/footer/footer";

const Main = () => {
    return (
        <>
          <Hero/>
          <FirstSection/>
          <Subscription/>
          <LogoSlider/>
          <Footer/>
        </>
    )
}

export default Main;