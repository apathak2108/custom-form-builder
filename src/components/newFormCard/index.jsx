import React from "react";
import {
  StyledAddFormIcon,
  StyledNewFormCardContainer,
  StyledNewFormText,
} from "./newFormCard.styled";
import AddFormIcon from "../../assets/newFormCard/addIcon.svg";
import { STRINGS } from "../../constants";
import { useDispatch } from "react-redux";
import { setIsNewFeedbackDialogOpen } from "../../redux/actions/home";

const NewFormCard = () => {
  const dispatch = useDispatch();
  const handleDialogOpen = () => {
    dispatch(setIsNewFeedbackDialogOpen(true));
  };

  return (
    <StyledNewFormCardContainer onClick={handleDialogOpen}>
      <StyledAddFormIcon src={AddFormIcon} alt={STRINGS.ADD_FORM_ALT} />
      <StyledNewFormText>{STRINGS.NEW_FORM}</StyledNewFormText>
    </StyledNewFormCardContainer>
  );
};

export default NewFormCard;
