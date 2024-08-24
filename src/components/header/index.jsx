import React from "react";
import {
  StyledHeader,
  StyledHeaderHeading,
  StyledLeftHeader,
  StyledRightHeader,
} from "./header.styled";
import HeaderLogo from "../../assets/header/headerLogo.svg";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLeftHeader>
        <img src={HeaderLogo} alt="header-logo" />
        <StyledHeaderHeading>USER FEEDBACK</StyledHeaderHeading>
      </StyledLeftHeader>
      <StyledRightHeader></StyledRightHeader>
    </StyledHeader>
  );
};

export default Header;
