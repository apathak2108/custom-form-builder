import React, { useState } from "react";
import {
  StyledIcon,
  StyledBackHeading,
  StyledCustomFieldContainer,
  StyledSidebarAddFieldContainer,
  StyledSidebarContainer,
  StyledSidebarContentContainer,
  StyledSidebarField,
  StyledSidebarFieldContent,
  StyledSidebarHeading,
  StyledToggleField,
  StyledToggleFieldsContainer,
  StyledCustomFieldButtonsContainer,
  StyledSidebarCustomFieldContent,
} from "./sidebarForm.styled";
import {
  BOOLEAN,
  DEFAULT_OPTIONS,
  SIDEBAR_ADD_FIELDS,
  STRINGS,
  TOGGLE_FIELDS,
} from "../../constants";
import AddFieldIcon from "../../assets/sidebar/addIcon.svg";
import {
  Button,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import BackIcon from "../../assets/sidebar/backIcon.svg";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFieldToForm } from "../../redux/actions/form";

const SidebarForm = () => {
  const dispatch = useDispatch();
  const { formId } = useParams();
  const [isFieldOpen, setIsFieldOpen] = useState(false);
  const [fieldType, setFieldType] = useState(null);
  const [fieldConfig, setFieldConfig] = useState({
    label: STRINGS.EMPTY_STRING,
    required: BOOLEAN.FALSE,
    error: STRINGS.EMPTY_STRING,
    options: DEFAULT_OPTIONS,
  });

  const forms = useSelector((state) => state?.form?.forms);
  console.log(forms, "forms");

  const handleCustomFieldOpen = (type) => {
    resetFieldConfig();
    setFieldType(type);
    setIsFieldOpen(true);
  };

  const resetFieldConfig = () => {
    setFieldConfig({
      label: STRINGS.EMPTY_STRING,
      required: BOOLEAN.FALSE,
      error: STRINGS.EMPTY_STRING,
      options: DEFAULT_OPTIONS,
    });
  };

  const handleInputChange = (e) => {
    setFieldConfig({
      ...fieldConfig,
      [e.target.name]: e.target.value,
    });
  };

  const handleOptionChange = (e, index) => {
    const newOptions = [...fieldConfig.options];
    newOptions[index] = e.target.value;
    setFieldConfig({ ...fieldConfig, options: newOptions });
  };

  const handleBackToFields = () => {
    resetFieldConfig();
    setFieldType(null);
    setIsFieldOpen(false);
  };

  const handleSaveField = () => {
    let updatedFieldConfig = {
      label: fieldConfig.label,
      required: fieldConfig.required,
    };
    if (fieldType === STRINGS.TEXT) {
      updatedFieldConfig = {
        ...updatedFieldConfig,
        error: fieldConfig.error,
      };
    }
    if (fieldType === STRINGS.CHOICE) {
      updatedFieldConfig = {
        ...updatedFieldConfig,
        options: fieldConfig.options,
      };
    }
    dispatch(
      addFieldToForm(formId, {
        type: fieldType,
        config: updatedFieldConfig,
      })
    );
    handleBackToFields();
  };

  return (
    <StyledSidebarContainer>
      <StyledSidebarContentContainer>
        {!isFieldOpen ? (
          <>
            <StyledSidebarAddFieldContainer>
              <StyledSidebarHeading>{STRINGS.ADD_FIELDS}</StyledSidebarHeading>
              {SIDEBAR_ADD_FIELDS.map((field) => (
                <StyledSidebarField key={field.type}>
                  <StyledSidebarFieldContent>
                    <img src={field.icon} alt={field.alt} />
                    <span>{field.name}</span>
                  </StyledSidebarFieldContent>
                  <StyledIcon
                    src={AddFieldIcon}
                    alt={STRINGS.ADD_FIELD_ICON}
                    onClick={() => handleCustomFieldOpen(field.type)}
                  />
                </StyledSidebarField>
              ))}
            </StyledSidebarAddFieldContainer>
            <StyledToggleFieldsContainer>
              <StyledSidebarHeading>{STRINGS.ADD_LOGIC}</StyledSidebarHeading>
              {TOGGLE_FIELDS.map((field) => (
                <StyledToggleField key={field.id}>
                  <StyledSidebarField>
                    <span>{field.name}</span>
                    <Switch />
                  </StyledSidebarField>
                  <TextField
                    id={field.id}
                    variant={field.variant}
                    placeholder={field.placeholder}
                    type={field.type}
                  />
                </StyledToggleField>
              ))}
            </StyledToggleFieldsContainer>
          </>
        ) : (
          <StyledCustomFieldContainer>
            <StyledSidebarCustomFieldContent>
              <StyledIcon
                src={BackIcon}
                alt={STRINGS.BACK_ICON}
                onClick={handleBackToFields}
              />
              <StyledBackHeading>
                {STRINGS.BACK_TO_FIELDS_TEXT}
              </StyledBackHeading>
            </StyledSidebarCustomFieldContent>
            <TextField
              name={STRINGS.NAME_LABEL}
              label={STRINGS.LABEL}
              variant={STRINGS.STANDARD}
              size={STRINGS.MEDIUM}
              value={fieldConfig.label}
              onChange={handleInputChange}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={fieldConfig.required}
                  onChange={() =>
                    setFieldConfig({
                      ...fieldConfig,
                      required: !fieldConfig.required,
                    })
                  }
                />
              }
              label={STRINGS.REQUIRED}
            />
            {fieldType === STRINGS.TEXT && (
              <TextField
                name={STRINGS.ERROR}
                label={STRINGS.ERROR_MESSAGE}
                value={fieldConfig.error}
                onChange={handleInputChange}
                variant={STRINGS.STANDARD}
              />
            )}
            {fieldType === STRINGS.CHOICE && (
              <>
                <Typography>{STRINGS.OPTIONS}</Typography>
                {fieldConfig.options.map((option, index) => (
                  <TextField
                    key={index}
                    value={option}
                    variant={STRINGS.STANDARD}
                    onChange={(e) => handleOptionChange(e, index)}
                  />
                ))}
              </>
            )}
            <StyledCustomFieldButtonsContainer>
              <Button
                variant={STRINGS.CONTAINED}
                color={STRINGS.PRIMARY}
                size={STRINGS.LARGE}
                onClick={handleSaveField}
              >
                {STRINGS.SAVE}
              </Button>
              <Button
                variant={STRINGS.CONTAINED}
                color={STRINGS.INHERIT}
                size={STRINGS.LARGE}
                onClick={handleBackToFields}
              >
                {STRINGS.CANCEL}
              </Button>
            </StyledCustomFieldButtonsContainer>
          </StyledCustomFieldContainer>
        )}
      </StyledSidebarContentContainer>
    </StyledSidebarContainer>
  );
};

export default SidebarForm;
