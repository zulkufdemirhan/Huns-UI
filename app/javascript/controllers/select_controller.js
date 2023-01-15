import { Controller } from "@hotwired/stimulus"
import SlimSelect from 'slim-select'
import { colors } from '../db/colors'

export default class extends Controller {

  initialize() {
    this.setColors = this.setColors.bind(this)
  }

  connect() {
    const slim = new SlimSelect({
      select: '#hex_code',
      settings: {
        placeholderText: 'Select Color'
      },
      events: {
        searchFilter: (option, search) => {
          if (search.match(/^\d/) || search.startsWith('#')) {
            return option.value.toLowerCase().indexOf(search.toLowerCase()) !== -1
          }
          else
          {
            return option.text.toLowerCase().indexOf(search.toLowerCase()) !== -1
          }
        },
        afterChange: (newVal) => {
          let path = `?color=${newVal[0].value.replace('#', '')}`
          fetch(path, { headers: { Accept: "text/vnd.turbo-stream.html" }})
              .then(r => r.text())
              .then(html => Turbo.renderStreamMessage(html))
              }
      }
    })

    slim.setData(this.setColors())
  }

  setColors() {
    const color = [];
    for(const key in colors) {
      color.push({ text: colors[key].html, value: colors[key].value, html: colors[key].html})
    }

    return color;
  }
}
