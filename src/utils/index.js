import { STRINGS } from "../constants";

// sidebarForm.js
export const handleSaveField = (
  dispatch,
  formId,
  fieldType,
  fieldConfig,
  handleBackToFields,
  addFieldToForm,
  fieldSubType
) => {
  let updatedFieldConfig = {
    label: fieldConfig.label,
    required: fieldConfig.required,
    value: fieldConfig.value,
  };

  if (fieldType === STRINGS.TEXT) {
    updatedFieldConfig = {
      ...updatedFieldConfig,
      error: fieldConfig.error,
    };
  } else if (fieldType === STRINGS.CHOICE) {
    updatedFieldConfig = {
      ...updatedFieldConfig,
      options: fieldConfig.options,
    };
  }

  dispatch(
    addFieldToForm(formId, {
      type: fieldType,
      subType: fieldSubType,
      config: updatedFieldConfig,
    })
  );

  handleBackToFields();
};
