function getRandonInteger (fromNumber, toNumber) {
  if (fromNumber >= 0 && toNumber > fromNumber) {
    if (toNumber === parseInt(toNumber, 10)) {
      return Math.floor(fromNumber + Math.random() * (toNumber + 1 - fromNumber)); // Конструкцию взяла с https://learn.javascript.ru/task/random-int-min-max;
    }
    return Math.floor(fromNumber + Math.random() * (toNumber - fromNumber));
  }
}
getRandonInteger(1, 2);

function getRandomNumber (fromNumber, toNumber,  signsAfterComma) {
  if (fromNumber >= 0 && toNumber > fromNumber) {
    return (fromNumber + Math.random() * (toNumber - fromNumber)).toFixed(signsAfterComma);
  }
}

getRandomNumber(1, 5, 10);
