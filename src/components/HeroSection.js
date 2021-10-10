import React from "react";
import { HeroSectionWrapper } from "../styles/herosection.styled";
import { Button } from "./Button";
import "../index.css";
import { FlexBox } from "./FlexBox";
import blueIcon from "../assets/443-4439064_blue-check-mark-icon-png-check-mark-circle.png";
import img2 from "../assets/Coding_ChallengeFrontEnd2.png";
import { Link } from "react-router-dom";
import { Heading2, StyledLink, SubText } from "./CustomStyles";
import bigMan from "../assets/Image from Coding_ChallengeFrontEnd2, page 1.png";
import Checkbox from "./Checkbox";
import web from "../assets/web.png";
import scuad from "../assets/Coding_ChallengeFrontEnd2 (1).png";
import orga from "../assets/Coding_ChallengeFrontEnd2 (2).png";
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
const moreInfo = [
  {
    icon: web,
    ptext: "Scuad for Global Brands",
    htext: "We help global brands accept payments from across Africa.",
  },
  {
    icon: scuad,
    ptext: "Scuad for Entrepreneurs",
    htext:
      "From startup to scale up, we can support you at every stage of your businesses growth.",
  },
  {
    icon: orga,
    ptext: "Scuad for Large Organizations",
    htext: `Paystack helps many of the largest
    corporate and government organizations in
    Nigeria get paid quickly and securely.`,
  },
];
const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <div className="heading">
        A faster & easier <br />
        way to receive <br /> <span className="payments">payments</span> online.
      </div>
      <SubText className="sub-text">
        Scuad builds innovative pathways to enable all types of businesses and
        individuals from around the world make and receive payments smarter and
        simpler
      </SubText>
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
          {/* <Link className='first-link'></Link> */}
          <StyledLink color="#6348e9" bgColor="#d8d1f9">
            Features
          </StyledLink>
          <Heading2>Create Payment Requests</Heading2>
          <SubText>
            Make a simple payment link in 5 seconds. Use our powerful features
            to customize your request
          </SubText>
          <Link>Learn More</Link>
        </div>
        <img src={img2} alt="" className="img2" />
      </FlexBox>

      <FlexBox className="section3">
        <img src={bigMan} alt="" />
        <div className="main-div">
          <StyledLink color="#ee8141" bgColor="#fff3e5">
            Solutions
          </StyledLink>
          <Heading2>
            Better payments, <br /> unlimited opportunities
          </Heading2>
          <SubText>
            Get faster, more reliable transactions. Higher conversions.
            Unbeatable insight and flexibility. So you can delight your
            customers and unlock new revenue streams.
          </SubText>
          <FlexBox>
            <div className="first-checkbox">
              <Checkbox /> Debit and credit cards
            </div>
            <div className="second-checkbox">
              <Checkbox /> USSD
            </div>
          </FlexBox>

          <FlexBox>
            <div className="first-checkbox">
              <Checkbox /> Bank Account
            </div>
            <div className="second-checkbox">
              <Checkbox /> Soft POS
            </div>
          </FlexBox>

          <FlexBox style={{ marginBottom: "3rem" }}>
            <div className="first-checkbox">
              <Checkbox /> Bank Transfer
            </div>
            <div className="second-checkbox">
              <Checkbox /> Mobile money
            </div>
          </FlexBox>
          <Link>Create a free account</Link>
        </div>
      </FlexBox>
      <div>
        <StyledLink color="#1d8afc" bgColor="#e5f1ff">
          Support
        </StyledLink>
        <Heading2>Trusted by businesses all over Africa</Heading2>
        <SubText>
          Our platform provides a resource of scalable and reliable technology
          optimized <br />
          to drive growth in new markets and dominate in older ones.
        </SubText>
      </div>
      <FlexBox>
        {moreInfo.map((item) => (
          <div className="more-info" key={item.ptext}>
            <img src={item.icon} alt="icon" />
            <Heading2>{item.ptext}</Heading2>
            <SubText>{item.htext}</SubText>
            <Link>Learn More</Link>
          </div>
        ))}
      </FlexBox>
      <FlexBox style={{ marginBottom: "7rem" }}>
        <div className="trial">
          <StyledLink color="#19b570" bgColor="#e8f7f0">
            Ready for trial ?
          </StyledLink>
          <div className="heading">
            Start accepting <br />
            <span className="payments">payments</span> in minutes.
          </div>
        </div>
        <Button>Create a free account</Button>
      </FlexBox>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
