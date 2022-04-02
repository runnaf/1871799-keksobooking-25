import {isEscapeKey} from './util.js';

const getErrorMessage = () => {
  const messageError = document.createElement('div');
  messageError.classList.add('error-network');
  messageError.textContent = 'Ошибка сети. Попробуйте еще раз';
  document.body.appendChild(messageError);
  setTimeout(() => {
    messageError.remove();
  }, 3000);
};

const addEventHandlers = () => {
  const message = document.querySelector('.message');

  message.addEventListener('click', () => {
    message.remove();
  });
};

const addEventKeydown = () => {
  const message = document.querySelector('.message');
  window.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      message.remove();
    }
  });
};

const successMessage = document.querySelector('#success').content.querySelector('div');
const errorMessage = document.querySelector('#error').content.querySelector('div');

const messages = {
  success: successMessage,
  failure: errorMessage
};

function addMessage (message) {
  document.body.appendChild(message);
}

export {messages, addMessage, addEventHandlers, addEventKeydown, getErrorMessage};

