// * se encarga de hacer la comunicacion con el servidor, recibir la respuesta y
//* generarla en un json

const cardStarwars = () =>
  fetch("http://localhost:3000/starWars").then((respuesta) => respuesta.json());

const cardConsolas = () =>
  fetch("http://localhost:3000/consola").then((respuesta) => respuesta.json());

const cardDiversos = () =>
  fetch("http://localhost:3000/diversos").then((respuesta) => respuesta.json());

export const productoServices = {
  cardStarwars,
  cardConsolas,
  cardDiversos,
};
