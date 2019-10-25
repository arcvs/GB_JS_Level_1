"use strict"

// ЗАДАНИЕ 1 :
// с помощью цикла while вывести все простые числа в промежутке от 0 до 100

var numStart = 0;
var numEnd = 100;

while (numStart++ < numEnd) {

  if ((numStart % 2) && (numStart % 3) && (numStart % 5) && (numStart % 7) && (numStart != 1)) {
    console.log(numStart);
    continue;
  }
  
  if (numStart == 2 || numStart == 3 || numStart == 5 || numStart == 7) {
    console.log(numStart);
  }
}




// ЗАДАНИЕ 2 :
// с этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

// ... В 3 задании


// ЗАДАНИЕ 3 :
// Товары в корзине хранятся в массиве. Задачи:
//    a) Организовать такой массив для хранения товаров в корзине;
//    b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

var basketProducts = [
  ["orange", 10.04],
  ["apple", 2.18],
  ["beet", 7.08],
  ["banana", 19.91],
  ["watermelon", 27.07]
];

function countBasketPrice(basket) {

  var _sum = 0;

  for(var product in basket) {
    _sum += basket[product][1];
  }

  return _sum;
}

console.log( countBasketPrice(basketProducts) );




// ЗАДАНИЕ 4 :
// Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//  for(…){// здесь пусто}

for(var i = 0; i < 10; console.log(i++)) {
 //
}




// ЗАДАНИЕ 5 :
// Нарисовать пирамиду с помощью console.log в 20 рядов, а не 5:


// Вариант №1

for(var i = 0; i < 20; i++) {
  
  var star= "";
  
  for(var z = 0; z <= i; z++) {
    star += "*";
  }
  
  console.log(star);
}


// Вариант №2
// Через метод repeat() - конструирует и возвращает новую строку, содержащую указанное количество
//  соединённых вместе копий строки, на которой он был вызван.

for(var i = 0; i <= 20; i++) {

  console.log( '*'.repeat(i) );
}
