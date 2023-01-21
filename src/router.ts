import { initInstructionsPage } from "./pages/instructions/instructions";
import { initPlayPage } from "./pages/play/play";
import { initResultPage } from "./pages/results/results";
import { initWelcomePage } from "./pages/welcome/welcome";

const BASE_PATH = "/arqWeb-desFinal";

function isGithubPages() {
  return location.host.includes("github.io");
}

const routes = [
  { path: /\/welcome/, page: initWelcomePage },
  { path: /\/instrucciones/, page: initInstructionsPage },
  { path: /\/letsPlay/, page: initPlayPage },
  { path: /\/resultados/, page: initResultPage },
];

function initRouter(container) {
  function handleRoute(route: string) {
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;

    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const page = r.page({ goTo: goTo });

        container.firstChild ? container.firstChild.remove() : "";
        container.appendChild(page);
      }
    }
  }

  function goTo(path: string) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }

  if (location.pathname == "/arqWeb-desFinal/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
}

export { initRouter };
