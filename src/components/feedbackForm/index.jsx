import React from "react";
import {
  StyledEmptyFormText,
  StyledFeedbackFormContainer,
  StyledFeedbackFormContentContainer,
  StyledFeedbackFormHeader,
  StyledFeedbackFormHeading,
} from "./feedbackForm.styled";
import LeftArrowIcon from "../../assets/feedbackForm/leftArrowIcon.svg";
import EditIcon from "../../assets/feedbackForm/editIcon.svg";
import { STRINGS } from "../../constants";
import { useSelector } from "react-redux";
import FormField from "../formField";

const FeedbackForm = () => {
  const titleName = useSelector((state) => state?.home?.newFeedbackTitleName);

  return (
    <StyledFeedbackFormContainer>
      <StyledFeedbackFormHeader>
        <StyledFeedbackFormHeading>
          <img src={LeftArrowIcon} alt={STRINGS.LEFT_ARROW_ICON} />
          <span>Generic Website Rating</span>
          <img src={EditIcon} alt={STRINGS.EDIT_ICON} />
        </StyledFeedbackFormHeading>
      </StyledFeedbackFormHeader>
      <StyledFeedbackFormContentContainer>
        {/* <StyledEmptyFormText>{STRINGS.ADD_FIELDS}</StyledEmptyFormText> */}
        <FormField multiLineText />
        <FormField starRating />
        <FormField smileyRating />
        <FormField singleLineText />
        <FormField numericRating />
      </StyledFeedbackFormContentContainer>
    </StyledFeedbackFormContainer>
  );
};

export default FeedbackForm;
