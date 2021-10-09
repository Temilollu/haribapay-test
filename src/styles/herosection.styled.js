import styled from "styled-components";

export const HeroSectionWrapper = styled.div`
  margin-top: 100px;
  .heading {
    font-size: 50px;
    line-height: 70px;
    color: #333758;
    .payments {
      color: #0077ff;
      background-color: #e5f1ff;
    }
  }
  .sub-text {
    width: 40%;
    font-size: 12px;
    color: #333758;
    line-height: 18px;
  }
  .quick-info {
    width: 25%;
    margin-top: 2rem;
    font-size: 18px;
    img {
      width: 20px;
      vertical-align: middle;
    }
    .boldText {
      color: #333758;
    }
    .normText {
      color: #999999;
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
    .first-link{
      color: #6348e9;
      background-color: #d8d1f9;
      padding: 1px;
    }
    h1{
      color: #333758;
    }
    p{
      color: #656881;
    }
    a{
      color: #3593ff;
    }
  }
  .img2 {
    width: 40%;
  }
`;
