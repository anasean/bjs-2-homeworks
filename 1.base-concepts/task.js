"use strict";

function solveEquation(a, b, c) {
  let discriminant = b ** 2 - 4 * a * c;
  let arr = [];

  if (discriminant < 0) {
  
    return arr;
  } else if (discriminant === 0) {

    let root = -b / (2 * a);
    arr.push(root);
  } else {
   
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
  }

  return arr;
}




function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  if (
    typeof percent !== 'number' ||
    typeof contribution !== 'number' ||
    typeof amount !== 'number' ||
    typeof countMonths !== 'number'
  ) {
    return false;
  }

  
  percent = percent / 100;

  
  let creditBody = amount - contribution;

  
  let monthlyPercent = percent / 12;
  let pow = Math.pow(1 + monthlyPercent, countMonths);
  let monthlyPayment = creditBody * (monthlyPercent + monthlyPercent / (pow - 1));

  
  let totalAmount = monthlyPayment * countMonths;

  
  totalAmount = parseFloat(totalAmount.toFixed(2));

  return totalAmount;
}

