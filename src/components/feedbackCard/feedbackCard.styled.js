import styled from "styled-components";

export const StyledFeedbackCardContainer = styled.article`
  height: 279px;
  width: 240px;
  display: flex;
  flex-flow: column;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  &:hover {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.5);
  }
`;

export const StyledFeedbackCardHeader = styled.div`
  height: 54px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px 8px 0 0;
  background-color: rgba(245, 213, 99, 1);
`;

export const StyledFeedbackCardDetails = styled.div`
  padding: 12px;
  display: flex;
  flex-flow: column;
  gap: 8px;
`;

export const StyledFeedbackCardHeading = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const StyledFeedbackCardContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`;

export const StyledFeedbackCardContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
`;

export const StyledContentOne = styled.span`
  color: rgba(0, 0, 0, 0.5);
`;

export const StyledContentTwo = styled.span`
  color: rgba(0, 0, 0, 1);
  font-weight: 500;
`;

export const StyledFeedbackCardButtonsContainer = styled.div`
  padding: 14px 24px 8px 24px;
  display: flex;
  flex-flow: column;
  gap: 12px;
  justify-content: center;
`;

export const StyledEditAndDeleteButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
`;
