import { Controller } from "@hotwired/stimulus"
import tailwindcssPaletteGenerator from 'https://cdn.jsdelivr.net/npm/tailwindcss-palette-generator@0.2/+esm'

// Connects to data-controller="export"
export default class extends Controller {

  setColor(event) {
    event.preventDefault()

    let colorCode = event.currentTarget.value

    let path = `?color=${colorCode.replace('#', '')}`
    fetch(path, { headers: { Accept: "text/vnd.turbo-stream.html" }})
        .then(r => r.text())
        .then(html => Turbo.renderStreamMessage(html))
      }
  }