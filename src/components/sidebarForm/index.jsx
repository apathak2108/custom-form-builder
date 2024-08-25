import React from "react";
import {
  StyledAddIcon,
  StyledSidebarAddFieldContainer,
  StyledSidebarContainer,
  StyledSidebarContentContainer,
  StyledSidebarField,
  StyledSidebarFieldContent,
  StyledSidebarHeading,
  StyledToggleField,
  StyledToggleFieldsContainer,
} from "./sidebarForm.styled";
import { SIDEBAR_ADD_FIELDS, STRINGS, TOGGLE_FIELDS } from "../../constants";
import AddFieldIcon from "../../assets/sidebar/addIcon.svg";
import { Switch, TextField } from "@mui/material";

const SidebarForm = () => {
  return (
    <StyledSidebarContainer>
      <StyledSidebarContentContainer>
        <StyledSidebarAddFieldContainer>
          <StyledSidebarHeading>{STRINGS.ADD_FIELDS}</StyledSidebarHeading>
          {SIDEBAR_ADD_FIELDS.map((field) => (
            <StyledSidebarField>
              <StyledSidebarFieldContent>
                <img src={field.icon} alt={field.alt} />
                <span>{field.name}</span>
              </StyledSidebarFieldContent>
              <StyledAddIcon src={AddFieldIcon} alt={STRINGS.ADD_FIELD_ICON} />
            </StyledSidebarField>
          ))}
        </StyledSidebarAddFieldContainer>
        <StyledToggleFieldsContainer>
          {TOGGLE_FIELDS.map((field) => (
            <StyledToggleField>
              <StyledSidebarField>
                <span>Show based on URL conditions</span>
                <Switch />
              </StyledSidebarField>
              <TextField
                id="standard-required"
                variant="standard"
                placeholder="http://"
                type="text"
              />
            </StyledToggleField>
          ))}
        </StyledToggleFieldsContainer>
      </StyledSidebarContentContainer>
    </StyledSidebarContainer>
  );
};

export default SidebarForm;
