export function renderStatus(status) {
  const el = document.getElementById("status");

  el.innerHTML = `
    <p><strong>Backend:</strong> ${status.backend}</p>
    <p><strong>IA:</strong> ${status.iaService}</p>
  `;
}