import { getStatus } from "./services/statusService.js";
import { renderStatus } from "./ui/statusUI.js";

import { enviarImagem, listarAnalises } from "./services/analiseService.js";
import { renderResultado, renderLista } from "./ui/analiseUI.js";

async function init() {
  try {
    const status = await getStatus();
    renderStatus(status);
  } catch {
    document.getElementById("status").innerText = "Erro ao carregar status";
  }
}

init();

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = error => reject(error);
  });
}

window.handleUpload = async function () {
  const file = document.getElementById("fileInput").files[0];

  if (!file) {
    alert("Selecione uma imagem");
    return;
  }

  const resultadoDiv = document.getElementById("resultado");

  resultadoDiv.innerHTML = "";

  const preview = document.createElement("img");
  preview.src = URL.createObjectURL(file);
  preview.style.width = "200px";
  preview.style.display = "block";
  preview.style.marginBottom = "10px";

  resultadoDiv.appendChild(preview);

  const loading = document.createElement("p");
  loading.innerText = "Analisando imagem...";
  resultadoDiv.appendChild(loading);

  try {
    const base64 = await toBase64(file);
    const result = await enviarImagem(base64);

    renderResultado(result);

  } catch (error) {
    console.error(error);
    resultadoDiv.innerHTML = "Erro ao analisar imagem";
  }
};

window.carregarLista = async function () {
  try {
    const lista = await listarAnalises();
    renderLista(lista);
  } catch (error) {
    console.error(error);
  }
};