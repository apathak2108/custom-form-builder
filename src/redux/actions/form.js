import {
  ADD_FIELD_TO_FORM,
  CREATE_FORM,
  REMOVE_FIELD,
  UPDATE_FIELD,
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
  type: "REMOVE_FIELD",
  payload: { formId, fieldId },
});

export const updateField = (formId, fieldId, updatedData) => ({
  type: "UPDATE_FIELD",
  payload: { formId, fieldId, updatedData },
});
