// let ttl = document.getElementsByClassName("ttl"); 

// console.log(ttl[0].innerText);

// let price = document.getElementsByClassName("price"); 

// console.log(price[0].innerText);

// let image = document.getElementsByClassName("image"); 

// console.log(image[0].src);

//29 urok

// let ttl = document.querySelectorAll(".body_product > .ttl");

// console.log(ttl[0].innerText);
// console.log(ttl[1].innerText);
// console.log(ttl[2].innerText);
// console.log(ttl[3].innerText);
// console.log(ttl[4].innerText);
 

// var elements = document.getElementsByClassName("add_card");

//     var myFunction = function () {
//         var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
//         console.log(attribute[0].innerText);
//     }

//     for (var i = 0; i < elements.length; i++) {
//         elements[i].addEventListener("click", myFunction, false);
//     }

//     var pricefunc = function () {
//         var attribute2 = this.parentNode.parentNode.parentNode.querySelectorAll(".price");
//         console.log(attribute2[0].innerText);
//     }

//     for (var i = 0; i < elements.length; i++) {
//         elements[i].addEventListener("click", pricefunc, false);
//     }

    // var imagefunc = function () {
    //     var attribute3 = this.parentNode.parentNode.parentNode.querySelectorAll(".image");
    //     console.log(attribute3[0]);
    // }

    // for (var i = 0; i < elements.length; i++) {
    //     elements[i].addEventListener("click", imagefunc, false);
    // }

// 30 urok

// function test_fun() {
//     alert("hello");
// }

// test_fun();




// function test_fun(param,param2,param3) {
//     var number = 10;
//     var res;
//     res = number + param+ param2 + param3;

//     alert(res)

// }

// test_fun(20,1,3);



// const arr = {
//     name: "Ismar",
//     age: 26,
//     param:{
//         color: "white",
//         nat: "dungan"
//     }
// };

// console.log(arr.name);

// // delete arr.name;

// console.log(arr);


// for (let key in arr) {

//     if (typeof(arr[key])  === 'object'){

//         for (let key2 in arr[key]) {
//             console.log(arr[key][key2]);
//         }

//     } else {

//         console.log(arr[key]);
//     } 
    
// }

// urok 31
// Что такое function

// function name_fun(number)  {
//     let num = number;

//     console.log(num);
// }

// name_fun(200);
// name_fun(300);

// let per = 10;
// console.log(per);

// function name_fun(){
//     let num = 10;

//     console.log(num);
// }

// name_fun();

// let num = 200;


//     function name_fun(num){
//         let per_const = 120;
//         let result;

//         result = per_const + num;
//         console.log(result);
//     }

// name_fun(200);

// HW 31

//Задание №1

// function number() {
//     let number1 = Number(prompt("Введите первое число:" , ));
//     let number2 = Number(prompt("Введите второе число:" , ));
//     let result = number1 ** number2;

//     alert(result);

// }

// number();

// Задание №2

// function calcCircum(radius) {

//     result = 2 * Math.PI * radius;

//     alert(result);
// }

// calcCircum(prompt("Введите радиус: ", ))



//Задание №3

// function calcBox() {
//     let a = Number(prompt("Введите первое число:" , ));
//     let b = Number(prompt("Введите второе число:" , ));
//     let result = 2 * (a + b);

//     alert(result);
// }

// calcBox();


// 32 urok
//Методы и свойства

// let text = "Привет! как у тебя дела?";
// console.log(text.indexOf("тебя"));

// let text = "Привет! как у тебя дела?";
// console.log(text.slice(7,11));

// let text = "Привет! как у тебя дела?";
// console.log(text.replace("тебя","себя"));

//Методы и свойства чисел

// let number = 130;
// number.toString();

// let x = 9.656;
// console.log(x.toExponential(2));

// let x = 9.656;

// x = Number(x);
// console.log(x.toFixed(1));

// let x = 9;
// let a = "10";
// let result;
// result = x + +a;

// console.log(result);


// Задание №1

// function plusNumber() {
//     let a = (prompt("Введите первое число:" , ));
//     let b = (prompt("Введите второе число:" , ));
//     let c = +a + +b;
//     alert(c.toFixed());

// }

// plusNumber();

// 33 urok

//добавление товара в корзину

let class_name = document.getElementsByClassName("add_card");

console.log(class_name);



var myFunction = function() {
    let title = this.parentNode.parentNode.parentNode.getElementsByClassName("ttl");
    let price = this.parentNode.parentNode.parentNode.querySelectorAll(".price .oprice");
    let price3 = this.parentNode.parentNode.parentNode.querySelectorAll(".price .currency");
    let price2 = this.parentNode.parentNode.parentNode.querySelectorAll(".price del");
    let images = this.parentNode.parentNode.parentNode.querySelectorAll(".img img");

    let creat_li = document.createElement('li');

    console.log(title[0].innerText);
    console.log(price[0].innerText);
    console.log(price3[0].innerText);
    console.log(price2[0].innerText);
    console.log(images[0].src);

    creat_li.innerHTML = '  \
                            <div class="kartochka">\
                                <div class="left">\
                                    <img src="'+images[0].src+'" alt="">\
                                </div>\
                                <div class="right">\
                                    <h1>'+title[0].innerText+'</h1>\
                                    <span class="cena2">'+price3[0].innerText+'</span>\
                                    <span class="cena">'+price[0].innerText+'</span>\
                                    <span class="cena1">'+price2[0].innerText+'</span>\
                                    <a class="delete">\
                                        <i class="fa-regular fa-trash-can"></i>\
                                    </a>\
                                </div>\
                            </div>';

    let block_cart = document.querySelector('.dropdown_menu_card ul');
    block_cart.appendChild(creat_li);

    alert("Товары успешно добавлены в корзину!");

        // Удаленние товара

        
    delete_func();    


        //получить общее количество суммы товаров в корзину
    total_price();   


        // получить количество товаров в корзине
        count_product();

};



for(var i = 0; i < class_name.length; i++) {
    class_name[i].addEventListener('click',myFunction, false);
}


//39 urok

// Удаленние товара

function delete_func () {
    
    let click_trash = document.querySelectorAll(".delete");


    for(var i = 0; i < click_trash.length; i++) {
        click_trash[i].addEventListener('click',del_func, false);
    };


    function del_func(){
        this.parentNode.parentNode.remove();
        total_price();
        count_product();

    };


}

function total_price() {

    let count_price = document.querySelectorAll(".cena");

    let total_price = 0;

    for (var i = 0; i < count_price.length; i++) {
        total_price = total_price + (+ count_price[i].textContent);
    }

    console.log(total_price);
    document.getElementsByClassName("total_card")[0].innerHTML = `$ ${total_price}`;
    document.getElementsByClassName("total1")[0].innerHTML = `$ ${total_price}`;


}



function count_product(){
    let count_product = document.getElementsByClassName("kartochka").length;
    document.getElementsByClassName("curr_number")[0].innerHTML = count_product
}


const tabs = {
    list_tabs: [
        "Лидеры продаж",
        "Новинка",
        "Распродажа"
    ]
};

let creat_ul = document.createElement("ul");

tabs.list_tabs.forEach((item, i ) => {
    creat_ul.innerHTML += `<li>${item}</li>`;
});

document.querySelector(".insert_listing").innerHTML += creat_ul.outerHTML;