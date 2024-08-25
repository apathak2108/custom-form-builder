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
import { SIDEBAR_ADD_FIELDS, STRINGS, TOGGLE_FIELDS } from "../../constants";
import AddFieldIcon from "../../assets/sidebar/addIcon.svg";
import { Button, FormControlLabel, Switch, TextField } from "@mui/material";
import BackIcon from "../../assets/sidebar/backIcon.svg";

const SidebarForm = () => {
  const [isFieldOpen, setIsFieldOpen] = useState(false);

  const handleCustomFieldOpen = () => {
    setIsFieldOpen(true);
  };
  const handleBackToFields = () => {
    setIsFieldOpen(false);
  };
  return (
    <StyledSidebarContainer>
      <StyledSidebarContentContainer>
        {!isFieldOpen && (
          <>
            <StyledSidebarAddFieldContainer>
              <StyledSidebarHeading>{STRINGS.ADD_FIELDS}</StyledSidebarHeading>
              {SIDEBAR_ADD_FIELDS.map((field) => (
                <StyledSidebarField>
                  <StyledSidebarFieldContent>
                    <img src={field.icon} alt={field.alt} />
                    <span>{field.name}</span>
                  </StyledSidebarFieldContent>
                  <StyledIcon
                    src={AddFieldIcon}
                    alt={STRINGS.ADD_FIELD_ICON}
                    onClick={handleCustomFieldOpen}
                  />
                </StyledSidebarField>
              ))}
            </StyledSidebarAddFieldContainer>
            <StyledToggleFieldsContainer>
              <StyledSidebarHeading>{STRINGS.ADD_LOGIC}</StyledSidebarHeading>
              {TOGGLE_FIELDS.map((field) => (
                <StyledToggleField>
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
        )}
        {isFieldOpen && (
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
              label={STRINGS.LABEL}
              variant={STRINGS.STANDARD}
              size={STRINGS.MEDIUM}
            />
            <FormControlLabel control={<Switch />} label={STRINGS.REQUIRED} />
            <TextField
              label={STRINGS.ERROR_MESSAGE}
              defaultValue={STRINGS.VALUE}
              helperText={STRINGS.HELPER_TEXT}
              variant={STRINGS.STANDARD}
            />
            <StyledCustomFieldButtonsContainer>
              <Button
                variant={STRINGS.CONTAINED}
                color={STRINGS.PRIMARY}
                size={STRINGS.LARGE}
              >
                {STRINGS.SAVE}
              </Button>
              <Button
                variant={STRINGS.CONTAINED}
                color={STRINGS.INHERIT}
                size={STRINGS.LARGE}
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
