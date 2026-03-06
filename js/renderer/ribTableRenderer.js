// ribTableRenderer.js

import { formatToField } from "../core/measurementFormatter.js";

export function renderRibTable(model) {

  const container = document.getElementById("ribTable");
  if (!container) return;

  const ribs = model.ribs;

  if (!ribs || ribs.length === 0) {
    container.innerHTML = "<p>No ribs generated.</p>";
    return;
  }

  let html = `
    <h3>Rib Layout</h3>
    <table class="rib-table">
      <thead>
        <tr>
          <th>Rib</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
  `;

  ribs.forEach((rib, index) => {

    html += `
      <tr>
        <td>R${index}</td>
        <td>${formatToField(rib.position)}</td>
      </tr>
    `;

  });

  html += `
      </tbody>
    </table>
  `;

  container.innerHTML = html;
}
