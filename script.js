function calcularRango(){
    var nota = document.getElementById("nota").value; /* .value para obtener el valor del campo */
    if(nota < 0 || nota > 10){ /* || or && and */
        alert("Lo siento el rango es entre 0 y 10");
    }
    if(nota >= 0 && nota <3){
        alert("Muy deficiente");
    }
    if(nota >=3 && nota <5){
        alert("Insuficiente")
    }
    if(nota == 5){
        alert("Suficiente");
    }
    if(nota == 6){
        alert("Bien");
    }
    if(nota >=7 && nota <9){
        alert("Notable");
    }
    if(nota >=9 && nota <=10){
        alert("Sobresaliente");
    }
}

/* var nota = prompt("Ingrese la nota"); */

