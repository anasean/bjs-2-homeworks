"use strict"

function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];

    if (currentNum > max) {
      max = currentNum;
    }

    if (currentNum < min) {
      min = currentNum;
    }

    sum += currentNum;
  }

  const avg = +(sum / arr.length).toFixed(2);

  return { min, max, avg };
}








function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr.reduce((sum, num) => sum + num, 0);
}


function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return max - min;
}


function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];

    if (currentNum % 2 === 0) {
      sumEvenElement += currentNum;
    } else {
      sumOddElement += currentNum;
    }
  }

  return sumEvenElement - sumOddElement;
}


function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];

    if (currentNum % 2 === 0) {
      sumEvenElement += currentNum;
      countEvenElement++;
    }
  }

  return countEvenElement !== 0 ? sumEvenElement / countEvenElement : 0;
}







function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const currentArr = arrOfArr[i];
    const result = func(...currentArr);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}


function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];

    if (currentNum % 2 === 0) {
      sumEvenElement += currentNum;
    } else {
      sumOddElement += currentNum;
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];

    if (currentNum % 2 === 0) {
      sumEvenElement += currentNum;
      countEvenElement++;
    }
  }

  return countEvenElement !== 0 ? sumEvenElement / countEvenElement : 0;
}



