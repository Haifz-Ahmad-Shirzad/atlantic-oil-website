export function renderHeader() {
  return `
    <header class="header">
      <div class="logo">Atlantic Co.</div>

      <nav>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#faq">FAQ</a>
        <a href="contact.html">Contact</a>
      </nav>

      <div class="auth">
        <button>Login</button>
        <button class="primary">Sign Up</button>
      </div>
    </header>
  `;
}
