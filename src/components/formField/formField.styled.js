import styled from "styled-components";

export const StyledFormFieldContainer = styled.article`
  width: 95%;
  margin-top: 8px;
`;

export const StyledFormField = styled.div`
  display: flex;
  flex-flow: column;
  padding: 16px;
  gap: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
`;

export const StyledFormFieldLabel = styled.span`
  font-size: 14px;
`;

export const StyledFormFieldActionButtons = styled.span`
  display: flex;
  gap: 18px;
  justify-content: end;
`;

export const StyledIcon = styled.img`
  cursor: pointer;
`;
