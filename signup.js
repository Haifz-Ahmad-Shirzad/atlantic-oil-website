const form = document.getElementById("signupForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // reset error
  errorMsg.textContent = "";

  // validation 1: password length
  if (password.value.length < 6) {
    errorMsg.textContent = "پاسورډ باید لږ تر لږه ۶ حروف ولري";
    return;
  }

  // validation 2: password match
  if (password.value !== confirmPassword.value) {
    errorMsg.textContent = "پاسورډونه سره یو شان نه دي";
    return;
  }

  // validation 3: success
  alert("ثبت نام کامیاب شو ✅");

  // optional: reset form
  form.reset();
});
