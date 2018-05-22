import errors from './utils/errors';
import helper from './utils/helper';
export default field => {
  const validationResult = {
    valid: true,
    error: ''
  };

  if (field.required && helper.isEmpty(field.value)) {
    validationResult.valid = false;
    validationResult.error = errors.required.replace('%1', field.name);
  }

  if (validationResult.valid && field.type) {
    switch (field.type) {
      case 'text': {
        if (helper.isBadText(field.value)) {
          validationResult.valid = false;
          validationResult.error = errors.text.replace('%1', field.name);
        }
        break;
      }
      case 'email': {
        if (!helper.isEmail(field.value)) {
          validationResult.valid = false;
          validationResult.error = errors.email;
        }
        break;
      }
      case 'date': {
        if (!helper.isDate(field.value)) {
          validationResult.valid = false;
          validationResult.error = errors.date;
        }
        break;
      }
    }
  }

  return validationResult
}