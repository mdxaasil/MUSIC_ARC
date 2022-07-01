//drop-down
const items = document.querySelectorAll(".faq button");

function togglefaq() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

//form

items.forEach((item) => item.addEventListener("click", togglefaq));

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const feedback = document.getElementById("feedbacks");
// const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const feedbackValue = feedback.value.trim();
  // const password2Value = password2.value.trim();
  let c = 0;
  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
    c++;
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else {
    setSuccessFor(email);
    c++;
  }

  if (feedbackValue === "") {
    setErrorFor(feedback, "Please enter some feedback");
  } else {
    setSuccessFor(feedback);
    c++;
  }
  if (c == 3) {
    alert("Thank you for your feedback !");
    location.reload();
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
