const loginForm = document.getElementById("loginForm");
const adminForm = document.getElementById("adminForm");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const absen = document.getElementById("absen").value;

  localStorage.setItem("role", "siswa");
  localStorage.setItem("nama", nama);
  localStorage.setItem("absen", absen);

  window.location.href = "dashboard.html";
});

function showAdmin() {
  adminForm.classList.toggle("hidden");
}

function loginAdmin() {
  const user = document.getElementById("adminUser").value;
  const pass = document.getElementById("adminPass").value;

  if (user === "admin" && pass === "quartrix") {
    localStorage.setItem("role", "admin");
    localStorage.setItem("nama", "Admin");
    window.location.href = "dashboard.html";
  } else {
    alert("Username atau password salah");
  }
}
