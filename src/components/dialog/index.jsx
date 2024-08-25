import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsNewFeedbackDialogOpen,
  setNewFeedbackTitleName,
} from "../../redux/actions/home";
import { STRINGS } from "../../constants";

const DialogComponent = ({ title, content }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state?.home?.isNewFeedbackDialogOpen);
  const [titleName, setTitleName] = useState("");

  const handleClose = () => {
    dispatch(setIsNewFeedbackDialogOpen(false));
  };
  const handleTitleChange = (e) => {
    setTitleName(e.target.value);
  };
  const handleTitleSubmit = () => {
    dispatch(setNewFeedbackTitleName(titleName));
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent style={{ width: "402px" }}>
        <DialogContentText>{content}</DialogContentText>
        <TextField
          required
          autoFocus
          label={STRINGS.FEEDBACK_TITLE}
          variant={STRINGS.STANDARD}
          value={titleName}
          fullWidth
          onChange={handleTitleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button
          type={STRINGS.SUBMIT}
          color={STRINGS.SUCCESS}
          onClick={handleTitleSubmit}
        >
          {STRINGS.CREATE}
        </Button>
        <Button onClick={handleClose} color={STRINGS.PRIMARY} disabled>
          {STRINGS.CANCEL}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogComponent;
