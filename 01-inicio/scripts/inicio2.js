// Acceso al Node Btn1 del DOM
// Constantes

const SALUDO = 'Hello ';


var oBtn1 = document.querySelector("#btn1");

var oNombre = document.querySelector('#nombre');

//Acceso al Node respuesta del DOM
var oRespuesta = document.querySelector('#respuesta');



function saludar () {
let sSaludo = SALUDO
sSaludo += oNombre.value;
oRespuesta.innerHTML = "<b>" + sSaludo + "</b>";
}

oBtn1.onclick = saludar;




console.dir(oBtn1);
console.dir(oNombre)
console.dir(oRespuesta)