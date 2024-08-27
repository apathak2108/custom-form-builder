import styled from "styled-components";

export const StyledFeedbackFormContainer = styled.div`
  height: calc(100% - 32px);
  width: 450px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  overflow-y: scroll;
  padding-bottom: 14px;
`;

export const StyledFeedbackFormHeader = styled.section`
  height: 64px;
  display: flex;
  align-items: center;
  border-radius: 8px 8px 0 0;
  font-size: 22px;
  background-color: rgba(85, 120, 244, 1);
`;

export const StyledFeedbackFormHeading = styled.span`
  display: flex;
  gap: 8px;
  margin-left: 16px;
  align-items: center;
  color: rgba(255, 255, 255, 1);
`;

export const StyledFeedbackFormContentContainer = styled.section`
  min-height: 380px;
  border-radius: 0 0 8px 8px;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const StyledEmptyFormText = styled.span`
  font-size: 30px;
  font-weight: 500;
  color: rgba(92, 88, 88, 1);
  margin: auto;
`;

export const StyledIcon = styled.img`
  cursor: pointer;
`;
