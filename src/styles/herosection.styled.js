import styled from "styled-components";

export const HeroSectionWrapper = styled.div`
  margin-top: 100px;
  .heading {
    font-size: 50px;
    line-height: 70px;
    color: #333758;
    font-weight: bold;
    .payments {
      color: #0077ff;
      background-color: #e5f1ff;
      border-bottom: 5px solid #b7d8ff;
    }
  }
  .sub-text {
    width: 40%;
  }
  .quick-info {
    width: 25%;
    margin-top: 2rem;
    font-size: 18px;
    display: flex;
    align-items: self-start;
    img {
      width: 25px;
      vertical-align: middle;
      margin-right: 1rem;
    }
    .boldText {
      color: #333758;
      font-size: 15px;
    }
    .normText {
      color: #999999;
      font-size: 15px;
    }
  }
  .last-text {
    text-align: center;
    margin: 2rem 0;
    font-size: 12px;
    color: #9d9d9d;
  }
  .section2 {
    margin: 13rem 0;
  }
  .features {
    width: 40%;
    .first-link {
      color: #6348e9;
      background-color: #d8d1f9;
      padding: 1px;
    }
    h1 {
      color: #333758;
    }
    p {
      color: #656881;
    }
    a {
      color: #3593ff;
    }
  }
  .img2 {
    width: 40%;
  }
  .section3 {
    margin-bottom: 13rem;
    align-items: flex-start !important;
    .bigMan {
      width: 46%;
      height: 450px;
      border-radius: 10px;
    }
    .main-div {
      width: 46%;
    }
    input[type="checkbox"] {
    }
    .first-checkbox {
      width: 60%;
      margin: 0.5rem 0;
      color: #656881;
    }
    .second-checkbox {
      width: 35%;
      color: #656881;
    }
  }
  .more-info {
    margin: 2rem 0 13rem 0;
    padding: 1rem;
    width: 29%;
    border-radius: 10px;
    min-height: 225px;
    background-color: #f6fafb;
    img {
      width: 30px;
    }
    h1 {
      font-size: 15px;
    }
    a {
      text-decoration: none;
      color: #1d8afc;
    }
  }
  .trial {
    width: 60%;
  }
  .more {
    width: 20px !important;
    vertical-align: middle;
  }
`;
