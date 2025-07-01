function loadPlayer(playerId) {
  document.getElementById('playerName').textContent = playerId.charAt(0).toUpperCase() + playerId.slice(1);

  fetch(`data/${playerId}.json`)
    .then(response => response.json())
    .then(images => {
      const container = document.getElementById('figurineContainer');
      container.innerHTML = '';
      images.forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.src = `images/${playerId}/${img}`;
        imgElement.alt = playerId;
        container.appendChild(imgElement);
      });
    })
    .catch(error => {
      console.error("Errore nel caricamento:", error);
    });
}
