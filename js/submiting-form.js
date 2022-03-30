import { clearForm } from './clear-form.js';
import { validatorForm} from './validator-form.js';
import { messages, addMessage, addEventHandlers, addEventKeydown } from './get-message.js';
import { postData } from './post.js';

const form = document.querySelector('.ad-form');

const setUserFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (validatorForm ()) {
      const formData = new FormData(evt.target);

      postData('https://25.javascript.pages.academy/keksobooking/', formData)
        .then ((response) => {
          if (response.ok) {
            addMessage(messages.success);
            clearForm();
            form.querySelector('.ad-form__submit').disabled = false;
            return response.json();
          } else {
            form.querySelector('.ad-form__submit').disabled = false;
          }

          throw new Error (`${response.status} ${response.statusText}`);
        })
        .catch(() => {
          addMessage(messages.failure);
        })
        .finally(() => {
          addEventHandlers();
          addEventKeydown();
        });
    }
  });
  validatorForm();
};


export {setUserFormSubmit};
