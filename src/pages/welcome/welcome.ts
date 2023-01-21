function initWelcomePage({ goTo: goTo }) {
  const div = document.createElement("div");

  div.innerHTML = `
    
    <div class="page-conteiner">
       <text-el type="title">Piedra Papel o Tijera</text-el>
       <button-el class="welcome-button" > <text-el type="body"> Comenzar </text-el> </button-el>
       <img class="imgLogo" src="" alt="" />
       
       </div>
    
    
    `;
  const imageURL = require("url:./logo.svg");
  div.querySelector(".imgLogo")?.setAttribute("src", `${imageURL}`);

  div.querySelector(".welcome-button")?.addEventListener("click", (e) => {
    setTimeout(()=>{goTo("/instrucciones");}, 4600)
    
  });

  return div;
}

export { initWelcomePage };
