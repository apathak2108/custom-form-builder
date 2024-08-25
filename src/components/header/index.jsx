import React from "react";
import {
  StyledHeader,
  StyledHeaderHeading,
  StyledLeftHeader,
  StyledRightHeader,
} from "./header.styled";
import HeaderLogo from "../../assets/header/headerLogo.svg";
import { Button } from "@mui/material";
import { ROUTES, STRINGS } from "../../constants";
import { useNavigate } from "react-router-dom";

const Header = ({ flag = false }) => {
  const navigate = useNavigate();
  const handleHeaderLogoClick = () => {
    navigate(ROUTES.HOME);
  };
  return (
    <StyledHeader>
      <StyledLeftHeader onClick={handleHeaderLogoClick}>
        <img src={HeaderLogo} alt={STRINGS.HEADER_LOGO} />
        <StyledHeaderHeading>{STRINGS.USER_FEEDBACK}</StyledHeaderHeading>
      </StyledLeftHeader>
      {flag && (
        <StyledRightHeader>
          <Button variant={STRINGS.CONTAINED} color={STRINGS.PRIMARY}>
            {STRINGS.SAVE}
          </Button>
          <Button variant={STRINGS.CONTAINED} color={STRINGS.SUCCESS}>
            {STRINGS.PUBLISH}
          </Button>
        </StyledRightHeader>
      )}
    </StyledHeader>
  );
};

export default Header;
