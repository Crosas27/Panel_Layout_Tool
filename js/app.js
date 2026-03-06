import { calculateLayout } from "./core/layoutEngine.js"
import { renderLayout } from "./renderer/svgRenderer.js"
import { initUI } from "./ui/uiController.js"

document.addEventListener("DOMContentLoaded", () => {
  initUI()
  init()
})

function init() {

  const renderBtn = document.getElementById("renderBtn")

  renderBtn.addEventListener("click", handleRender)

}

function handleRender() {

  const svgElement = document.getElementById("wallSvg")
  const wallInput = document.getElementById("wallWidth")
  const offsetInput = document.getElementById("offset")

  const wallWidth = Number(wallInput.value) || 0
  const offset = Number(offsetInput.value) || 0

  const layout = calculateLayout({
    wallWidth,
    offset
  })

  renderLayout(svgElement, layout)

}
