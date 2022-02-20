function getRandonInteger (fromNumber, toNumber) {
  if (fromNumber >= 0 && toNumber > fromNumber) { //проверяю диапазон заданных чисел положительные или нет
    if (toNumber === parseInt(toNumber, 10)) { // проверяю целочисленное ли краевое значение диапазона
      return Math.floor(fromNumber + Math.random() * (toNumber + 1 - fromNumber)); // Конструкцию взяла с https://learn.javascript.ru/task/random-int-min-max;
    } //если нет то в рандомное число не могу взять краевое значение включительно
    return Math.floor(fromNumber + Math.random() * (toNumber - fromNumber));
  }
}
getRandonInteger(1, 2);

function getRandomNumber (fromNumber, toNumber,  signsAfterComma) {
  if (fromNumber >= 0 && toNumber > fromNumber) { // проверяю на целочисленное ли значение диапазона;
    if (signsAfterComma === 0) { //если количество знаков после запятой 0, то toFixed не подходит, он округляет значение
      return getRandonInteger(fromNumber, toNumber);
    }
    return (fromNumber + Math.random() * (toNumber - fromNumber)).toFixed(signsAfterComma);
  }
}
getRandomNumber(1, 5, 10);
