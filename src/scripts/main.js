import '@/styles/main.scss'

import Form from './form';

document.addEventListener('DOMContentLoaded', () => {
  Array.from(document.querySelectorAll('[data-role="contact-form"]')).forEach(form => {
    return new Form(form);
  });

});
