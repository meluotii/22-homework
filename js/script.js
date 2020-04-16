'use strict'

// Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».

// const userName = prompt('Enter your name');
// alert('Hello, ' + userName);

// Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

// const userBirthYear = +prompt('Enter year of your birthday');
// const currentYear = 2020;
// const userAge = currentYear - userBirthYear;
// alert(userAge);

// Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

// const sideLength = +prompt('Enter side lenth of the square');
// const result = sideLength * 4;
// alert(result);

// Запросите у пользователя радиус окружности и выведите площадь такой окружности.

// const circleRadius = +prompt('Enter circle radius');
// const piNumber = 3.1415;
// const result = piNumber * (circleRadius * circleRadius);
// alert(result);

// Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

// const distance = +prompt('Enter distance between two cities (in km)');
// const hours = +prompt('Enter the time (in hours) for which you want to get to the city');
// const result = distance / hours + ' km/h';
// alert(result);


// Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

// const currencyRate = 0.92;
// const amount = +prompt('Enter the amount (in dollar)');
// console.log(amount * currencyRate + ' EUR');


// Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.

// const memory = +prompt('Enter the volume of the flash drive (in GB)') * 1024;
// const fileSize = 820;
// console.log(Math.floor(memory / fileSize));

// Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.

// const amount = +prompt('Enter the amount');
// const cost = +prompt('Enter the cost of a bar of chocolate');
// const quantity = amount / cost;
// const amountLeft = amount % cost;
// console.log(`You can buy ${Math.floor(quantity)} bars of chocolate and your change is ${amountLeft}`);

// Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

// const number = +prompt('Enter three-digit number');
// const firstDigit = (number - (number % 100)) / 100;
// const secondDigit = ((number % 100) - ((number % 100) % 10)) / 10;
// const thirdDigit = number % 10;
// console.log(+`${thirdDigit}${secondDigit}${firstDigit}`);


// Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

// const depositAmount = +prompt('Enter the deposit amount');
// const depositTerm = +prompt('Enter the deposit term (in months)') * 30;
// const depositPercent = 0.05;
// const result = (depositAmount * depositPercent * depositTerm) / 365;
// console.log(result);