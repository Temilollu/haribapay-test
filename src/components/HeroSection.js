import React from "react";
import { HeroSectionWrapper } from "../styles/herosection.styled";
import { Button } from "./Button";
import "../index.css";
import { FlexBox } from "./FlexBox";
import blueIcon from "../assets/443-4439064_blue-check-mark-icon-png-check-mark-circle.png";
import img2 from "../assets/Coding_ChallengeFrontEnd2.png";
import { Link } from "react-router-dom";
const info = [
  {
    boldText: "Quick setup. ",
    normText: "Begin accepting payments in 15 minutes.",
  },
  {
    boldText: `Honest pricing. `,
    normText: `Only pay for successful transactions.`,
  },
  {
    boldText: `All leading payment methods.`,
    normText: `The best localised experience.`,
  },
];
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
      <Button style={{ margin: "1rem 0 4rem" }}>Create an account</Button>
      <hr />
      <FlexBox>
        {info.map((item) => (
          <div className="quick-info">
            <img src={blueIcon} alt="checkmark-icon" />
            <span className="boldText">{item.boldText}</span>{" "}
            <span className="normText">{item.normText}</span>
          </div>
        ))}
      </FlexBox>
      <div className="last-text">
        Fees range between 0.10-2.4NGN (+ additional fees based on % of
        transaction value). More pricing details per payment method here.
      </div>
      <FlexBox className="section2">
        <div className="features">
          <Link className='first-link'>Features</Link>
          <h1>Create Payment Requests</h1>
          <p>
            Make a simple payment link in 5 seconds. Use our powerful features
            to customize your request
          </p>
          <Link>Learn More</Link>
        </div>
        <img src={img2} alt="" className="img2" />
      </FlexBox>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
