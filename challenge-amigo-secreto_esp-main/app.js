//Lista donde se almacenan los nombres ingresados.
let amigos = [];

//implementa una funcion para agregar amigos.
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;
  if (validarNombre(nombreAmigo)) {
    //continuar el guardado de datos
    amigos.push(nombreAmigo);
    document.getElementById("amigo").value = "";
  } else {
    alert("Por favor, inserte un monbre.");
  }
}

function validarNombre(amigo) {
  if (amigo === "") {
    return false;
  } else {
    return true;
  }
}

function agregarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let index = 0; index < amigos.length; index++) {
    lista.innerHTML = lista.innerHTML 
  }
    
}
