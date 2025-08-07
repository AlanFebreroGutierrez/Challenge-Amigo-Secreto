let amigos = [];

function agregarAmigo() {
//Captura el input del usuario.
    let input = document.querySelector("#amigo");
    let nombre = input.value.trim();

//Valida la entrada para que efectivamente se ingrese un nombre y no un espacio en blanco.
    if (nombre === ""){
        alert("Ingrese un nombre.");
        return;
}

//Agrega el nombre al array
amigos.push(nombre);

//limpia el input
input.value = "";

//Muestra la lista de amigos en pantalla
mostrarLista();
}

function mostrarLista(){
    let listaNombres = document.getElementById("listaAmigos");
//Limpia la lista previa
    listaNombres.innerHTML = "";

    amigos.forEach(function(nombre){
        let li = document.createElement("li");
        li.textContent = nombre;
        listaNombres.appendChild(li);
    })
}