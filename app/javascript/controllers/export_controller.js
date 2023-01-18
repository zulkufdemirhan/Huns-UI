import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="export"
export default class extends Controller {

  toggle(event) {
    let willToggle = event.currentTarget.dataset.toggleId
    document.getElementById(willToggle).classList.toggle('hidden')
  }
}
