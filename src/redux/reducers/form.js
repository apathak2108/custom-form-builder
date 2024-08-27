import { ADD_FIELD_TO_FORM, CREATE_FORM } from "../actionTypes";

const intialState = {
  forms: [],
};

const formReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_FORM:
      return {
        ...state,
        forms: [
          ...state.forms,
          {
            id: action.payload.id,
            title: action.payload.title,
            fields: [],
          },
        ],
      };
    case ADD_FIELD_TO_FORM:
      console.log(action.payload, "payload");
      return {
        ...state,
        forms: state.forms.map((form) =>
          form.id == action.payload.formId
            ? { ...form, fields: [...form.fields, action.payload.field] }
            : form
        ),
      };
    default:
      return state;
  }
};

export default formReducer;
