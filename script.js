//Variables
let inputText = "";
let outputText = "";

document.querySelector(".encriptedMessageBox").style.display="none";
document.querySelector(".noMessageAlert").style.display = "none";
document.querySelector(".copyButtonBox").style.display = "none";


// Function Encrypt
function enctryptButtonPush (){
inputText = document.querySelector(".textEnter").value;
console.log(inputText);
toggleElements();
clearTextBox();
if (!inputText.match(/^[a-z !¡/s]+$/)){
    return document.querySelector(".encriptedMessageBox").value="Hubo un error en la encriptación, por favor revise que el mensaje esté escrito con letra minúscula y sin acentos.";
}
outputText = inputText.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
document.querySelector(".encriptedMessageBox").value=outputText;
console.log(outputText);
}

//Funcion Unencrypt
function unenctryptButtonPush (){
inputText = document.querySelector(".textEnter").value;
outputText = inputText.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
console.log(outputText);
document.querySelector(".encriptedMessageBox").value=outputText;
clearTextBox ();
}

//Clean Text Box
function clearTextBox (){
    document.querySelector(".textEnter").value = "";
}

//Toggle Elements
function toggleElements (){
document.querySelector(".guyDrawing").style.display = "none";
document.querySelector(".noMessageAlert").style.display = "none";
document.querySelector(".copyButtonBox").style.display = "inline";
document.querySelector(".encriptedMessageBox").style.display = "inline";
}


//Funcion Copy
function clipboard (){
    navigator.clipboard.writeText(outputText)
    .then(() => {console.log("texto copiado en portapapeles")})
    .catch(err => {console.log("el texto no pudo copiarse")});
}

//Button Description
document.querySelector(".enctryptButton").innerHTML = "Encriptar";
document.querySelector(".unenctryptButton").innerHTML = "Desencriptar";
document.querySelector(".copyButton").innerHTML = "Copiar";