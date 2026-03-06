import { calculateLayout } from "./engine/layoutEngine.js"
import { renderLayout } from "./renderer/svgRenderer.js"
import { initUI } from "./ui/uiController.js";

document.addEventListener("DOMContentLoaded", () => {
  initUI();
});


let svgElement
let wallInput
let offsetInput
let renderBtn

function init() {

  svgElement = document.getElementById("wallSvg")
  wallInput = document.getElementById("wallWidth")
  offsetInput = document.getElementById("offset")
  renderBtn = document.getElementById("renderBtn")

  renderBtn.addEventListener("click", handleRender)

}

function handleRender() {

  const wallWidth = Number(wallInput.value) || 0
  const offset = Number(offsetInput.value) || 0

  const layout = calculateLayout({
    wallWidth,
    offset
  })

  renderLayout(svgElement, layout)

}
