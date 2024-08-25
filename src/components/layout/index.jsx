import React from "react";
import { StyledLayout, StyledLayoutChildrenContainer } from "./layout.styled";
import Header from "../header";

const Layout = ({ children, headerFlag = false }) => {
  return (
    <StyledLayout>
      <Header flag={headerFlag} />
      <StyledLayoutChildrenContainer>{children}</StyledLayoutChildrenContainer>
    </StyledLayout>
  );
};

export default Layout;
