import React from "react";
import {
  StyledEmptyFormText,
  StyledFeedbackFormContainer,
  StyledFeedbackFormContentContainer,
  StyledFeedbackFormHeader,
  StyledFeedbackFormHeading,
  StyledIcon,
} from "./feedbackForm.styled";
import LeftArrowIcon from "../../assets/feedbackForm/leftArrowIcon.svg";
import { ROUTES, STRINGS } from "../../constants";
import { useSelector } from "react-redux";
import FormField from "../formField";
import { useNavigate, useParams } from "react-router-dom";

const FeedbackForm = () => {
  const navigate = useNavigate();
  const { formId } = useParams();
  const form = useSelector((state) => state?.form?.forms);
  const filteredForm = form?.filter((form) => form.id === Number(formId))?.[0];

  const handleBackButton = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <StyledFeedbackFormContainer>
      <StyledFeedbackFormHeader>
        <StyledFeedbackFormHeading>
          <StyledIcon
            src={LeftArrowIcon}
            alt={STRINGS.LEFT_ARROW_ICON}
            onClick={handleBackButton}
          />
          <span>{filteredForm?.title}</span>
        </StyledFeedbackFormHeading>
      </StyledFeedbackFormHeader>
      <StyledFeedbackFormContentContainer>
        {/* <StyledEmptyFormText>{STRINGS.ADD_FIELDS}</StyledEmptyFormText> */}
        <FormField multiLineText />
        <FormField starRating />
        <FormField smileyRating />
        <FormField singleLineText />
        <FormField numericRating />
        <FormField radioInput />
        <FormField multiChoice />
      </StyledFeedbackFormContentContainer>
    </StyledFeedbackFormContainer>
  );
};

export default FeedbackForm;
