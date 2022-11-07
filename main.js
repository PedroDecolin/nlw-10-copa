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
    "20/11",
    "domingo",
    createGame("qatar", "ecuador", "16:00")
  ) +
  createCard(
    "21/11",
    "segunda",
    createGame("england", "iran", "13:00") +
    createGame("senegal", "netherlands", "16:00") +
    createGame("united_states", "wales", "19:00")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "saudi_arabia", "10:00") +
    createGame("denmark", "tunisia", "13:00") +
    createGame("mexico", "poland", "16:00") +
    createGame("france", "australia", "19:00")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("morocco", "croatia", "10:00") +
    createGame("germany", "japan", "13:00") +
    createGame("spain", "costa_rica", "16:00") +
    createGame("belgium", "canada", "19:00")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "cameroon", "10:00") +
    createGame("uruguay", "south_korea", "13:00") +
    createGame("portugal", "ghana", "16:00") +
    createGame("brazil", "serbia", "19:00")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("wales", "iran", "10:00") +
    createGame("qatar", "senegal", "13:00") +
    createGame("netherlands", "ecuador", "16:00") +
    createGame("england", "united_states", "19:00")
  ) +
  createCard(
    "26/11",
    "sabado",
    createGame("tunisia", "australia", "10:00") +
    createGame("poland", "saudi_arabia", "13:00") +
    createGame("france", "denmark", "16:00") +
    createGame("argentina", "mexico", "19:00")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japan", "costa_rica", "10:00") +
    createGame("belgium", "morocco", "13:00") +
    createGame("croatia", "canada", "16:00") +
    createGame("spain", "germany", "19:00")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "serbia", "10:00") +
    createGame("south_korea", "ghana", "13:00") +
    createGame("brazil", "switzerland", "16:00") +
    createGame("portugal", "uruguay", "19:00")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("ecuador", "senegal", "15:00") +
    createGame("netherlands", "qatar", "15:00") +
    createGame("iran", "united_states", "19:00") +
    createGame("wales", "england", "19:00")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("tunisia", "france", "15:00") +
    createGame("australia", "denmark", "15:00") +
    createGame("poland", "argentina", "19:00") +
    createGame("saudi_arabia", "mexico", "19:00")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croatia", "belgium", "15:00") +
    createGame("canada", "morocco", "15:00") +
    createGame("japan", "spain", "19:00") +
    createGame("costa_rica", "germany", "19:00")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("south_korea", "portugal", "15:00") +
    createGame("ghana", "uruguay", "15:00") +
    createGame("serbia", "switzerland", "19:00") +
    createGame("cameroon", "brazil", "19:00")
  )
