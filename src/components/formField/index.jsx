import React from "react";
import {
  StyledFormField,
  StyledFormFieldActionButtons,
  StyledFormFieldContainer,
  StyledFormFieldLabel,
  StyledIcon,
} from "./formField.styled";
import EditIcon from "../../assets/formField/editIcon.svg";
import DeleteIcon from "../../assets/formField/deleteIcon.svg";
import { STRINGS } from "../../constants";
import { Rating, TextField } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import SmileyRating from "../smileyRating";
import NumericRating from "../numericRating";

const FormField = ({
  multiLineText = false,
  singleLineText = false,
  numericRating = false,
  smileyRating = false,
  starRating = false,
  radioInput = false,
  multiChoice = false,
}) => {
  return (
    <StyledFormFieldContainer>
      <StyledFormField>
        <StyledFormFieldLabel>
          Would you like to add a comment?
        </StyledFormFieldLabel>
        {multiLineText && <TextField multiline rows={3} />}
        {singleLineText && <TextField rows={1} />}
        {starRating && (
          <Rating
            size="large"
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="large" />}
          />
        )}
        {smileyRating && <SmileyRating />}
        {numericRating && <NumericRating />}
        <StyledFormFieldActionButtons>
          <StyledIcon src={EditIcon} alt={STRINGS.EDIT_ICON} />
          <StyledIcon src={DeleteIcon} alt={STRINGS.DELETE_ICON} />
        </StyledFormFieldActionButtons>
      </StyledFormField>
    </StyledFormFieldContainer>
  );
};

export default FormField;
