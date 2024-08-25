import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledLeftHeader = styled.section`
  display: flex;
  align-items: center;
`;

export const StyledHeaderHeading = styled.span`
  line-height: 26px;
  font-size: 24px;
  color: rgba(38, 38, 38, 1);
  font-weight: 500;
`;

export const StyledRightHeader = styled.section`
  display: flex;
  margin-right: 16px;
  gap: 22px;
`;
