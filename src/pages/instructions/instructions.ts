function initInstructionsPage({ goTo: goTo }) {
  const div = document.createElement("div");

  div.innerHTML = `
      
      <div class="page-conteiner">
         <text-el type="large">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</text-el>
         <button-el class="instruccion-button" > <text-el type="body"> Jugar! </text-el> </button-el>
         <img class="imgLogo" src="" alt="" />
         
         </div>
      
      
      `;
  const imageURL = require("url:./logo.svg");
  div.querySelector(".imgLogo")?.setAttribute("src", `${imageURL}`);

  div.querySelector(".instruccion-button")?.addEventListener("click", (e) => {
    setTimeout(()=>{goTo("/letsPlay");}, 4600)
    
  });

  return div;
}

export { initInstructionsPage };
