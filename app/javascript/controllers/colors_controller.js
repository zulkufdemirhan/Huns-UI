import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ['hexTextBox', 'hexSelector']

  printHexCode(event) {
    let selectedValueHexCode    = this.hexSelectorTarget.value
    this.hexTextBoxTarget.value = selectedValueHexCode
    let path = `?color=${selectedValueHexCode.replace('#', '')}`
    fetch(path, { headers: { Accept: "text/vnd.turbo-stream.html" }})
        .then(r => r.text())
        .then(html => Turbo.renderStreamMessage(html))
  }
}
