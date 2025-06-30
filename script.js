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

figurine.forEach(f => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${f.immagine}" alt="figurina di ${f.nome}" />
    <h2>${f.nome}</h2>
    <p><strong>Anno:</strong> ${f.anno}</p>
    <p><strong>Collezione:</strong> ${f.collezione}</p>
    <p><strong>Caratteristiche:</strong> ${f.caratteristiche}</p>
  `;
  container.appendChild(card);
});
