"use_strict"
//Использование строгого режима для обработки данных



window.addEventListener('click', function (event) {
//console.log('click window');

    //console.log(event.target.classList.contains('minus2'));


    if (event.target.classList.contains('minus')) {
        console.log('minus');
        const add_and_delete = event.target.closest(".add_count");

        //console.log(add_and_delete);

        const count = add_and_delete.querySelector(".counter");

        //console.log(count);

        if (parseInt(count.innerText) > 1) {
            count.innerText = --count.innerText;
    
        }
    

        //count.innerText = --count.innerText;

    }

    if (event.target.classList.contains('plus')) {
        console.log('plus');

        const add_and_delete = event.target.closest(".add_count");

        //console.log(add_and_delete);

        const count = add_and_delete.querySelector(".counter");

        //console.log(count);

        count.innerText = ++count.innerText;


    }






});



// function delete_func () {
    

//     del_product.addEventListener('click',del_func);

//     function del_func() {
//         this.parentNode.parentNode.remove();
//     }
// };

// delete_func();
