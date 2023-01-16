import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="export"
export default class extends Controller {
  static targets = ['code']

  show() {
    this.codeTarget.classList.remove("hidden");
    console.log("test")
  }
  
  hide(){
    this.codeTarget.classList.add("hidden")
  }
}
