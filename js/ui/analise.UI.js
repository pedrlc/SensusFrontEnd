export function renderResultado(data) {
  const el = document.getElementById("resultado");

  el.innerHTML = `
    <h3>Resultado</h3>
    <p><strong>ID:</strong> ${data.id}</p>
    <p><strong>Data:</strong> ${new Date(data.timestamp * 1000).toLocaleString()}</p>
    
    <h4>Objetos detectados:</h4>
    <ul>
      ${data.objetos.map(obj => `
        <li>
          ${obj.nome} - ${obj.distancia}
          ${obj.isClose ? "(PERTO)" : ""}
        </li>
      `).join("")}
    </ul>
  `;
}

export function renderLista(lista) {
  const el = document.getElementById("lista");

  el.innerHTML = "<h3>Histórico</h3>";

  lista.content.forEach(item => {
    const div = document.createElement("div");

    div.innerHTML = `
      <p><strong>ID:</strong> ${item.id}</p>
      <p>${new Date(item.timestamp * 1000).toLocaleString()}</p>
      <p>Objetos: ${item.objetos.map(o => o.nome).join(", ")}</p>
      <hr/>
    `;

    el.appendChild(div);
  });
}