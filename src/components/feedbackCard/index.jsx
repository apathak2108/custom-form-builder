import React from "react";
import {
  StyledContentOne,
  StyledContentTwo,
  StyledEditAndDeleteButtonsContainer,
  StyledFeedbackCardButtonsContainer,
  StyledFeedbackCardContainer,
  StyledFeedbackCardContent,
  StyledFeedbackCardContentContainer,
  StyledFeedbackCardDetails,
  StyledFeedbackCardHeader,
  StyledFeedbackCardHeading,
} from "./feedbackCard.styled";
import FeedbackCardLogo from "../../assets/feedbackCard/headerLogo.svg";
import { STRINGS } from "../../constants";
import { Button } from "@mui/material";

const FeedbackCard = ({
  submittedCount,
  viewedCount,
  datePublished,
  onDelete,
  onEdit,
}) => {

  return (
    <StyledFeedbackCardContainer>
      <StyledFeedbackCardHeader>
        <img src={FeedbackCardLogo} alt={STRINGS.FEEDBACK_CARD_ALT} />
      </StyledFeedbackCardHeader>
      <StyledFeedbackCardDetails>
        <StyledFeedbackCardHeading>
          {STRINGS.DELIVERY}
        </StyledFeedbackCardHeading>
        <StyledFeedbackCardContentContainer>
          <StyledFeedbackCardContent>
            <StyledContentOne>{STRINGS.SUBMITTED}</StyledContentOne>
            <StyledContentTwo>{submittedCount}</StyledContentTwo>
          </StyledFeedbackCardContent>
          <StyledFeedbackCardContent>
            <StyledContentOne>{STRINGS.VIEWED}</StyledContentOne>
            <StyledContentTwo>{viewedCount}</StyledContentTwo>
          </StyledFeedbackCardContent>
          <StyledFeedbackCardContent>
            <StyledContentOne>{STRINGS.DATE_PUBLISHED}</StyledContentOne>
            <StyledContentTwo>{datePublished}</StyledContentTwo>
          </StyledFeedbackCardContent>
        </StyledFeedbackCardContentContainer>
      </StyledFeedbackCardDetails>
      <StyledFeedbackCardButtonsContainer>
        <Button variant={STRINGS.CONTAINED} color={STRINGS.SECONDARY}>
          {STRINGS.VIEW_SUBMISSION}
        </Button>
        <StyledEditAndDeleteButtonsContainer>
          <Button variant={STRINGS.CONTAINED} color={STRINGS.SUCCESS} onClick={onEdit} fullWidth>
            {STRINGS.EDIT}
          </Button>
          <Button
            variant={STRINGS.CONTAINED}
            color={STRINGS.PRIMARY}
            onClick={onDelete}
            fullWidth
          >
            {STRINGS.DELETE}
          </Button>
        </StyledEditAndDeleteButtonsContainer>
      </StyledFeedbackCardButtonsContainer>
    </StyledFeedbackCardContainer>
  );
};

export default FeedbackCard;
