import { generateLayout } from "./core/layoutEngine.js"
import { renderSvg } from "./renderer/svgRenderer.js"
import { initUI } from "./ui/uiController.js"

document.addEventListener("DOMContentLoaded", () => {

  initUI()

  const svgElement = document.getElementById("wallSvg")
  const wallInput = document.getElementById("wallWidth")
  const offsetInput = document.getElementById("offset")
  const renderBtn = document.getElementById("renderBtn")

  renderBtn.addEventListener("click", () => {

    const wallLength = Number(wallInput.value) || 0
    const offset = Number(offsetInput.value) || 0

    const model = generateLayout({
      wallLength,
      offset
    })

    renderSvg(model)

  })

})
