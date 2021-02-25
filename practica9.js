//ejercicio dia de la semana
let dia=prompt("Ingresa un día de la semana");
//convertir lo que escriba el usuario en minusculas
dia = dia.toLowerCase();
//Validamos el día si es entre semana o fin de semana
if (dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "miércoles" || dia == "jueves" || dia == "viernes") {
    alert("es un día entre semana");
} else {
    if (dia == "sabado" || dia == "sábado" || dia == "domingo") {
        alert("es un fin de semana");
    } else {
        alert("por favor ingrese un día de la semana");
    }
    
}