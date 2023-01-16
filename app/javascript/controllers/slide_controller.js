import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="slide"
export default class extends Controller {
  static targets = ['board']

  show() {
    this.boardTarget.classList.remove("hidden");
  }
  
  hide(){
    this.boardTarget.classList.add("hidden")
  }
}