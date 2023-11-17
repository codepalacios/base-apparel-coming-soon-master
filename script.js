// Vars
let form = document.getElementById("form");
let emailError = document.getElementById("errorEmail");
let text = document.getElementById("text");
let email = document.getElementById("email");
let validEmail = /^\w+([.\-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

// Events
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validEmail.test(email.value)) {
    form.style.border = "";
    text.innerHTML = "Sent with success";
    text.style.color = "hsl(0, 36%, 70%)";
    emailError.classList.add("hidden");
    text.classList.remove("hidden");
    email.value = "";
  } else {
    form.style.border = "2px solid hsla(0, 92%, 68%, 1)";
    text.innerHTML = "Please provide a valid email";
    text.style.color = "hsl(0, 93%, 68%)";
    emailError.classList.remove("hidden");
    text.classList.remove("hidden");
  }
});

email.addEventListener("click", function () {
  if (text.innerHTML === "Sent with success") {
    text.classList.add("hidden");
  }
});
