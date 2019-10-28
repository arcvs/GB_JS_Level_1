"use strict"

// ЗАДАНИЕ 1 :
// Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, десятки и сотни.
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.


// Вариант 1

function expansionNum(num) {

  var strnum = String(num);

  if (isNaN(strnum) || strnum.length > 3) {
    return {}
  }

  while(strnum.length < 3){
    strnum = "0" + strnum;
  }

  var expansion = {
    'единицы': strnum[2],
    'десятки': strnum[1],
    'сотни': strnum[0]
  };

  return expansion;
}

console.log( expansionNum(79) );




// Вариант 2

function expansionNumMath(num) {

  var number = parseInt(num);

  if (isNaN(number) || number > 999) {
    return {}
  }

  var expansion = {
    'единицы': Math.floor((number / 1) % 10),
    'десятки': Math.floor((number / 10) % 10),
    'сотни':   Math.floor((number / 100) % 10)
  };

  return expansion;
}

console.log( expansionNumMath(54) );
