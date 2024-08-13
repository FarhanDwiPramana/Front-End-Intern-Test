if (localStorage.getItem("authenticated") !== "true") {
  window.location.href = "index.html";
}

document.getElementById("usernameDisplay").textContent =
  localStorage.getItem("username");

document.getElementById("userMenuButton").addEventListener("click", () => {
  const menu = document.getElementById("userMenu");
  menu.classList.toggle("hidden");
});

document.getElementById("logoutButton").addEventListener("click", () => {
  localStorage.removeItem("authenticated");
  localStorage.removeItem("username");
  window.location.href = "index.html";
});

document.getElementById("settingButton").addEventListener("click", () => {
  window.location.href = "setting.html";
});

document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("searchSongs");
  var storedValue = localStorage.getItem("searchValue");

  if (storedValue) {
    input.value = storedValue;
    searchTableSong();
  }

  input.addEventListener("keyup", function () {
    localStorage.setItem("searchValue", input.value);
    searchTableSong();
  });
});

function searchTableSong() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchSongs");
  filter = input.value.toLowerCase();
  table = document.getElementById("songTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
