function initResultImgComp() {
  class ResultImg extends HTMLElement {
    shadow = this.attachShadow({mode:"open"})
    texto;
    constructor() {
      super();
    }
    connectedCallback(){
      const resultado = this.getAttribute("result")
      resultado == "gane"? this.texto = "Ganaste" : ""
      resultado == "perdi"? this.texto = "Perdiste" : ""
      resultado == "empate"? this.texto = "Empate" : ""
      this.render()
    }
    render(){
      this.shadow.innerHTML = ` <text-el type="title">${this.texto}</text-el>`
      
    }
  }
  customElements.define("result-img", ResultImg)
}

export { initResultImgComp };
