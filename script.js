const figurine = [
  {
    nome: "Del Piero Alessandro",
    anno: "1994",
    collezione: "Calciatori Panini",
    caratteristiche: "Esaurita in Panini",
    immagine: "figurine/delpiero94.jpg"
  },
  {
    nome: "Mancini Roberto",
    anno: "1990",
    collezione: "Italia 90",
    caratteristiche: "Esaurita in Panini",
    immagine: "figurine/mancini90.jpg"
  },
  {
    nome: "Pirlo Andrea",
    anno: "1997",
    collezione: "Calciatori Panini 97-98",
    caratteristiche: "Rookie, Esaurita in Panini",
    immagine: "figurine/pirlo97.jpg"
  },
  {
    nome: "Figurina Mancante",
    anno: "2001",
    collezione: "Calciatori Panini",
    caratteristiche: "Non disponibile",
    immagine: "immagini/placeholder.png"
  }
];

const container = document.getElementById("figurine-container");
const menuList = document.getElementById("menu-list");

figurine.forEach((f, index) => {
  // Genera la card
  const card = document.createElement("div");
  ...
  card.id = `card-${index}`; // aggiungo ID univoco
  container.appendChild(card);

  // Crea voce nel menu
  const menuItem = document.createElement("li");
  menuItem.innerHTML = `<a href="#card-${index}">${f.nome}</a>`;
  menuList.appendChild(menuItem);
});
