"use_strict"
//Использование строгого режима для обработки данных

window.addEventListener('click', function (event) {
//console.log('click window');

    //console.log(event.target.classList.contains('minus2'));


    if (event.target.classList.contains('minus2')) {
        console.log('minus');
        const add_and_delete = event.target.closest(".add_and_delete");

        //console.log(add_and_delete);

        const count = add_and_delete.querySelector(".counter");

        //console.log(count);

        if (parseInt(count.innerText) > 1) {
            count.innerText = --count.innerText;
    
        }
    

    }




    if (event.target.classList.contains('plus2')) {
        console.log('plus');

        const add_and_delete = event.target.closest(".add_and_delete");

        //console.log(add_and_delete);

        const count = add_and_delete.querySelector(".counter");

        //console.log(count);

        count.innerText = ++count.innerText;


    }




    if (event.target.classList.contains('delete2')) {
        console.log('delete');

        const add_and_delete = event.target.closest(".add_and_delete");

        //console.log(add_and_delete);

        const count = add_and_delete.querySelector(".delete2");

        //console.log(count);

            function del_func() {
                event.target.closest(".add_product").remove();
            }


        del_func();    


    }



});



