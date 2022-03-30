import {isEscapeKey} from './util.js';

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

export {messages, addMessage, addEventHandlers, addEventKeydown};

