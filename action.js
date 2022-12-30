function myFunc()  {
	var now = new Date();
	var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
	document.getElementById('horaactual').innerHTML= time;
}
myFunc();
setInterval(myFunc, 1000);

/**************************************/

function colorRojo(){    
    experiencia.style.background="red";
}
function colorVerde(){    
    estudios.style.background="green";
}
function colorAzul(){    
    habilidades.style.background="blue";
}
//************************************** */
function mensaje(){
document.getElementById('gracias').innerHTML= "gracias! Feliz año nuevo";
}

function cambiarImagenJS(){
	document.getElementById("fotocv").src="img/sonrisa.jpeg";
  }