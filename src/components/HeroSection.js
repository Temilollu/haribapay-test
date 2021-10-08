import React from "react";
import { HeroSectionWrapper } from "../styles/herosection.styled";
import { Button } from "./Button";
import '../index.css'
const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <div className="heading">
        A faster & easier <br />
        way to receive <br /> <span className="payments">payments</span> online.
      </div>
      <p className="sub-text">
        Scuad builds innovative pathways to enable all types of businesses and
        individuals from around the world make and receive payments smarter and
        simpler
      </p>
      <Button style={{margin : '1rem 0 4rem'}}>Create an account</Button>
      <hr />
    </HeroSectionWrapper>
  );
};

export default HeroSection;
