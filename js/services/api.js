const BASE_URL = "http://localhost:8080";

export async function request(endpoint, options = {}) {
  const response = await fetch(BASE_URL + endpoint, {
    headers: {
      "Content-Type": "application/json"
    },
    ...options
  });

  if (!response.ok) {
    throw new Error("Erro na API");
  }

  return response.json();
}