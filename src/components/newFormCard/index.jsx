import React from "react";
import {
  StyledAddFormIcon,
  StyledNewFormCardContainer,
  StyledNewFormText,
} from "./newFormCard.styled";
import AddFormIcon from "../../assets/newFormCard/addIcon.svg";
import { STRINGS } from "../../constants";

const NewFormCard = () => {
  return (
    <StyledNewFormCardContainer>
      <StyledAddFormIcon src={AddFormIcon} alt={STRINGS.ADD_FORM_ALT} />
      <StyledNewFormText>{STRINGS.NEW_FORM}</StyledNewFormText>
    </StyledNewFormCardContainer>
  );
};

export default NewFormCard;
