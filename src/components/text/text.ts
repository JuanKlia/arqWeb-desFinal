type TextType = "title" | "large" | "body";

function initTextComp() {
  class Textcomp extends HTMLElement {
    tipo;
    tag;
    shadow = this.attachShadow({ mode: "open" });
    text;
    constructor() {
      super();
    }
    connectedCallback() {
      this.text = this.textContent;
      this.tipo = this.getAttribute("type");

      if (this.tipo == "title") {
        this.tag = "h1";
      } else if (this.tipo == "large") {
        this.tag = "p";
      } else {
        this.tag = "span";
      }

      this.render();
    }
    render() {
      const tagEl = document.createElement(`${this.tag}`);
      tagEl.textContent = this.text;
      tagEl.classList.add(`${this.tipo}`);
      this.shadow.appendChild(tagEl);

      const style = document.createElement("style");

      style.innerText = `
      
      .title{
        font-family: 'Pacifico', cursive;
        font-size: 70px;
        margin: 0 ;
        line-height: 110px;
      }

      @media(max-width:312px){
        .title{
          font-size: 50px;
          line-height: 80px;
        }
      }
     
      .large{
        font-family: 'Dancing Script', cursive;
        font-size: 40px;
        margin:0px;
        
        
        
      }
      @keyframes colores {
        0% {text-decoration:underline 3px red;}
        33%{text-decoration:underline 3px yellow;}

        66%{text-decoration: underline 3px blue;}
        100% {text-decoration: underline 3px red;}
      }
      
      .body{
        font-family: 'Shadows Into Light', cursive;
        font-size: 30px;
        font-weight: 500;
      }
      
      `;
      this.shadow.appendChild(style);
    }
  }
  customElements.define("text-el", Textcomp);
}
export { initTextComp };
