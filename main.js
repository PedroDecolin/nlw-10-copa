function createGame(pais1, pais2, horario) {
  return `
    <li>    
        <img src="./assets/icon-${pais1}.svg" alt="bandeira do ${pais1}" />
        <strong>${horario}</strong>
        <img src="./assets/icon-${pais2}.svg" alt="bandeira da ${pais2}" />
    </li>
    `;
}

let delay = -0.4;
function createCard(data, diaSemana, game) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${data} <span>${diaSemana}</span></h2>

    <ul>
      ${game}  
    </ul>
    </div>
    `;
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("brazil", "cameroon", "08:00") +
      createGame("hungary", "argentina", "13:00") +
      createGame("colombia", "japan", "22:00")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("brazil", "cameroon", "08:00") +
      createGame("hungary", "argentina", "13:00") +
      createGame("colombia", "japan", "22:00")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("brazil", "cameroon", "08:00") +
      createGame("hungary", "argentina", "13:00") +
      createGame("colombia", "japan", "22:00")
  );
