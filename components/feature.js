import { features } from "../data.js";

export function renderFeatures() {
  return `
    <section class="features" id="features">
      ${features
        .map(
          (f) => `
        <div class="card">
          <h3>${f.icon} ${f.title}</h3>
          <p>${f.desc}</p>
        </div>
      `,
        )
        .join("")}
    </section>
  `;
}
