import {
  ADD_FIELD_TO_FORM,
  CREATE_FORM,
  REMOVE_FIELD,
  SET_FIELD_VALUE,
} from "../actionTypes";

export const createForm = (id, title) => ({
  type: CREATE_FORM,
  payload: { id, title },
});

export const addFieldToForm = (formId, fieldConfig) => ({
  type: ADD_FIELD_TO_FORM,
  payload: {
    formId,
    field: fieldConfig,
  },
});

export const removeField = (formId, fieldId) => ({
  type: REMOVE_FIELD,
  payload: { formId, fieldId },
});


export const setFieldValue = (formId, fieldIndex, newValue) => ({
  type: SET_FIELD_VALUE,
  payload: { formId, fieldIndex, newValue },
});
