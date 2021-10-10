import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  color: ${({color}) => `${color}!important`};
  background-color: ${({bgColor}) => bgColor};
  padding: 1px;
`;

export const Heading2 = styled.h1`
 color: #333758;
`
export const SubText = styled.p`
 color: #656881;
 line-height: 25px;
`