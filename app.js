let amigos = [];

function agregarAmigo() {
    //Captura el input del usuario.
    let input = document.querySelector("amigo");
    let nombre = input.value.trim();

    //Valida la entrada para que efectivamente se ingrese un nombre y no un espacio en blanco.
    if (nombre === ""){
        alert("Ingrese un nombre.");
        return;
    }
}
    
