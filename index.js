const grilla = document.querySelector(".grilla");
const items = ["🍉", "🍐", "🍌", "🍇", "🍎", "🍊"];

const crearGrilla = (ancho, alto) => {
  const anchoDeGrilla = 50 * ancho;
  grilla.style.width = `${anchoDeGrilla}px`;

  const obtenerNumeroAlAzar = () => {
    return Math.floor(Math.random() * 6);
  };

  const obtenerFrutaAlAzar = () => {
    return items[obtenerNumeroAlAzar()];
  };

  const listaDeFrutas = [];

  for (let i = 0; i < alto * ancho; i++) {
    listaDeFrutas[i] = obtenerFrutaAlAzar(items);
  }

  grilla.innerHTML = "";

  for (let i = 0; i < listaDeFrutas.length; i++) {
    grilla.innerHTML += `
    <div>${listaDeFrutas[i]}<div>
    `;
  }
};

//crearGrilla(6, 6); // me permite cambiar la cantidad de filas y columnas

//😀 ej muestra de ejemplo:

// const nombre = "coco";

// let nombreRepetido = "";

// for (let i = 0; i < 5; i++) {
//   console.log("estoy en la vuelta", i);
//   console.log(nombreRepetido);
//   nombreRepetido = nombreRepetido + " " + nombre; // nombreRepetido += nombre
// }
// console.log(nombreRepetido);

//😀 EJERCICIO:

// Al iniciar la pagina, pedir mediante un prompt que el usuariao elija la dificultad
// facil 9*9
// mediano 6*6
// dificil 4*4

let dificultad = prompt("Elija una dificultad: Facil, Moderado o Dificil");

if (dificultad == "facil") {
  console.log("crear grilla 9");
  crearGrilla(9, 9);
}

if (dificultad == "moderado") {
  console.log("crear grilla 6");
  crearGrilla(6, 6);
}

if (dificultad == "dificil") {
  console.log("crear grilla 4");
  crearGrilla(4, 4);
}
