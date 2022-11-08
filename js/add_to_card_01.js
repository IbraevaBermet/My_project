"use strict";
//использоваие строго режима для обработки данных

const btnMinus = (document.getElementsByClassName("minus2")[0]);
const btnPlus = (document.getElementsByClassName("plus2")[0]);
const counter = (document.getElementsByClassName("counter")[0]);

const del_product = (document.getElementsByClassName("delete2")[0]);
console.log(del_product);



btnMinus.addEventListener('click',function () {

    if (parseInt(counter.innerText) > 1) {
        counter.innerText = --counter.innerText;

    }

});

btnPlus.addEventListener('click', function () {

    counter.innerText = ++counter.innerText;
});


function delete_func () {
    

    del_product.addEventListener('click',del_func);

    function del_func() {
        this.parentNode.parentNode.remove();
    }
};

delete_func();
