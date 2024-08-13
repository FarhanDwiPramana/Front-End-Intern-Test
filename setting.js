document.getElementById("formEdit").addEventListener("submit", function (e) {
  e.preventDefault();

  const newUsername = document.getElementById("editUsername").value;
  const newPassword = document.getElementById("editPassword").value;

  if (newUsername && newPassword) {
    localStorage.setItem("username", newUsername);
    localStorage.setItem("password", newPassword);

    window.location.href = "dashboard.html";
  } else {
    alert("Please fill out both fields.");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const currentUsername = localStorage.getItem("username");
  if (currentUsername) {
    document.getElementById("editUsername").value = currentUsername;
  }
});
