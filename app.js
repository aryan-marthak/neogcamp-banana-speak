var btntranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")


console.log(txtInput);

function clickhandler(){
    outputDiv.innerText = "asjsoanveo " + txtInput.value
};


btntranslate.addEventListener("click", clickhandler)