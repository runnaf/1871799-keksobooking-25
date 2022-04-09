import { clearForm } from './clear-form.js';
import { pristine, validationForm} from './validator-form.js';
import { addMessage, addEventHandlers, addEventKeydown } from './get-message.js';
import { postData, formSubmit } from './post.js';

const form = document.querySelector('.ad-form');
const successMessage = document.querySelector('#success').content.querySelector('div');
const errorMessage = document.querySelector('#error').content.querySelector('div');
const messages = {
  success: successMessage,
  failure: errorMessage
};

const setUserFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (validationForm ()) {
      const formData = new FormData(evt.target);

      postData('https://25.javascript.pages.academy/keksobooking/', formData)
        .then ((response) => {
          if (response.ok) {
            addMessage(messages.success);
            clearForm();
            formSubmit.disabled = false;
            return response.json();
          } else {
            formSubmit.disabled = false;
          }

          throw new Error (`${response.status} ${response.statusText}`);
        })
        .catch(() => {
          addMessage(messages.failure);
        })
        .finally(() => {
          addEventHandlers();
          addEventKeydown();
          pristine.reset();
        });
    }
  });
  validationForm();
};


export {setUserFormSubmit};
