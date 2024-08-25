import React from "react";
import {
  StyledHeader,
  StyledHeaderHeading,
  StyledLeftHeader,
  StyledRightHeader,
} from "./header.styled";
import HeaderLogo from "../../assets/header/headerLogo.svg";
import { Button } from "@mui/material";
import { STRINGS } from "../../constants";

const Header = ({ flag = false }) => {
  return (
    <StyledHeader>
      <StyledLeftHeader>
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
