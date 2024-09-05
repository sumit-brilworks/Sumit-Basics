const firstName = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const email = document.getElementById("email");

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  if (firstName.value === "") {
    alert("firstName is required");
    return;
  }
  if (lastname.value === "") {
    alert("lastname is required");
    return;
  }
  if (password.value === "") {
    alert("password is required");
    return;
  }
  if (confirmPassword.value === "") {
    alert("confirmPassword is required");
    return;
  }
  if (email.value === "") {
    alert("email is required");
    return;
  }
  if (password.value !== confirmPassword.value) {
    alert("Password and Confirm Password do not matches");
    return;
  }
  confirm("Form is Submitted");
});
