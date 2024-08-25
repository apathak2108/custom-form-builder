import React from "react";
import NewFormCard from "../../components/newFormCard";
import { StyledHomeContainer } from "./home.styled";
import FeedbackCard from "../../components/feedbackCard";
import { useSelector } from "react-redux";
import DialogComponent from "../../components/dialog";
import { STRINGS } from "../../constants";

const HomeContainer = () => {
  const isDialogOpen = useSelector(
    (state) => state?.home?.isNewFeedbackDialogOpen
  );

  return (
    <StyledHomeContainer>
      <NewFormCard />
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
      {isDialogOpen && <DialogComponent title={STRINGS.CREATE_FEEDBACK_FORM} />}
    </StyledHomeContainer>
  );
};

export default HomeContainer;
