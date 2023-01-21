import { initButtonComp } from "./components/button/button";
import { initOptionPlayComp } from "./components/option-play/option";
import { imagePlayComp } from "./components/play-image/play-image";
import { initResultImgComp } from "./components/result-img/resultImg";
import { initBoxResultComp } from "./components/results-box/box";
import { initTextComp } from "./components/text/text";
import { initTimerComp } from "./components/timer/timer";
import { initRouter } from "./router";
import { state } from "./state";

function initComponents() {
  initTextComp();
  initButtonComp();
  initTimerComp();
  initOptionPlayComp();
  initBoxResultComp();
  imagePlayComp();
  initResultImgComp();
}

(function () {
  const stateSaved = localStorage.getItem("historialGame");
  if (stateSaved != null) {
    const estadoRevivido = JSON.parse(stateSaved);
    estadoRevivido.currentPlay.myPlay = 1;
    state.setState(estadoRevivido);
  }
  

  initComponents();
  initRouter(document.querySelector(".root"));
})();
