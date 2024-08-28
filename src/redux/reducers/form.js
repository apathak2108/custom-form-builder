import {
  ADD_FIELD_TO_FORM,
  CREATE_FORM,
  REMOVE_FIELD,
  SET_FIELD_VALUE,
} from "../actionTypes";

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
            published: false,
            updatedAt: new Date(),
            submittedAt: null,
            viewedCount: 0,
            submissionCount: 1,
          },
        ],
      };
    case ADD_FIELD_TO_FORM:
      return {
        ...state,
        forms: state.forms.map((form) =>
          form.id == action.payload.formId
            ? { ...form, fields: [...form.fields, action.payload.field] }
            : form
        ),
      };
    case SET_FIELD_VALUE: {
      const { formId, fieldIndex, newValue } = action.payload;
      return {
        ...state,
        forms: state.forms.map((form) =>
          form.id == formId
            ? {
                ...form,
                fields: form.fields.map((field, index) =>
                  index === fieldIndex
                    ? {
                        ...field,
                        config: {
                          ...field.config,
                          value: newValue,
                        },
                      }
                    : field
                ),
              }
            : form
        ),
      };
    }
    case REMOVE_FIELD: {
      const { formId, fieldId } = action.payload;
      return {
        ...state,
        forms: state.forms.map((form) =>
          form.id == formId
            ? {
                ...form,
                fields: form.fields.filter((_, index) => index !== fieldId),
              }
            : form
        ),
      };
    }
    default:
      return state;
  }
};

export default formReducer;
