export function renderResultado(data) {
  const el = document.getElementById("resultado");

  el.innerHTML = `
    <h3>Resultado da Análise</h3>
    <pre>${JSON.stringify(data, null, 2)}</pre>
  `;
}

export function renderLista(lista) {
  const el = document.getElementById("lista");

  el.innerHTML = "<h3>Histórico</h3>";

  lista.content.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p><strong>ID:</strong> ${item.id}</p>
      <hr/>
    `;
    el.appendChild(div);
  });
}