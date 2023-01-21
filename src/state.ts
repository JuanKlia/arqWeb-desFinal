const state = {
  data: {
    currentPlay: { myPlay: 1, cpuPlay: "", result: "" },
    myScore: 0,
    cpuScore: 0,
    
  },
  listeners: [],
  getState() {
    return this.data;
  },

  setState(newState) {
    this.data = newState;

    for (const callback of this.listeners) {
      callback();
    }

    this.syncLocalStorge();
  },
  suscribe(callback: () => any) {
    this.listeners.push(callback);
  },
  setMyCurrentPlay(play) {
    const state = this.getState();
    state.currentPlay.myPlay = play;
    this.setState(state);
  },
  setCpuCurrentPlay() {
    const random = Math.floor(Math.random() * 3 + 1);
    const state = this.getState();
    if (random == 1) {
      state.currentPlay.cpuPlay = "piedra";
    } else if (random == 2) {
      state.currentPlay.cpuPlay = "papel";
    } else if (random == 3) {
      state.currentPlay.cpuPlay = "tijera";
    }
    this.setState(state);
  },
  huboJugada() {
    const state = this.getState();
    if (state.currentPlay.myPlay == 1) {
      return false;
    } else {
      return true;
    }
  },
  resetCurrentPlays() {
    const state = this.getState();
    state.currentPlay.myPlay = 1;
    state.currentPlay.cpuPlay = "";
    state.currentPlay.result = "";
    this.setState(state);
  },
  resetScores() {
    const state = this.getState();
    state.myScore = 0;
    state.cpuScore = 0;
    this.setState(state);
  },
  calcularResultado() {
    let resultado;
    const state = this.getState();
    const myPlay = state.currentPlay.myPlay;
    const cpuPlay = state.currentPlay.cpuPlay;
    if (myPlay == cpuPlay) {
      resultado = "empate";
    } else {
      switch (myPlay) {
        case "piedra":
          resultado = cpuPlay == "tijera" ? "gane" : "perdi";

          break;
        case "papel":
          resultado = cpuPlay == "piedra" ? "gane" : "perdi";
          break;
        case "tijera":
          resultado = cpuPlay == "papel" ? "gane" : "perdi";
          break;

        default:
          break;
      }
    }
    state.currentPlay.result = resultado;
    this.setState(state);
  },
  sumarPuntaje(resultado) {
    const state = this.getState();
    resultado == "gane" ? (state.myScore = state.myScore + 1) : "";
    resultado == "perdi" ? (state.cpuScore = state.cpuScore + 1) : "";
    this.setState(state);
  },
  syncLocalStorge() {
    const state = this.getState();
    localStorage.setItem("historialGame", JSON.stringify(state));
  },
};
export { state };
