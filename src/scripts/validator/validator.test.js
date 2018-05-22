import should from 'should';
import validate from './index';
import errors from './utils/errors';
import model from './utils/model';

describe('Form Validator', () => {
  it('Should provide form validation. Required Field. Empty value', () => {
    const validated = validate(model.fieldRequired);

    should(validated.valid).be.eql(false);
    should(validated.error).be.eql(errors.required.replace('%1', model.fieldRequired.name))
  })
});

describe('Form Validator', () => {
  it('Should provide form validation. Required Field. Empty string with white spaces', () => {
    const validated = validate(model.fieldRequiredEmptyString);

    should(validated.valid).be.eql(false);
    should(validated.error).be.eql(errors.required.replace('%1', model.fieldRequired.name))
  })
});

describe('Form Validator', () => {
  it('Should provide form validation. Required Field. Zero String', () => {
    const validated = validate(model.fieldRequiredZeroString);

    should(validated.valid).be.eql(true);
    should(validated.error).be.eql('')
  })
});

describe('Form Validator', () => {
  it('Should provide form validation. Required Field. Zero Number', () => {
    const validated = validate(model.fieldRequiredZeroNumber);

    should(validated.valid).be.eql(true);
    should(validated.error).be.eql('')
  })
});

describe('Form Validator', () => {
  it('Should provide form validation. Required Field. Null', () => {
    const validated = validate(model.fieldRequiredNull);

    should(validated.valid).be.eql(false);
    should(validated.error).be.eql(errors.required.replace('%1', model.fieldRequired.name))
  })
});

describe('Form Validator', () => {
  it('Should provide form validation. Required Field. Undefined', () => {
    const validated = validate(model.fieldRequiredUndefined);

    should(validated.valid).be.eql(false);
    should(validated.error).be.eql(errors.required.replace('%1', model.fieldRequired.name))
  })
});

describe('Form Validator', () => {
  it('Should provide form validation. Required Text Field. Invalid (contains quotes)', () => {
    const validated = validate(model.fieldTextInvalid);

    should(validated.valid).be.eql(false);
    should(validated.error).be.eql(errors.text.replace('%1', model.fieldRequired.name))
  })
});

describe('Form Validator', () => {
  it('Should provide form validation. Required Text Field. Valid', () => {
    const validated = validate(model.fieldTextValid);

    should(validated.valid).be.eql(true);
    should(validated.error).be.eql('')
  })
});

describe('Form Validator', () => {
  it('Should provide form validation. Email. Invalid', () => {
    const validated = validate(model.fieldEmailInvalid);

    should(validated.valid).be.eql(false);
    should(validated.error).be.eql(errors.email)
  })
});

describe('Form Validator', () => {
  it('Should provide form validation. Email. Invalid', () => {
    const validated = validate(model.fieldEmailInvalid_1);

    should(validated.valid).be.eql(false);
    should(validated.error).be.eql(errors.email)
  })
});

describe('Form Validator', () => {
  it('Should provide form validation. Email. Invalid', () => {
    const validated = validate(model.fieldEmailInvalid_2);

    should(validated.valid).be.eql(false);
    should(validated.error).be.eql(errors.email)
  })
});

describe('Form Validator', () => {
  it('Should provide form validation. Email. Invalid', () => {
    const validated = validate(model.fieldEmailInvalid_3);

    should(validated.valid).be.eql(false);
    should(validated.error).be.eql(errors.email)
  })
});

describe('Form Validator', () => {
  it('Should provide form validation. Email. Valid', () => {
    const validated = validate(model.fieldEmailValid);

    should(validated.valid).be.eql(true);
    should(validated.error).be.eql('')
  })
});

describe('Form Validator', () => {
  it('Should provide form validation. Date. Invalid', () => {
    const validated = validate(model.fieldDateInvalid);

    should(validated.valid).be.eql(false);
    should(validated.error).be.eql(errors.date)
  })
});

describe('Form Validator', () => {
  it('Should provide form validation. Date. Invalid', () => {
    const validated = validate(model.fieldDateInvalid_1);

    should(validated.valid).be.eql(false);
    should(validated.error).be.eql(errors.date)
  })
});

describe('Form Validator', () => {
  it('Should provide form validation. Date. Invalid', () => {
    const validated = validate(model.fieldDateInvalid_2);

    should(validated.valid).be.eql(false);
    should(validated.error).be.eql(errors.date)
  })
});

describe('Form Validator', () => {
  it('Should provide form validation. Date. Invalid', () => {
    const validated = validate(model.fieldDateInvalid_3);

    should(validated.valid).be.eql(false);
    should(validated.error).be.eql(errors.date)
  })
});

describe('Form Validator', () => {
  it('Should provide form validation. Date. Invalid', () => {
    const validated = validate(model.fieldDateInvalid_4);

    should(validated.valid).be.eql(false);
    should(validated.error).be.eql(errors.date)
  })
});

describe('Form Validator', () => {
  it('Should provide form validation. Date. Valid', () => {
    const validated = validate(model.fieldDateValid);

    should(validated.valid).be.eql(true);
    should(validated.error).be.eql('');
  })
});