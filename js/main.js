import { renderApp } from "./ui.js";
import { loadTheme } from "./theme.js";

document.addEventListener("DOMContentLoaded", () => {
  loadTheme();
  renderApp();
});
