import React, { useState, useEffect } from "react";
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
  DEFAULT_FIELD_CONFIG,
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
import { handleSaveField } from "../../utils";

const SidebarForm = () => {
  const dispatch = useDispatch();
  const { formId } = useParams();
  const [isFieldOpen, setIsFieldOpen] = useState(BOOLEAN.FALSE);
  const [fieldType, setFieldType] = useState(STRINGS.EMPTY_STRING);
  const [fieldSubType, setFieldSubType] = useState(STRINGS.EMPTY_STRING);
  const [fieldConfig, setFieldConfig] = useState(DEFAULT_FIELD_CONFIG);
  const [isLabelEmpty, setIsLabelEmpty] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const forms = useSelector((state) => state?.form?.forms);

  useEffect(() => {
    validateForm();
  }, [fieldConfig]);

  const handleCustomFieldOpen = (type, subType) => {
    resetFieldConfig();
    setFieldType(type);
    setFieldSubType(subType);
    setIsFieldOpen(BOOLEAN.TRUE);
  };

  const resetFieldConfig = () => {
    setFieldConfig(DEFAULT_FIELD_CONFIG);
    setIsLabelEmpty(false);
    setIsFormValid(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const isLabel = name === STRINGS.NAME_LABEL;

    setFieldConfig({
      ...fieldConfig,
      [name]: value,
    });

    if (isLabel) {
      setIsLabelEmpty(value.trim() === STRINGS.EMPTY_STRING);
    }
  };

  const handleOptionChange = (e, index) => {
    const newOptions = [...fieldConfig.options];
    newOptions[index] = e.target.value;
    setFieldConfig({ ...fieldConfig, options: newOptions });
  };

  const handleBackToFields = () => {
    resetFieldConfig();
    setFieldType(null);
    setIsFieldOpen(BOOLEAN.FALSE);
  };

  const validateForm = () => {
    const labelIsEmpty = fieldConfig.label.trim() === STRINGS.EMPTY_STRING;
    setIsLabelEmpty(labelIsEmpty);
    setIsFormValid(!labelIsEmpty);
  };

  const saveField = () => {
    if (isFormValid) {
      handleSaveField(
        dispatch,
        formId,
        fieldType,
        fieldConfig,
        handleBackToFields,
        addFieldToForm,
        fieldSubType
      );
    }
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
                    onClick={() =>
                      handleCustomFieldOpen(field.type, field.subType)
                    }
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
              required
              error={isLabelEmpty}
              helperText={
                isLabelEmpty ? STRINGS.LABEL_REQUIRED : STRINGS.EMPTY_STRING
              }
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
                onClick={saveField}
                disabled={!isFormValid}
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
