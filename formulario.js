/*El codigo primero evalua los campos del formulario para verificar que esten
escritos y aplica algunas validaciones si no se cumplen marca en rojo los input
luego si todo esta correcto crea un card con los datos del invitado y 
limpia los campos si es que se crea el card, el boton eliminar borra el nodo
padre del que se encuentra */

let formulario = document.querySelector(".formulario"); // se cambio a .formluario para que agarrara el formulario
//se cambiaron todos los var por let
formulario.onsubmit = function (event) {
  event.preventDefault(); //se le agrefo default
  //se cambiaroon las variables por unas mas legibles
  let inputNombre = formulario.elements.names;
  let inputEdad = formulario.elements.age;
  let selectNacionalidad = formulario.elements.nationality;

  let nombre = inputNombre.value;
  let edad = parseInt(inputEdad.value);
  let nacionalidad = selectNacionalidad.value;

  // se cambiaron los if a poeradores ternarios
  nombre.trim().length === 0
    ? inputNombre.classList.add("error")
    : inputNombre.classList.remove("error");
  //se agrego un rango de edad realista
  isNaN(edad) || edad < 18 || edad > 90
    ? inputEdad.classList.add("error")
    : inputEdad.classList.remove("error");
  //se cambio el alert para que tmb tenga la clase error
  nacionalidad === ""
    ? selectNacionalidad.classList.add("error")
    : selectNacionalidad.classList.remove("error");

  // se compara que no tenga clase los inputs para poder agregar el card
  if (
    inputNombre.classList.value === "" &&
    inputEdad.classList.value === "" &&
    selectNacionalidad.classList.value === ""
  ) {
    agregarInvitado(nombre, edad, nacionalidad);
    names.value = "";
    age.value = "";
    nationality.value = "";
  }
  //se agrego que se limpien los campos al agregar la card
};

function agregarInvitado(nombre, edad, nacionalidad) {
  let lista = document.getElementById("lista-de-invitados");

  let elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  function crearElemento(descripcion, valor) {
    let span = document.createElement("span");
    span.textContent = descripcion + ": " + valor;
    //se corrigo todos que fueran inputs los valores que se agregaban al card
    elementoLista.appendChild(span);
    elementoLista.appendChild(document.createElement("br"));
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  let botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";

  elementoLista.appendChild(botonBorrar);
  //se cambio todo el codigo para que el boton solo borre al nodo padre de boton borrar
  botonBorrar.onclick = function () {
    elementoLista.remove();
  };
}
