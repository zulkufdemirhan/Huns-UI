import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ['hexTextBox', 'hexSelector']

  printHexCode(event) {
    this.hexTextBoxTarget.value = this.hexSelectorTarget.value
  }
}
