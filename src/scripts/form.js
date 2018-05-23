import validate from './validator';
import Dialog from './dialog';


export default class {
  constructor(form) {
    this.element = form;
    this.fields = Array.from(this.element.querySelectorAll('[data-role="input-block"]'))
      .map(field => {
        return new InputBlock(field);
      });
    this.dialog = new Dialog('[data-role="modal-dialog"]');

    if (typeof HTMLDialogElement === 'undefined') {
      this.dialog.element.remove();
      this.dialog = false;
    }

    this.element.addEventListener('submit', this.submit.bind(this));
  }

  submit(e) {
    e.preventDefault();
    this.fields.forEach(field => {
      field.validate();
    });
    if (this.isValid()) {
      // just an example. here can be xhr or smth else
      console.log($(this.element).serialize())
      if (this.dialog) {
        this.dialog.openModal();
      } else {
        alert('Congrats. Your form is Valid!')
      }
    }
  }

  isValid() {
    return this.fields.reduce((prev, curr) => prev && curr && curr.valid, true);
  }
}



class InputBlock {
  constructor(inputBlock) {
    this.element    = inputBlock;
    this.type       = this.element.dataset.type;
    this.validation = this.element.dataset.validation;
    this.required   = this.element.dataset.required;
    this.input      = this.type === 'radio'
                      ? Array.from(this.element.querySelectorAll('[data-role="input"]'))
                      : this.element.querySelector('[data-role="input"]');
    this.valid      = true;
    this.label      = this.element.querySelector('[data-role="label"]');
    this.error      = this.element.querySelector('[data-role="error"]');

  }

  validate() {
    let validationResult = {
      valid       : true,
      error       : ''
    };

    if (this.type === 'radio' && this.required) {
      validationResult.valid = !!this.input.filter(el => el.checked).length;
      validationResult.error = validationResult.valid ? '' : 'Please choose the option!';
    } else {
      const field = {
        value     : this.input.value,
        name      : this.label.innerText,
        required  : this.required,
        type      : this.validation
      };
     validationResult = validate(field);
    }
    this.valid = validationResult.valid;
    this.element.classList.toggle('input-block_invalid', !this.valid);
    this.error.innerText = validationResult.error;
  }
}