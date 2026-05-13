// ================================
// SIGNUP FORM LOGIC
// ================================

// FORM
const signupForm = document.getElementById("signupForm");

// INPUTS
const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const confirmPasswordInput = document.getElementById("confirmPassword");

// ERROR
const errorMsg = document.getElementById("errorMsg");

// ================================
// SUBMIT EVENT
// ================================
signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  errorMsg.textContent = "";

  const nameValue = nameInput.value.trim();

  const emailValue = emailInput.value.trim();

  const passwordValue = passwordInput.value.trim();

  const confirmValue = confirmPasswordInput.value.trim();

  // ================================
  // EMPTY VALIDATION
  // ================================
  if (!nameValue || !emailValue || !passwordValue || !confirmValue) {
    errorMsg.textContent = "ټول فیلډونه ډک کړئ";

    return;
  }

  // ================================
  // EMAIL VALIDATION
  // ================================
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailValue)) {
    errorMsg.textContent = "صحیح ایمیل داخل کړئ";

    return;
  }

  // ================================
  // PASSWORD LENGTH
  // ================================
  if (passwordValue.length < 6) {
    errorMsg.textContent = "پاسورډ باید لږ تر لږه ۶ حروف ولري";

    return;
  }

  // ================================
  // PASSWORD MATCH
  // ================================
  if (passwordValue !== confirmValue) {
    errorMsg.textContent = "پاسورډونه برابر نه دي";

    return;
  }

  // ================================
  // LOCAL STORAGE USERS
  // ================================
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // ================================
  // DUPLICATE EMAIL CHECK
  // ================================
  const exists = users.find((user) => user.email === emailValue);

  if (exists) {
    errorMsg.textContent = "دا ایمیل مخکې ثبت شوی دی";

    return;
  }

  // ================================
  // CREATE USER
  // ================================
  const newUser = {
    name: nameValue,
    email: emailValue,
    password: passwordValue,
  };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  // SUCCESS
  alert("ثبت نام کامیاب شو ✅");

  signupForm.reset();
});
