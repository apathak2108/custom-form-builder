import {
  SET_IS_NEW_FEEDBACK_DIALOG_OPEN,
  SET_NEW_FEEDBACK_TITLE_NAME,
} from "../actionTypes";

const initialState = {
  isNewFeedbackDialogOpen: false,
  newFeedbackTitleName: "",
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_NEW_FEEDBACK_DIALOG_OPEN:
      return {
        ...state,
        isNewFeedbackDialogOpen: action.payload,
      };
    case SET_NEW_FEEDBACK_TITLE_NAME:
      return {
        ...state,
        newFeedbackTitleName: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
