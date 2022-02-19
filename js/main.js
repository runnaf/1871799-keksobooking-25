function rangeNumbers (fromNumber, toNumber) {
  if (fromNumber >= 0 && toNumber > fromNumber) {
    if (toNumber === parseInt(toNumber, 10)) {
      return Math.floor(fromNumber + Math.random() * (toNumber + 1 - fromNumber)); // Конструкцию взяла с https://learn.javascript.ru/task/random-int-min-max;
    }
    return Math.floor(fromNumber + Math.random() * (toNumber - fromNumber));
  }
}
rangeNumbers(1, 2);

function randomNumber (fromNumber, toNumber,  signsAfterComma) {
  if (fromNumber >= 0 && toNumber > fromNumber) {
    let rangeNumber = fromNumber + Math.random() * (toNumber - fromNumber);

    if (toNumber === parseInt(toNumber, 10)) {
      rangeNumber = fromNumber + Math.random() * (toNumber + 1 - fromNumber);
    }

    return rangeNumber.toFixed(signsAfterComma);
  }
}
randomNumber(1, 5, 10);
