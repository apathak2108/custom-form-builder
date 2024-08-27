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
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Rating,
  TextField,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import SmileyRating from "../smileyRating";
import NumericRating from "../numericRating";
import RectangularRadioGroup from "../rectangularRadio";

const FormField = ({
  multiLineText = false,
  singleLineText = false,
  numericRating = false,
  smileyRating = false,
  starRating = false,
  radioInput = false,
  multiChoice = false,
  onEdit,
  onDelete,
}) => {
  return (
    <StyledFormFieldContainer>
      <StyledFormField>
        <StyledFormFieldLabel>
          Would you like to add a comment?
        </StyledFormFieldLabel>
        {multiLineText && <TextField multiline rows={3} />}
        {singleLineText && <TextField />}
        {starRating && (
          <Rating
            size="large"
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="large" />}
          />
        )}
        {smileyRating && <SmileyRating />}
        {numericRating && <NumericRating />}
        {radioInput && (
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        )}
        {multiChoice && <RectangularRadioGroup />}
        <StyledFormFieldActionButtons>
          <StyledIcon src={EditIcon} alt={STRINGS.EDIT_ICON} onClick={onEdit} />
          <StyledIcon
            src={DeleteIcon}
            alt={STRINGS.DELETE_ICON}
            onClick={onDelete}
          />
        </StyledFormFieldActionButtons>
      </StyledFormField>
    </StyledFormFieldContainer>
  );
};

export default FormField;
