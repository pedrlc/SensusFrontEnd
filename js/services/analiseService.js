import { request } from "./api.js";

export async function enviarImagem(base64) {
  const result = await request("/api/analisar", {
    method: "POST",
    body: JSON.stringify({
      imagemBase64: base64,
      formato: "jpeg"
    })
  });

  if (!result.sucesso) {
    throw new Error(result.mensagem);
  }

  return result.dados;
}

export async function listarAnalises(page = 0) {
  const response = await fetch(
    `http://localhost:8080/api/analises?page=${page}&size=10`
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar análises");
  }

  return response.json();
}