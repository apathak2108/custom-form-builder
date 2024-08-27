import React from "react";
import { StyledNewFeedbackContainer } from "./newFeedback.styled";
import SidebarForm from "../../components/sidebarForm";
import FeedbackForm from "../../components/feedbackForm";
import { useDispatch, useSelector } from "react-redux";

const NewFeedbackContainer = () => {
  return (
    <StyledNewFeedbackContainer>
      <FeedbackForm />
      <SidebarForm />
    </StyledNewFeedbackContainer>
  );
};

export default NewFeedbackContainer;
