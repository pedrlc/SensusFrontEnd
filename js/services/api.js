const BASE_URL = "http://localhost:8080"; // ajuste se necessário

export async function request(endpoint, options = {}) {
  try {
    const response = await fetch(BASE_URL + endpoint, {
      headers: {
        "Content-Type": "application/json"
      },
      ...options
    });

    if (!response.ok) {
      throw new Error("Erro na API");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}