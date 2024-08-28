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
import { FIREBASE_MESSAGES, ROUTES, STRINGS } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import FormField from "../formField";
import { useNavigate, useParams } from "react-router-dom";
import { removeField, setFieldValue } from "../../redux/actions/form";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { addFormSubmission } from "../../firebaseUtils";

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
  const handleFormSubmit = async () => {
    if (filteredForm) {
      try {
        await addFormSubmission(formId, filteredForm);
        toast.success(FIREBASE_MESSAGES.FORM_SUBMIT_SUCCESS);
      } catch (error) {
        toast.error(FIREBASE_MESSAGES.FORM_SUBMIT_ERROR + error.message);
      }
    }
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
        {fieldsLength && (
          <Button
            variant={STRINGS.CONTAINED}
            color={STRINGS.PRIMARY}
            sx={{ mt: "14px" }}
            onClick={handleFormSubmit}
          >
            {STRINGS.SUBMIT}
          </Button>
        )}
      </StyledFeedbackFormContentContainer>
    </StyledFeedbackFormContainer>
  );
};

export default FeedbackForm;
