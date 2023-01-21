function initOptionPlayComp() {
  class OptionComp extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    type;
    urlImg;
    constructor() {
      super();
    }
    connectedCallback() {
      this.type = this.getAttribute("type");

      if (this.type == "piedra") {
        this.urlImg = require("url:./tinywow_piedta_11879572.svg");
      } else if (this.type == "papel") {
        this.urlImg = require("url:./tinywow_mano_11879564.svg");
      } else if (this.type == "tijera") {
        this.urlImg = require("url:./tinywow_jugar tijera_11814927.svg");
      }
      this.addEventListener("click", (e) => {
        const event = new CustomEvent("submitPlay", {
          detail: { play: this.type },
        });
        this.dispatchEvent(event);
      });

      this.render();
    }
    render() {
      this.shadow.innerHTML = `    <div class="container" tabindex="0"> <div class="mask"> </div> <img class="img" src="" alt="">  </div>`;

      this.shadow.querySelector(".img")?.setAttribute("src", `${this.urlImg}`);
      this.shadow.querySelector(".mask")?.classList.add(this.type);

      const style = document.createElement("style");
      this.shadow.appendChild(style);
      style.innerText = `
      *{
        outline: none;
      }
      .container{
        height: 60px;
        width: 60px;
        display:flex;
        border: solid;
        border-radius: 50%;
        cursor: pointer;
        padding: 15px;
        position: relative;
        outline: none;
      }
      .mask{
        position: absolute;
        
        border-radius:50%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: .5;
        scale:0;
        
      }
      .container:hover .mask{
        scale:0;
        animation: aparecer 1.5s forwards;
      }
      @keyframes aparecer{
        from{scale:0}
        to{scale:1}
      }
      .piedra{background-color: #fbd165;}
      .papel{background-color: #f4b0bf;}
      .tijera{background-color:#a9cc8a;}
     
      @media(min-width:600px){
  
        .container:focus{
         animation: contraer 1s forwards ;
        }
       @keyframes contraer{
         0%{ scale:1}
         50%{scale:1.5}
         100%{scale:1}
         
       }
      }
      `;
    }
  }
  customElements.define("option-play", OptionComp);
}
export { initOptionPlayComp };
