import TEXT_AREA_ICON from "../assets/sidebar/textAreaIcon.svg";
import CATEGORIES_ICON from "../assets/sidebar/categoriesIcon.svg";
import NUMERIC_RATING_ICON from "../assets/sidebar/numericRatingIcon.svg";
import RADIO_BUTTON_ICON from "../assets/sidebar/radioButton.svg";
import SINGLE_LINE_ICON from "../assets/sidebar/singleLineIcon.svg";
import SMILEY_RATING_ICON from "../assets/sidebar/smileyIcon.svg";
import STAR_RATING_ICON from "../assets/sidebar/starRatingIcon.svg";

export const STRINGS = {
  NEW_FORM: "New Form",
  ADD_FORM_CARD_ALT: "add-form-icon",
  FEEDBACK_CARD_ALT: "feedback-card-logo",
  VIEW_SUBMISSION: "VIEW SUBMISSION",
  EDIT: "EDIT",
  DELETE: "DELETE",
  SAVE: "SAVE",
  PUBLISH: "PUBLISH",
  CREATE: "Create",
  CANCEL: "Cancel",
  DELIVERY: "Delivery",
  SUBMITTED: "Submitted",
  VIEWED: "Viewed",
  HEADER_LOGO: "header-logo",
  DATE_PUBLISHED: "Date Published",
  FEEDBACK_TITLE: "Feedback Title",
  STANDARD: "standard",
  PRIMARY: "primary",
  SUCCESS: "success",
  SUBMIT: "submit",
  CONTAINED: "contained",
  SECONDARY: "secondary",
  CREATE_FEEDBACK_FORM: "Create Feedback Form",
  USER_FEEDBACK: "USER FEEDBACK",
  LEFT_ARROW_ICON: "left-arrow-icon",
  EDIT_ICON: "edit-icon",
  ADD_FIELDS: "Add Fields",
  ADD_FIELD_ICON: "add-field-icon",
};

export const ROUTES = {
  HOME: "/",
  NEW_FEEDBACK: "/new",
  OTHER: "*",
};

export const SIDEBAR_ADD_FIELDS = [
  {
    name: "TextArea",
    icon: TEXT_AREA_ICON,
    alt: "text-area-icon",
  },
  {
    name: "Numeric rating",
    icon: NUMERIC_RATING_ICON,
    alt: "numeric-rating-icon",
  },
  {
    name: "Star rating",
    icon: STAR_RATING_ICON,
    alt: "star-rating-icon",
  },
  {
    name: "Smiley rating",
    icon: SMILEY_RATING_ICON,
    alt: "smiley-rating-icon",
  },
  {
    name: "Single line input",
    icon: SINGLE_LINE_ICON,
    alt: "single-line-icon",
  },
  {
    name: "Radio button",
    icon: RADIO_BUTTON_ICON,
    alt: "radio-button-icon",
  },
  {
    name: "Categories",
    icon: CATEGORIES_ICON,
    alt: "categories-icon",
  },
];

export const TOGGLE_FIELDS = [
  {
    name: "Show based on URL conditions",
    type: "text",
    placeholder: "http://",
  },
  {
    name: "Show based on URL conditions",
    type: "text",
    placeholder: "http://",
  },
  {
    name: "Show based on URL conditions",
    type: "text",
    placeholder: "http://",
  },
];
