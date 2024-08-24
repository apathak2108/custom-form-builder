import React from "react";
import NewFormCard from "../../components/newFormCard";
import { StyledHomeContainer } from "./home.styled";
import FeedbackCard from "../../components/feedbackCard";

const HomeContainer = () => {
  return (
    <StyledHomeContainer>
      <NewFormCard />
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
      <FeedbackCard />
    </StyledHomeContainer>
  );
};

export default HomeContainer;
