export function renderLayout({ wallWidth, ribs, seams, offset }) {

  const svg = document.getElementById("layoutSvg");
  svg.innerHTML = "";

  const wallHeight = 140;
  const scale = 8; // pixels per inch

  svg.setAttribute("width", wallWidth * scale);
  svg.setAttribute("height", wallHeight);

  // ---- WALL BACKGROUND ----

  const wall = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  wall.setAttribute("x", 0);
  wall.setAttribute("y", 20);
  wall.setAttribute("width", wallWidth * scale);
  wall.setAttribute("height", 80);
  wall.setAttribute("fill", "#f5f7fa");

  svg.appendChild(wall);

  // ---- RIBS ----

  ribs.forEach((rib, i) => {

    const x = rib * scale;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    line.setAttribute("x1", x);
    line.setAttribute("x2", x);
    line.setAttribute("y1", 20);
    line.setAttribute("y2", 100);

    line.setAttribute("stroke", "#c7d0d9");
    line.setAttribute("stroke-width", "1");

    svg.appendChild(line);

    // rib number

    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");

    label.setAttribute("x", x);
    label.setAttribute("y", 115);

    label.setAttribute("text-anchor", "middle");
    label.setAttribute("font-size", "10");
    label.setAttribute("fill", "#6b7280");

    label.textContent = `R${i}`;

    svg.appendChild(label);

  });

  // ---- PANEL SEAMS ----

  seams.forEach(seam => {

    const x = seam * scale;

    const seamLine = document.createElementNS("http://www.w3.org/2000/svg", "line");

    seamLine.setAttribute("x1", x);
    seamLine.setAttribute("x2", x);
    seamLine.setAttribute("y1", 20);
    seamLine.setAttribute("y2", 100);

    seamLine.setAttribute("stroke", "#2f6fed");
    seamLine.setAttribute("stroke-width", "2.5");

    svg.appendChild(seamLine);

  });

  // ---- OFFSET MARKER ----

  if (offset > 0) {

    const x = offset * scale;

    const offsetLine = document.createElementNS("http://www.w3.org/2000/svg", "line");

    offsetLine.setAttribute("x1", x);
    offsetLine.setAttribute("x2", x);
    offsetLine.setAttribute("y1", 10);
    offsetLine.setAttribute("y2", 110);

    offsetLine.setAttribute("stroke", "#1f4fbf");
    offsetLine.setAttribute("stroke-width", "3");

    svg.appendChild(offsetLine);

  }

}
