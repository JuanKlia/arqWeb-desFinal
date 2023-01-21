function imagePlayComp() {
  class ImageComp extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    type;
    imageUrl;
    constructor() {
      super();
      
    }
    connectedCallback() {
      this.type = this.getAttribute("type");

      if (this.type == "piedra") {
        this.imageUrl = require("url:./piedra.png");
      } else if (this.type == "papel") {
        this.imageUrl = require("url:./papel.png");
      } else if (this.type == "tijera") {
        this.imageUrl = require("url:./tijera.png");
      }
      this.render();
    }
    render() {
      this.shadow.innerHTML = ` <img class="img" src="" alt="">`
      this.shadow.querySelector(".img")
        ?.setAttribute("src", `${this.imageUrl}`);
     
    }
  }
  customElements.define("imagen-el", ImageComp);
}
export { imagePlayComp };
