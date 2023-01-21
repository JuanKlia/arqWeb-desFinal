function initBoxResultComp() {
  class ResultBox extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    cpuScore;
    fondoUrl;
    myScore;
    result;
    constructor() {
      super();
    }
    connectedCallback() {
      this.cpuScore = this.getAttribute("cpu");
      this.myScore = this.getAttribute("user");
      this.result = this.getAttribute("result");
      
      this.fondoUrl = require("url:./d538d4eac3e11176bb05c0d52697ecb0.jpg");
      this.render();
    }
    render() {
      const container = document.createElement("div");
      container.classList.add(this.result);
      this.shadow.appendChild(container);
      container.classList.add("container");
      container.innerHTML = `
       <div class="titulo"><text-el type="large">Puntajes</text-el> </div>
      
       <div>
       <ul>
        <li> <text-el type="body">Yo: ${this.myScore}</text-el> </li>
        <li> <text-el type="body">Cpu: ${this.cpuScore}</text-el> </li>
       </ul>
      </div>
       <div class="lapiz"> <img class="img" src="${require("url:./lapiz.png")}" alt=""> </div>
      `;

      const style = document.createElement("style");
      style.innerText = `
      .titulo{
        text-align: center;
      }
      .lapiz{
       
        display: flex;
        justify-content: flex-end;
        
        position: absolute;
        right: 0;
        bottom: 3;
        
      }
      .img{
        width:100px;
      }
    
      .container{
        position: relative;
        background-image: url(${this.fondoUrl});
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
       max-width: 230px;
       
        
        border-radius: 20px;
        box-shadow: 5px 5px 20px;
        padding:5px 60px 30px 60px;
        
      }
      .gane{
        border: solid 10px green;
      }
      .perdi{
        border: solid 10px red;
      }
      .empate{
        border: solid 10px yellow;
      }
      ul {
        padding:0px 30px;
        margin:0;
      }
      li::marker{
        font-size: 40px;
        margin:0px;
        padding:0px;
      }
      

      `;
      this.shadow.appendChild(style);
    }
  }
  customElements.define("result-box", ResultBox);
}

export { initBoxResultComp };
