import { Controller } from "@hotwired/stimulus"
import tailwindcssPaletteGenerator from 'https://cdn.jsdelivr.net/npm/tailwindcss-palette-generator@0.2.5/+esm'
//import {tailwindcssColorSuite} from 'https://cdn.jsdelivr.net/npm/tailwindcss-color-suite@0.7.0/+esm'
// import kyIstailwindColorPalette from 'https://cdn.jsdelivr.net/npm/@ky-is/tailwind-color-palette@1.0.0/+esm'
// import paletteByNumbers from 'https://cdn.jsdelivr.net/npm/palette-by-numbers@0.1.6/+esm'
// import dlsColorPalette from 'https://cdn.jsdelivr.net/npm/dls-color-palette@0.1.0/+esm'
// import bobtheredtailwindcssPaletteGenerator from 'https://cdn.jsdelivr.net/npm/@bobthered/tailwindcss-palette-generator@3.1.1/+esm'
// import tailwindColorGenerator from 'https://cdn.jsdelivr.net/npm/tailwind-color-generator@1.0.2/+esm'
// import colorPalettesTailwindcss from 'https://cdn.jsdelivr.net/npm/color-palettes-tailwindcss@0.0.1/+esm'
// import tailwindShadesForCustomColors from 'https://cdn.jsdelivr.net/npm/tailwind-shades-for-custom-colors@1.0.2/+esm'
//import ntc from 'https://cdn.jsdelivr.net/npm/ntc/+esm'
//import yatiacnameThatColor from 'https://cdn.jsdelivr.net/npm/@yatiac/name-that-color/+esm'



// Connects to data-controller="export"
export default class extends Controller {

  setColor(event) {
    event.preventDefault()

    let colorCode = event.currentTarget.value
    debugger

    let path = `?color=${colorCode.replace('#', '')}`
    fetch(path, { headers: { Accept: "text/vnd.turbo-stream.html" }})
        .then(r => r.text())
        .then(html => Turbo.renderStreamMessage(html))
      }
  }