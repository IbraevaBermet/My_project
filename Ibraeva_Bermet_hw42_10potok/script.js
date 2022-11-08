"use strict";
//использоваие строго режима для обработки данных

//ООП - понятие
//Применение

//Как понять что есть строка

// let str = "текст";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(strObj);

// let array = [1,2,3];

// console.log(array);

// let car = {
//     kuzov:"Железо",
//     kolesa:"4 колеса",
//     modal: function (){
//         alert("Hello")
//     }
// };



// let mb = {
//     marka:"Мерс",
//     god:"2021"
// };

//mb.__proto__ = car;
//Object.setPrototypeOf(mb,car);

//console.log(car);
//console.log(mb.modal);

//mb.modal();


//Задание №1

// let salary = {
//     almaz: 1200,
//     adilet: 1300,
//     nursultan: 3000
// };

// let bonus = {
//     almaz: 400,
//     adilet: 300,
//     nursultan: 200
// };

// salary.__proto__= bonus;

// console.log(salary.almaz);


// 38 urok

// Динамическая типизация

//let number =+"1";
//console.log(number + 5);
//console.log(parseInt(number) + 5);
//console.log(typeof('1'));
 
//let res_input = +prompt("Введите номер страницы","");

//console.log(typeof(res_input));

//console.log(res_input + 10);
//if (typeof(res_))
//console.log(res_input);

//https://miukid.com/cat/

//console.log(`https://miukid.com/cat/${res_input}`);



// задание №1

//let input = prompt("Введите любое число", );

//function takeInput (){
    //et input = prompt("Введите любое число",);
    //console.log(typeof(input));


//}


//takeInput();


// 42 urok
console.log(document.getElementById('btn1'));
console.log(document.getElementById('btn2'));

let click = document.getElementById('btn1');
let click2 = document.getElementById('btn2');

// click.onclick = function () {
//     alert("click");
// };

// Удаление кнопки

// let delete_elem = (e) => {
//   e.target.remove();
// }

// Вывести текст

// let delete_elem = (e) => {
//   console.log(e.target.innerText);
// };


let delete_elem = (e) => {
  alert(`Вы кликнули на кнопку: ${e.target.innerText}`);
}

click.addEventListener('click', delete_elem);
click2.addEventListener('click', delete_elem);

// click.addEventListener('click',() => {
//     alert("click");
//   });

