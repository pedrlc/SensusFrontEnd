import { request } from "./api.js";

export async function getStatus() {
  const result = await request("/api/status");
  return result.dados;
}