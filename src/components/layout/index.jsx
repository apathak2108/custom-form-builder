import React from "react";
import { StyledLayout, StyledLayoutChildrenContainer } from "./layout.styled";
import Header from "../header";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <StyledLayoutChildrenContainer>{children}</StyledLayoutChildrenContainer>
    </StyledLayout>
  );
};

export default Layout;
