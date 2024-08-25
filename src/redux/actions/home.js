import {
  SET_IS_NEW_FEEDBACK_DIALOG_OPEN,
  SET_NEW_FEEDBACK_TITLE_NAME,
} from "../actionTypes";

export const setIsNewFeedbackDialogOpen = (state) => ({
  type: SET_IS_NEW_FEEDBACK_DIALOG_OPEN,
  payload: state,
});

export const setNewFeedbackTitleName = (title) => ({
  type: SET_NEW_FEEDBACK_TITLE_NAME,
  payload: title,
});
