// auth.js

// Fake user store for demo
const usersKey = "mm_users";

function getUsers() {
  return JSON.parse(localStorage.getItem(usersKey)) || {};
}

function saveUser(email, password) {
  const users = getUsers();
  users[email] = { password };
  localStorage.setItem(usersKey, JSON.stringify(users));
}

function login(email, password) {
  const users = getUsers();
  if (users[email] && users[email].password === password) {
    localStorage.setItem("mm_logged_in", email);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials!");
  }
}

document.getElementById("loginForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  login(email, password);
});
