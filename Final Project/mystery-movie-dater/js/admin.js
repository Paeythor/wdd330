// admin.js

function setDemoAccount() {
  const demoEmail = "admin@example.com";
  const demoPassword = "password123";
  localStorage.setItem("mm_users", JSON.stringify({ [demoEmail]: { password: demoPassword } }));
  localStorage.setItem("mm_logged_in", demoEmail);
  alert("Demo account set! Email: admin@example.com / password123");
  window.location.href = "dashboard.html";
}

// Optionally trigger for demo via button
document.getElementById("demoBtn")?.addEventListener("click", setDemoAccount);
