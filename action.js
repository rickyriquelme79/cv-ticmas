
function myFunc()  {
    var now = new Date();
	var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
	
    document.getElementById('horaactual').innerHTML= time;

}

myFunc();
setInterval(myFunc, 1000);


function mostrarSaludo(){
    var ahora=new Date(); 
    var hora=ahora.getHours();


    if (hora>=6 && hora<13) {
        texto="Buenos días";  
    } else if (hora>=13 && hora<21) { 
        texto="Buenas tardes";
    } else { 
        texto="Buenas noches";
    }
   document.getElementById('saludo').innerHTML = texto;
   
} 

mostrarSaludo();

//************************************** */
function mensaje(){
document.getElementById('gracias').innerHTML= "gracias! Feliz año nuevo";
}

function cambiarImagenJS(){
	document.getElementById("fotocv").src="img/sonrisa.jpeg";
}
/**********************************************/   
  
function colorRojo(){    
    experiencia.style.background="deeppink";
}
function colorVerde(){    
    estudios.style.background="yellow";
}
function colorAzul(){    
    habilidades.style.background="coral";
}

/****************************************** */
