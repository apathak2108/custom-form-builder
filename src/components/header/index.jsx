import React from "react";
import {
  StyledHeader,
  StyledHeaderHeading,
  StyledLeftHeader,
  StyledRightHeader,
} from "./header.styled";
import HeaderLogo from "../../assets/header/headerLogo.svg";
import { Button } from "@mui/material";
import { ROUTES, STRINGS } from "../../constants";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { publishForm, saveForm } from "../../firebaseUtils";

const Header = ({ flag = false }) => {
  const { formId } = useParams();
  const navigate = useNavigate();
  const handleHeaderLogoClick = () => {
    navigate(ROUTES.HOME);
  };
  const formData = useSelector((state) =>
    state?.form?.forms?.filter((f) => f.id === Number(formId))
  );
  const handleFormPublish = async () => {
    if (formData && formData.length > 0) {
      const formToPublish = formData[0];
      await publishForm(formId, formToPublish);
      window.location.href = ROUTES.HOME;
    }
  };
  const handleSaveForm = async () => {
    if (formData && formData.length > 0) {
      const formToSave = formData[0];
      await saveForm(formId, formToSave);
      navigate(ROUTES.HOME);
    }
  };

  return (
    <StyledHeader>
      <StyledLeftHeader onClick={handleHeaderLogoClick}>
        <img src={HeaderLogo} alt={STRINGS.HEADER_LOGO} />
        <StyledHeaderHeading>{STRINGS.USER_FEEDBACK}</StyledHeaderHeading>
      </StyledLeftHeader>
      {flag && (
        <StyledRightHeader>
          <Button
            variant={STRINGS.CONTAINED}
            color={STRINGS.PRIMARY}
            onClick={handleSaveForm}
          >
            {STRINGS.SAVE}
          </Button>
          <Button
            variant={STRINGS.CONTAINED}
            color={STRINGS.SUCCESS}
            onClick={handleFormPublish}
          >
            {STRINGS.PUBLISH}
          </Button>
        </StyledRightHeader>
      )}
    </StyledHeader>
  );
};

export default Header;
