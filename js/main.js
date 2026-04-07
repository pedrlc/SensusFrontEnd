import { getStatus } from "./services/statusService.js";
import { renderStatus } from "./ui/statusUI.js";

import { enviarImagem, listarAnalises } from "./services/analiseService.js";
import { renderResultado, renderLista } from "./ui/analiseUI.js";

// STATUS
async function init() {
  try {
    const status = await getStatus();
    renderStatus(status);
  } catch {
    console.log("Erro status");
  }
}

init();

// CONVERTER IMAGEM → BASE64
function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(",")[1]);
    reader.onerror = error => reject(error);
  });
}

// UPLOAD
window.handleUpload = async function () {
  const file = document.getElementById("fileInput").files[0];

  if (!file) {
    alert("Selecione uma imagem");
    return;
  }

  const base64 = await toBase64(file);

  try {
    const result = await enviarImagem(base64);
    renderResultado(result);
  } catch (e) {
    console.error(e);
  }
};

// LISTAR
window.carregarLista = async function () {
  try {
    const lista = await listarAnalises();
    renderLista(lista);
  } catch (e) {
    console.error(e);
  }
};