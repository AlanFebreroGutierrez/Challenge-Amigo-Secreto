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
//Obtiene y conecta la variable listaNombres con el elemento <ul> de la pagina (id="listaAmigos").
    let listaNombres = document.getElementById("listaAmigos");
//Limpia la lista previa
    listaNombres.innerHTML = "";
for (let i = 0; i <amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    listaNombres.appendChild(li);
    }
}
function sortearAmigo() {
//Valida que haya amigos para sortear
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
//Genera un índice aleatorio válido
let indice = Math.floor(Math.random() * amigos.length);
//Obtiene el nombre sorteado
let nombreSorteado = amigos[indice];
//Muestra el resultado en el elemento de id="resultado"
document.getElementById("resultado").innerHTML = nombreSorteado;
}