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
}
polishingBSelect.addEventListener("change", changePolishingB);