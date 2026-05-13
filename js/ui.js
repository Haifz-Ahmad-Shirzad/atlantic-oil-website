import { renderHeader } from "./components/header.js";
import { renderHero } from "./components/hero.js";
import { renderFeatures } from "./components/features.js";
import { renderFAQ } from "./components/faq.js";
import { renderFooter } from "./components/footer.js";

export function renderApp() {
  const app = document.getElementById("app");

  app.innerHTML = `
    ${renderHeader()}
    ${renderHero()}
    ${renderFeatures()}
    ${renderFAQ()}
    ${renderFooter()}
  `;
}
