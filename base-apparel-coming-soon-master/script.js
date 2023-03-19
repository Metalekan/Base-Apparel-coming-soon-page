const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  var emailValue = email.value.trim();
  var pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailValue === "") {
    errorFunc(email, "Please enter a valid email");
  } else if (!emailValue.match(pattern)) {
    errorFunc(email, "Please enter a valid email");
  } else {
    successFunc(email);
  }
});

function errorFunc(req, message) {
  const formControl = req.parentElement;
  const span = formControl.querySelector("span");
  span.innerText = message;
  req.className += "error";
  span.className += "error-text";
  if (req !== email) {
    req.value = " ";
  } else {
    req.style.color = "hsl(0, 100%, 74%)";
  }
}

function successFunc(req) {
  req.className += "success";
}
