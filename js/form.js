export function validateForm(name, email, message) {
  const errors = {};

  if (!name || name.trim().length < 3) {
    errors.name = "Name must be at least 3 characters";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = "Invalid email format";
  }

  if (!message || message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return Object.keys(errors).length ? errors : null;
}
