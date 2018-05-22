export default {
  fieldRequired: {
    name: 'Field Name',
    required: true,
    value: ''
  },

  fieldRequiredEmptyString: {
    name: 'Field Name',
    required: true,
    value: '           '
  },

  fieldRequiredZeroString: {
    name: 'Field Name',
    required: true,
    value: '0'
  },

  fieldRequiredZeroNumber: {
    name: 'Field Name',
    required: true,
    value: 0
  },

  fieldRequiredNull: {
    name: 'Field Name',
    required: true,
    value: null
  },

  fieldRequiredUndefined: {
    name: 'Field Name',
    required: true,
    value: undefined
  },

  fieldTextInvalid: {
    name: 'Field Name',
    required: true,
    type: 'text',
    value: `I can't believe. It"s amazing!`
  },

  fieldTextValid: {
    name: 'Field Name',
    required: true,
    type: 'text',
    value: 'This is valid text field !3245*&(^$&^%$'
  },

  fieldEmailInvalid: {
    name: 'Email',
    required: true,
    type: 'email',
    value: 'myemail'
  },

  fieldEmailInvalid_1: {
    name: 'Email',
    required: true,
    type: 'email',
    value: 'myemail@mail'
  },

  fieldEmailInvalid_2: {
    name: 'Email',
    required: true,
    type: 'email',
    value: 'myemail.ru'
  },

  fieldEmailInvalid_3: {
    name: 'Email',
    required: true,
    type: 'email',
    value: 'myemail@mail.ru.'
  },

  fieldEmailValid: {
    name: 'Email',
    required: true,
    type: 'email',
    value: 'myemail@mail.ru'
  },

  fieldDateInvalid: {
    name: 'Date',
    required: true,
    type: 'date',
    value: 'It is not a date!'
  },

  fieldDateInvalid_1: {
    name: 'Date',
    required: true,
    type: 'date',
    value: '0123'
  },

  fieldDateInvalid_2: {
    name: 'Date',
    required: true,
    type: 'date',
    value: '2018-23-02'
  },

  fieldDateInvalid_3: {
    name: 'Date',
    required: true,
    type: 'date',
    value: '2018-02-31'
  },

  fieldDateInvalid_4: {
    name: 'Date',
    required: true,
    type: 'date',
    value: '03--31'
  },

  fieldDateValid: {
    name: 'Date',
    required: true,
    type: 'date',
    value: '2018-05-25'
  }

}
