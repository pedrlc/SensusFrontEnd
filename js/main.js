import { getStatus } from "./services/statusService.js";
import { renderStatus } from "./ui/statusUI.js";

async function init() {
  try {
    const status = await getStatus();
    renderStatus(status);
  } catch (error) {
    document.getElementById("status").innerText = "Erro ao carregar status";
  }
}

init();