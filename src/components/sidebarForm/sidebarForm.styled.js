import styled from "styled-components";

export const StyledSidebarContainer = styled.aside`
  width: 26%;
  height: 100%;
  position: absolute;
  right: 0;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-flow: column;
`;

export const StyledSidebarContentContainer = styled.div`
  padding: 16px 20px;
  height: 100%;
  display: flex;
  flex-flow: column;
  gap: 32px;
  overflow-y: scroll;
`;

export const StyledSidebarAddFieldContainer = styled.section`
  display: flex;
  flex-flow: column;
  gap: 16px;
`;

export const StyledSidebarHeading = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const StyledSidebarField = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledSidebarFieldContent = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const StyledIcon = styled.img`
  cursor: pointer;
`;

export const StyledToggleFieldsContainer = styled.section`
  display: flex;
  flex-flow: column;
  gap: 18px;
`;

export const StyledToggleField = styled.article`
  display: flex;
  flex-flow: column;
  gap: 12px;
`;

export const StyledCustomFieldContainer = styled.section`
  display: flex;
  flex-flow: column;
  gap: 16px;
  padding: 0 16px;
`;

export const StyledBackHeading = styled.span`
  font-weight: 600;
  margin-left: -6px;
`;

export const StyledCustomFieldButtonsContainer = styled.span`
  display: flex;
  gap: 12px;
`;

export const StyledSidebarCustomFieldContent = styled(
  StyledSidebarFieldContent
)`
  margin-left: -14px;
`;
