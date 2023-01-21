import { state } from "../../state";

function initPlayPage({ goTo: goTo }) {
  const div = document.createElement("div");
  div.innerHTML = `<div class="play-conteiner">
                  <timer-el class="timer"></timer-el>      
                  <div class="buttons-cont"> 
                    <option-play class="op-piedra" type="piedra"></option-play>  
                    <option-play class="op-papel" type="papel"></option-play>  
                    <option-play class="op-tijera" type="tijera"></option-play>  
                  
                  </div> 
                  <div class="show-play"> 
                      <div class="cpu">  </div> 
                      <div class="user"> </div>   
                 </div>
                  <div class="noPlay-container"> <text-el type="body">Por favor elija una opcion</text-el> <div class="check"><text-el type="body">Ok</text-el></div>  </div>
                </div>`;

  div.querySelector(".op-piedra")?.addEventListener("submitPlay", (e: any) => {
    state.setMyCurrentPlay(e.detail.play);
    state.setCpuCurrentPlay();
  });
  div.querySelector(".op-papel")?.addEventListener("submitPlay", (e: any) => {
    state.setMyCurrentPlay(e.detail.play);
    state.setCpuCurrentPlay();
  });
  div.querySelector(".op-tijera")?.addEventListener("submitPlay", (e: any) => {
    state.setMyCurrentPlay(e.detail.play);
    state.setCpuCurrentPlay();
  });

  div.querySelector(".timer")?.addEventListener("timeout", (e: any) => {
    const huboJugada = state.huboJugada();

    if (huboJugada) {
      div.querySelector(".timer")?.classList.add("desactivar");
      div.querySelector(".buttons-cont")?.classList.add("desactivar");

      const miJugada = state.getState().currentPlay.myPlay;
      const cpuJugada = state.getState().currentPlay.cpuPlay;

      div.querySelector(".cpu").innerHTML = ` <imagen-el type=${cpuJugada}> </imagen-el> `;
      div.querySelector(".user").innerHTML = ` <imagen-el type=${miJugada}> </imagen-el> `;
      div.querySelector(".show-play")?.classList.add("aparecer");
      
      state.calcularResultado()
      console.log(state.getState().currentPlay)
      state.sumarPuntaje(state.getState().currentPlay.result)
      
      setTimeout(() => {
        goTo("/resultados");
      }, 5000);
    } else {
      div.querySelector(".noPlay-container")?.classList.add("active");
      div
        .querySelector(".noPlay-container")
        ?.addEventListener("click", (e: any) => {
          div.querySelector(".check")?.classList.add("expandir");
          setTimeout(() => {
            e.target.classList.remove("active");
            goTo("/letsPlay");
          }, 1500);
        });
    }
  });
  return div;
}

export { initPlayPage };
