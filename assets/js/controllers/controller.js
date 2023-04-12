//* trabajamos en la interaccion del js con el HTML

import { productoServices } from "../service/service.js";

const crearNuevaLinea = (name, img, precie, id) => {
  const linea = document.createElement("div");
  const contenido = `
    <div class="main__card">
      <img src="${img}" alt="" class="main__img">
      <div class="main__info">
        <h3 class="main__descripcion">${name}</h3>
        <span class="main__precio">R$ ${precie}</span>
        <a href="#/id=${id}" class="main__link">Ver producto</a>
      </div>
    </div>`;

  linea.innerHTML = contenido;
  return linea;
};

const cardStarwars = document.querySelector("[data-Starwars]");

productoServices
  .cardStarwars()
  .then((data) => {
    data.forEach((producto) => {
      const nuevaLinea = crearNuevaLinea(
        producto.name,
        producto.img,
        producto.precie,
        producto.id
      );
      cardStarwars.appendChild(nuevaLinea);
    });
  })
  .catch((error) => console.log("Ocurrio un error"));

const cardConsola = document.querySelector("[data-Consolas]");

productoServices
  .cardConsolas()
  .then((data) => {
    data.forEach((producto) => {
      const nuevaLinea = crearNuevaLinea(
        producto.name,
        producto.img,
        producto.precie,
        producto.id
      );
      cardConsola.appendChild(nuevaLinea);
    });
  })
  .catch((error) => console.log("Ocurrio un error"));

const cardDiverso = document.querySelector("[data-diversos]");

productoServices
  .cardDiversos()
  .then((data) => {
    data.forEach((producto) => {
      const nuevaLinea = crearNuevaLinea(
        producto.name,
        producto.img,
        producto.precie,
        producto.id
      );
      cardDiverso.appendChild(nuevaLinea);
    });
  })
  .catch((error) => console.log("Ocurrio un error"));
