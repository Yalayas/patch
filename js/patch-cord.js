
/*
var t2Select = formChoice.t2;
function changet2(){
    var selection = document.getElementById("selection");
    var selectedOption = t2Select.options[t2Select.selectedIndex];
    selection.textContent = "Патч-корд " + selectedOption.text;
}
t2Select.addEventListener("change", changet2);
*/


/* 
Вариант 1 - ссылка на событие  прописана внутри HTML, не нужны addEventListener
*/

function onChange_t2() {
    const t2 = document.getElementById("t2");
    const text = t2.options[t2.value].text;
    document.getElementById("selection").textContent = "Патч-корд " + text;
}



/*
var t3Select = formChoice.t3;
function changet3(){
    var selection = document.getElementById("selection2");
    var selectedOption = t3Select.options[t3Select.selectedIndex];
    selection2.textContent = "/" + selectedOption.text;
}
t3Select.addEventListener("change", changet3);
*/


/*
В стиле EJS6, стрелочная функция
*/

document.getElementById("t3").addEventListener('change', (event) => {
    document.getElementById("selection2").textContent = "/" + event.target.options[event.target.value].text;
});



/*
Вариант 3  - по сути твой вариант
*/

var t4Select = document.getElementById("t4")
function changet4(){
    var selection = document.getElementById("selection3");
    var selectedOption = t4Select.options[t4Select.selectedIndex];
    selection3.textContent = "-" + selectedOption.text;
}
t4Select.addEventListener("change", changet4);

var t5Select = formChoice.t5;
function changet5(){
    var selection = document.getElementById("selection4");
    var selectedOption = t5Select.options[t5Select.selectedIndex];
    selection4.textContent = "/" + selectedOption.text;
    console.log(selection4);
}
t5Select.addEventListener("change", changet5);


var t6Select = formChoice.t6;
function changet6(){
    console.log('!!!!');
    var selection = document.getElementById("selection5");
    var selectedOption = t6Select.options[t6Select.selectedIndex];

    const str6 = selectedOption.text.split('=')[0];

    selection5.textContent = "-" + str6;
    console.log(selection5);
}
t6Select.addEventListener("change", changet6);

var t7Select = formChoice.t7;
function changet7(){
    console.log('!!!!');
    var selection = document.getElementById("selection6");
    var selectedOption = t7Select.options[t7Select.selectedIndex];

    const str7 = selectedOption.text.split('=')[0];

    selection6.textContent = "-" + str7;
    console.log(selection6);
}
t7Select.addEventListener("change", changet7);

var t8Select = formChoice.t8;
function lenght8(){

    var selection = document.getElementsByTagName("input")[0];

}


