// ================================
// LOGIN FORM VALIDATION
// ================================

// FORM
const loginForm = document.getElementById("loginForm");

// INPUTS
const loginEmail = document.getElementById("loginEmail");

const loginPassword = document.getElementById("loginPassword");

const rememberMe = document.getElementById("rememberMe");

// ERROR MESSAGE
const loginError = document.getElementById("loginError");

// ================================
// LOGIN EVENT
// ================================
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // RESET ERROR
  loginError.textContent = "";

  // GET VALUES
  const emailValue = loginEmail.value.trim();

  const passwordValue = loginPassword.value.trim();

  // ================================
  // EMPTY VALIDATION
  // ================================
  if (emailValue === "" || passwordValue === "") {
    loginError.textContent = "ټول معلومات داخل کړئ";

    return;
  }

  // ================================
  // EMAIL VALIDATION
  // ================================
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailValue)) {
    loginError.textContent = "صحیح ایمیل داخل کړئ";

    return;
  }

  // ================================
  // GET USERS FROM LOCAL STORAGE
  // ================================
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // ================================
  // CHECK USER
  // ================================
  const foundUser = users.find(
    (user) => user.email === emailValue && user.password === passwordValue,
  );

  // ================================
  // INVALID USER
  // ================================
  if (!foundUser) {
    loginError.textContent = "ایمیل یا پاسورډ ناسم دی";

    return;
  }

  // ================================
  // REMEMBER USER
  // ================================
  if (rememberMe.checked) {
    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
  }

  // ================================
  // SUCCESS
  // ================================
  alert("په بریالیتوب سره داخل شوئ ✅");

  // RESET FORM
  loginForm.reset();

  // OPTIONAL REDIRECT
  // window.location.href = "index.html";
});
