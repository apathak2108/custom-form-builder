import styled from "styled-components";

export const StyledNewFormCardContainer = styled.article`
  height: 279px;
  width: 250px;
  border-radius: 8px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.5);
  }
`;

export const StyledAddFormIcon = styled.img``;

export const StyledNewFormText = styled.span`
  position: absolute;
  font-size: 22px;
  font-weight: 500;
  bottom: 50px;
`;
