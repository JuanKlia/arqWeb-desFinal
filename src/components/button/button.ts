function initButtonComp() {
  class ButtonComp extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });

    constructor() {
      super();
      this.render();
    }
    connectedCallback() {}
    render() {
      const buttonEl = document.createElement("button");
      buttonEl.innerHTML = ` <div class="mask1"></div> <div class="mask2"></div> <div class="mask3"></div>`;
      buttonEl.classList.add("boton");
      this.shadow.appendChild(buttonEl);

      const textoEl = document.createElement("text-el");
      textoEl.setAttribute("type", "body");
      textoEl.textContent = this.textContent;
      buttonEl.appendChild(textoEl);

      const style = document.createElement("style");

      style.innerText = `
      * {
      box-sizing: border-box;
      outline: none;
    }
      .boton {
          position:relative;
          background-color: transparent;
          height: 55px;
          max-width: 450px;
          width: 100%;
          outline: none;
          padding: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
       
        .boton:hover {
  animation: border .5s forwards;
}
@keyframes border {
  0% {

  }
  100% {
    border: 3px solid;
    border-radius: 10px;
    box-shadow: 5px 5px 25px;
  }
}

      .mask1{
        position:absolute;
        height:24.3px;
       
        top:0;
        left:0;
        
      
        background-color: coral;
        opacity: .5;
        
      }
    
       .mask2{
        position:absolute;
        height:24.6px;

        top:24.4px; 
        right: 0;
         
        bottom: 24.4;
        
        background-color: coral;
        opacity: .5;
        
        
        
      }

     .mask3{
      
        position:absolute;
        height:21px;
       
        bottom: 0;
        left:0;
        
        background-color: coral;
        opacity: .5;
       }
    
      .boton:focus .mask1{
        animation: estirarU 1.5s forwards;
        animation-timing-function: ease-in;
      }
      @keyframes estirarU{
        from{ width: 0%}
        to{ width: 100%}
      }
      .boton:focus .mask2{
        animation: estirard 1.5s forwards;
        animation-timing-function: ease-in;
        animation-delay: 1.5s ;
      }
      @keyframes estirard{
        from{ width: 0%}
        to{ width: 100%}
      }
      .boton:focus .mask3{
        animation: estirart 1.5s forwards;
        animation-delay: 3s ;
        animation-timing-function: ease-in;
      }
      @keyframes estirart {
        from{ width: 0%}
        to{ width: 100%}
      }

    
        
        
        `;

      this.shadow.appendChild(style);
    }
  }
  customElements.define("button-el", ButtonComp);
}
export { initButtonComp };
