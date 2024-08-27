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
import { useDispatch, useSelector } from "react-redux";
import FormField from "../formField";
import { useNavigate, useParams } from "react-router-dom";
import { removeField, setFieldValue } from "../../redux/actions/form";

const FeedbackForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { formId } = useParams();
  const form = useSelector((state) => state?.form?.forms);
  const filteredForm = form?.filter((form) => form.id === Number(formId))?.[0];
  const fieldsLength = filteredForm?.fields?.length;
  const handleBackButton = () => {
    navigate(ROUTES.HOME);
  };

  const handleFieldChange = (index, newValue) => {
    dispatch(setFieldValue(formId, index, newValue));
  };
  const handleRatingChange = (index, newValue) => {
    dispatch(setFieldValue(formId, index, newValue));
  };
  const handleDeleteField = (fieldIndex) => {
    dispatch(removeField(formId, fieldIndex));
  };
  console.log(filteredForm, "filteredForm");
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
        {!fieldsLength && (
          <StyledEmptyFormText>{STRINGS.ADD_FIELDS}</StyledEmptyFormText>
        )}
        {fieldsLength !== 0 &&
          filteredForm?.fields?.map((field, index) => (
            <FormField
              key={index}
              type={field.type}
              subType={field.subType}
              config={field.config}
              onChange={(e) => handleFieldChange(index, e.target.value)}
              onRatingChange={(e) => handleRatingChange(index, e)}
              onDelete={() => handleDeleteField(index)}
            />
          ))}
      </StyledFeedbackFormContentContainer>
    </StyledFeedbackFormContainer>
  );
};

export default FeedbackForm;
