export function renderFAQ() {
  return `
    <section class="faq" id="faq">
      <div class="faq-item">
        <h4 class="question">Is it free?</h4>
        <p class="answer">Yes, basic version is free.</p>
      </div>

      <div class="faq-item">
        <h4 class="question">Is data secure?</h4>
        <p class="answer">Yes, all data is protected.</p>
      </div>
    </section>
  `;
}
export function initFAQ() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
}
