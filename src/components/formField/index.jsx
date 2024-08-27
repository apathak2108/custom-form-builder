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
  type,
  subType,
  config,
  onEdit,
  onDelete,
  onChange,
  onRatingChange,
}) => {
  const renderField = () => {
    switch (type) {
      case STRINGS.TEXT:
        return (
          <TextField
            name={STRINGS.NAME_TEXT_FIELD}
            multiline={subType === STRINGS.MULTILINE_TEXT}
            rows={subType === STRINGS.MULTILINE_TEXT ? 3 : 1}
            value={config.value}
            error={!!config.error}
            helperText={config.error}
            onChange={onChange}
            required={config.required}
          />
        );
      case STRINGS.RATING:
        if (subType === STRINGS.STAR_RATING) {
          return (
            <Rating
              name={STRINGS.NAME_STAR_RATING}
              value={config.value}
              size={STRINGS.LARGE}
              onChange={onChange}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize={STRINGS.LARGE} />
              }
            />
          );
        } else if (subType === STRINGS.SMILEY_RATING) {
          return <SmileyRating value={config.rating} onChange={onChange} />;
        } else if (subType === STRINGS.NUMERIC_RATING) {
          return (
            <NumericRating
              value={config.rating}
              onRatingChange={onRatingChange}
            />
          );
        }
        break;
      case STRINGS.CHOICE:
        if (subType === STRINGS.RADIO_CHOICE) {
          return (
            <RadioGroup
              name={STRINGS.NAME_RADIO_GROUP}
              value={config.value}
              onChange={onChange}
            >
              {config?.options?.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          );
        } else if (subType === STRINGS.MULTI_CHOICE) {
          return (
            <RectangularRadioGroup
              options={config.options}
              selectedValue={config.value}
              onRatingChange={onRatingChange}
            />
          );
        }
        break;
      default:
        return null;
    }
  };

  return (
    <StyledFormFieldContainer>
      <StyledFormField>
        <StyledFormFieldLabel>{config?.label}</StyledFormFieldLabel>
        {renderField()}
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
