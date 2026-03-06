// svgRenderer.js

import { formatToField } from "../utils/formatter.js";

export function renderSvg(model) {

  const svg = document.getElementById("wallSvg");
  if (!svg) return;

  svg.innerHTML = "";

  const wallLength = model.wallLength;
  const ribs = model.ribs;
  const panelCoverage = model.panelCoverage;

  const svgWidth = svg.clientWidth || 900;
  const svgHeight = 260;

  svg.setAttribute("viewBox", `0 0 ${svgWidth} ${svgHeight}`);

  const scale = wallLength > 0 ? svgWidth / wallLength : 1;

  const wallTop = 60;
  const wallHeight = 100;

  const panelDimY = 30;
  const totalDimY = 210;

  // ------------------------------------------------
  // PANEL SHADING
  // ------------------------------------------------

  let panelIndex = 0;

  for (let x = 0; x < wallLength; x += panelCoverage) {

    const width = Math.min(panelCoverage, wallLength - x);

    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    rect.setAttribute("x", x * scale);
    rect.setAttribute("y", wallTop);
    rect.setAttribute("width", width * scale);
    rect.setAttribute("height", wallHeight);

    rect.setAttribute(
      "fill",
      panelIndex % 2 === 0
        ? "rgba(140,160,180,0.15)"
        : "rgba(140,160,180,0.25)"
    );

    svg.appendChild(rect);

    panelIndex++;
  }

  // ------------------------------------------------
  // WALL OUTLINE
  // ------------------------------------------------

  const wall = document.createElementNS("http://www.w3.org/2000/svg", "rect");

  wall.setAttribute("x", 0);
  wall.setAttribute("y", wallTop);
  wall.setAttribute("width", wallLength * scale);
  wall.setAttribute("height", wallHeight);

  wall.setAttribute("stroke", "#90A4AE");
  wall.setAttribute("stroke-width", "2");
  wall.setAttribute("fill", "none");

  svg.appendChild(wall);

  // ------------------------------------------------
  // PANEL SEAMS
  // ------------------------------------------------

  for (let x = panelCoverage; x < wallLength; x += panelCoverage) {

    const seam = document.createElementNS("http://www.w3.org/2000/svg", "line");

    seam.setAttribute("x1", x * scale);
    seam.setAttribute("x2", x * scale);
    seam.setAttribute("y1", wallTop);
    seam.setAttribute("y2", wallTop + wallHeight);

    seam.setAttribute("stroke", "#78909C");
    seam.setAttribute("stroke-width", "4");
    seam.setAttribute("opacity", "0.7");

    svg.appendChild(seam);
  }

  // ------------------------------------------------
  // RIBS
  // ------------------------------------------------

  ribs.forEach((rib, index) => {

    const x = rib.position * scale;

    const ribLine = document.createElementNS("http://www.w3.org/2000/svg", "line");

    ribLine.setAttribute("x1", x);
    ribLine.setAttribute("x2", x);
    ribLine.setAttribute("y1", wallTop);
    ribLine.setAttribute("y2", wallTop + wallHeight);

    ribLine.setAttribute("stroke", "#2196F3");
    ribLine.setAttribute("stroke-width", "2");

    svg.appendChild(ribLine);

    // rib label

    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");

    label.setAttribute("x", x);
    label.setAttribute("y", wallTop + wallHeight + 18);
    label.setAttribute("text-anchor", "middle");

    label.setAttribute("fill", "#BBDEFB");
    label.setAttribute("font-size", "10");

    label.textContent = `R${index}`;

    svg.appendChild(label);
  });

  // ------------------------------------------------
  // PANEL DIMENSIONS (TOP)
  // ------------------------------------------------

  for (let x = 0; x < wallLength; x += panelCoverage) {

    const width = Math.min(panelCoverage, wallLength - x);

    const start = x * scale;
    const end = (x + width) * scale;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    line.setAttribute("x1", start);
    line.setAttribute("x2", end);
    line.setAttribute("y1", panelDimY);
    line.setAttribute("y2", panelDimY);

    line.setAttribute("stroke", "#B0BEC5");
    line.setAttribute("stroke-width", "1.5");

    svg.appendChild(line);

    const panelText = document.createElementNS("http://www.w3.org/2000/svg", "text");

    panelText.setAttribute("x", (start + end) / 2);
    panelText.setAttribute("y", panelDimY - 4);

    panelText.setAttribute("fill", "#CFD8DC");
    panelText.setAttribute("text-anchor", "middle");
    panelText.setAttribute("font-size", "10");

    panelText.textContent = formatToField(width);

    svg.appendChild(panelText);
  }

  // ------------------------------------------------
  // TOTAL WALL DIMENSION
  // ------------------------------------------------

  const totalLine = document.createElementNS("http://www.w3.org/2000/svg", "line");

  totalLine.setAttribute("x1", 0);
  totalLine.setAttribute("x2", wallLength * scale);
  totalLine.setAttribute("y1", totalDimY);
  totalLine.setAttribute("y2", totalDimY);

  totalLine.setAttribute("stroke", "#4FC3F7");
  totalLine.setAttribute("stroke-width", "2");

  svg.appendChild(totalLine);

  const totalText = document.createElementNS("http://www.w3.org/2000/svg", "text");

  totalText.setAttribute("x", (wallLength * scale) / 2);
  totalText.setAttribute("y", totalDimY - 10);

  totalText.setAttribute("text-anchor", "middle");
  totalText.setAttribute("fill", "#4FC3F7");

  totalText.textContent = formatToField(wallLength);

  svg.appendChild(totalText);
}
