document.getElementById("formLogin").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const validUsername = "farhan";
  const validPassword = "1234";

  if (username === validUsername && password === validPassword) {
    localStorage.setItem("authenticated", "true");
    localStorage.setItem("username", username);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
});
