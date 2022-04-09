import {isEscapeKey} from './util.js';

const SET_TIME = 3000;


const getErrorMessage = () => {
  const messageError = document.createElement('div');
  messageError.classList.add('error-network');
  messageError.textContent = 'Ошибка сети. Попробуйте еще раз';
  document.body.appendChild(messageError);
  setTimeout(() => {
    messageError.remove();
  }, SET_TIME);
};

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closePopup();
  }
};

function closePopup () {
  const message = document.querySelector('.message');
  message.remove();
  document.removeEventListener('keydown', onPopupEscKeydown);
}

function addEventHandlers () {
  const message = document.querySelector('.message');
  message.addEventListener('click', closePopup);
}

const addEventKeydown = () => {
  document.addEventListener('keydown', onPopupEscKeydown);
};

const addMessage = (msg) => {
  document.body.appendChild(msg);
};

export {addMessage, addEventHandlers, addEventKeydown, getErrorMessage};

