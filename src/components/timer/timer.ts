function initTimerComp() {
  class TimerComp extends HTMLElement {
    shadow = this.attachShadow({ mode: "open" });
    constructor() {
      super();
      this.render();
    }
    render() {
      var counter = 3;
      const container = document.createElement("div");
      container.classList.add("container");
      this.shadow.appendChild(container);

      const text = document.createElement("h3");

      this.shadow.querySelector(".container")?.appendChild(text);

      const intervalId = setInterval(() => {
        text.textContent = `${counter}`;
        counter = counter - 1;
        if (counter < 0) {
          clearInterval(intervalId);
          const event = new CustomEvent("timeout", {
            detail: { nombre: "Juan" },
          });
          this.dispatchEvent(event);
        }
      }, 1000);

      const style = document.createElement("style");
      this.shadow.appendChild(style);
      style.innerText = `
      
      
      .container {
        height: 200px;
        width: 200px;
        border-radius: 50%;
        font-size: 30px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
       
        animation: reloj 1s forwards;;
        animation-iteration-count: 5 ;
        animation-timing-function: linear;
        animation-delay: 1s;
      }
      .container h3 {
        margin: 0;
        animation: escala 1s linear infinite;
        animation-iteration-count: 6 ;
        font-family: 'Shadows Into Light', cursive;
        font-size: 90px;
        font-weight: 700;
      }
      @keyframes escala {
        0% {
          scale: 1;
        }
        25% {
          scale: 1.5;
        }
        50% {
          scale: 1;
        }
        75% {
          scale: 0.5;
        }
      }
      
      @keyframes reloj {
        0% {
          
          border-top: black solid 3px;
          border-left: black solid 3px;
          border-bottom: black solid 3px;
          border-right: black solid 3px;
          box-shadow: 5px 5px 5px;
        }
        25% {
          border-top: coral solid 3px;
          border-left: black solid 3px;
          border-bottom: black solid 3px;
          border-right: black solid 3px;
          box-shadow: none;
        }
        50% {
          border-top: coral solid 3px;
          border-left: coral solid 3px;
          border-bottom: black solid 3px;
          border-right: black solid 3px;
          box-shadow: 5px 5px 5px;
        }
        75% {
          border-top: coral solid 3px;
          border-left: coral solid 3px;
          border-bottom: coral solid 3px;
          border-right: black solid 3px;
          box-shadow: none;
        }
        100% {
          border-top: coral solid 3px;
          border-left: coral solid 3px;
          border-bottom: coral solid 3px;
          border-right: coral solid 3px;
          box-shadow: 5px 5px 5px;
        }
      }
      
      `;
    }
  }
  customElements.define("timer-el", TimerComp);
}
export { initTimerComp };
