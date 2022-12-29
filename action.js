function myFunc()  {
	var now = new Date();
	var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
	document.getElementById('horaactual').innerHTML= time;
}
myFunc();
setInterval(myFunc, 1000);

/**************************************/
const experiencia =document.querySelector("#experiencia");
const estudios =document.querySelector("#estudios");
const habilidades =document.querySelector("#habilidades");

function cambiarColor(){    
    estudios.style.color="green";

}

