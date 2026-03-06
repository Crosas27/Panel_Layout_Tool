export function renderLayout({ wallWidth, ribs, seams, offset }) {

  const svg = document.getElementById("layoutSvg");

  svg.innerHTML = "";

  const scale = 8;
  const width = wallWidth * scale;
  const height = 120;

  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

  // COLORS

  const colors = {
    wall: "#f3f6fb",
    rib: "#6b7280",
    seam: "#2563eb",
    text: "#1f2937"
  };

  // WALL BACKGROUND

  const wall = document.createElementNS("http://www.w3.org/2000/svg", "rect");

  wall.setAttribute("x", 0);
  wall.setAttribute("y", 20);
  wall.setAttribute("width", width);
  wall.setAttribute("height", 60);
  wall.setAttribute("fill", colors.wall);

  svg.appendChild(wall);

  // DRAW RIBS

  ribs.forEach((rib, index) => {

    const x = rib * scale;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    line.setAttribute("x1", x);
    line.setAttribute("y1", 20);
    line.setAttribute("x2", x);
    line.setAttribute("y2", 80);
    line.setAttribute("stroke", colors.rib);
    line.setAttribute("stroke-width", 1);

    svg.appendChild(line);

    // RIB LABEL

    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");

    label.setAttribute("x", x);
    label.setAttribute("y", 95);
    label.setAttribute("font-size", "10");
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("fill", colors.text);

    label.textContent = `R${index}`;

    svg.appendChild(label);

  });

  // DRAW PANEL SEAMS

  seams.forEach(seam => {

    const x = seam * scale;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    line.setAttribute("x1", x);
    line.setAttribute("y1", 20);
    line.setAttribute("x2", x);
    line.setAttribute("y2", 80);

    line.setAttribute("stroke", colors.seam);
    line.setAttribute("stroke-width", 3);

    svg.appendChild(line);

  });

}
