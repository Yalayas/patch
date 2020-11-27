var sideaSelect = formChoice.sideA;
function changeOption(){
    var selection = document.getElementById("selection");
    var selectedOption = sideaSelect.options[sideaSelect.selectedIndex];
    selection.textContent = "Патч-корд " + selectedOption.text;
}
sideaSelect.addEventListener("change", changeOption);


var polishingASelect = formChoice.polishingA;
function changePolishingA(){
    var selection = document.getElementById("selection2");
    var selectedOption = polishingASelect.options[polishingASelect.selectedIndex];
    selection2.textContent = "/" + selectedOption.text;
}
polishingASelect.addEventListener("change", changePolishingA);

var sideBSelect = formChoice.sideB;
function changeSideB(){
    var selection = document.getElementById("selection3");
    var selectedOption = sideBSelect.options[sideBSelect.selectedIndex];
    selection3.textContent = "-" + selectedOption.text;
}
sideBSelect.addEventListener("change", changeSideB);

var polishingBSelect = formChoice.polishingB;
function changePolishingB(){
    var selection = document.getElementById("selection4");
    var selectedOption = polishingBSelect.options[polishingBSelect.selectedIndex];
    selection4.textContent = "/" + selectedOption.text;
    console.log(selection4);
}
polishingBSelect.addEventListener("change", changePolishingB);


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