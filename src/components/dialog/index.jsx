import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsNewFeedbackDialogOpen,
} from "../../redux/actions/home";
import { ROUTES, STRINGS } from "../../constants";
import { createForm } from "../../redux/actions/form";
import { useNavigate } from "react-router-dom";

const DialogComponent = ({ title, content }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpen = useSelector((state) => state?.home?.isNewFeedbackDialogOpen);
  const [titleName, setTitleName] = useState(STRINGS.EMPTY_STRING);
  const [error, setError] = useState(false);

  const handleClose = () => {
    dispatch(setIsNewFeedbackDialogOpen(false));
  };

  const handleTitleChange = (e) => {
    setTitleName(e.target.value);
    if (e.target.value.trim()) {
      setError(false);
    }
  };

  const handleCreateForm = () => {
    if (!titleName.trim()) {
      setError(true);
      return;
    }
    const formId = Date.now();
    dispatch(createForm(formId, titleName));
    handleClose();
    navigate(`${ROUTES.NEW_FEEDBACK}/${formId}`);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent style={{ width: "402px" }}>
        <DialogContentText>{content}</DialogContentText>
        <FormControl fullWidth error={error} variant={STRINGS.STANDARD}>
          <TextField
            required
            autoFocus
            label={STRINGS.FEEDBACK_TITLE}
            variant={STRINGS.STANDARD}
            value={titleName}
            onChange={handleTitleChange}
            helperText={error ? STRINGS.TITLE_REQUIRED : STRINGS.EMPTY_STRING}
          />
          {error && (
            <FormHelperText error={true}>
              {STRINGS.EMPTY_TITLE_ERROR}
            </FormHelperText>
          )}
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button
          type={STRINGS.SUBMIT}
          color={STRINGS.SUCCESS}
          onClick={handleCreateForm}
        >
          {STRINGS.CREATE}
        </Button>
        <Button onClick={handleClose} color={STRINGS.PRIMARY}>
          {STRINGS.CANCEL}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogComponent;
