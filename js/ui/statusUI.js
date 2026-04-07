export function renderStatus(status) {
  const el = document.getElementById("status");

  el.innerHTML = `
    <p><strong>API:</strong> ${status.status}</p>
    <p><strong>IA:</strong> ${status.iaStatus}</p>
    <p><strong>Timestamp:</strong> ${new Date(status.timestamp * 1000).toLocaleString()}</p>
  `;
}