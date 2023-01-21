import { state } from "../../state";

function initResultPage({ goTo: goTo }) {
  const div = document.createElement("div");
  const resultado = state.getState().currentPlay.result;

  const myScore = state.getState().myScore;
  const cpuScore = state.getState().cpuScore;
  div.innerHTML = `
    
    <div class="results-container">
       
       <result-img class="result-title" result=${resultado}> </result-img>
       <result-box class="box-result" result=${resultado} cpu=${cpuScore} user="${myScore}">  </result-box>
       <button-el class="button1-result" >Volver a jugar </button-el>
       <button-el class="button2-result">Resetear puntajes </button-el>
       
       <div class="result-mask"></div>
    </div>
    
    `;

  if (resultado == "gane") {
    div.querySelector(".result-mask")?.classList.add("gane");
  } else if (resultado == "perdi") {
    div.querySelector(".result-mask")?.classList.add("perdi");
  } else {
    div.querySelector(".result-mask")?.classList.add("empate");
  }

  div.querySelector(".button1-result")?.addEventListener("click", (e: any) => {
    state.resetCurrentPlays();
    
    goTo("/letsPlay");
  });
  div.querySelector(".button2-result")?.addEventListener("click", (e: any) => {
    state.resetCurrentPlays();
    state.resetScores();
    goTo("/welcome");
  });
  return div;
}
export { initResultPage };
