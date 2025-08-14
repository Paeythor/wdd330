// dashboard.js

const email = localStorage.getItem("mm_logged_in");
let matches = JSON.parse(localStorage.getItem("mm_matches_" + email)) || [];

const upcomingElem = document.getElementById("upcomingDates");
const historyElem = document.getElementById("history");

function renderDashboard() {
  const now = new Date().toISOString();
  const upcoming = matches.filter(m => m.date > now);
  const history = matches.filter(m => m.date <= now);
  
  upcomingElem.innerHTML = `<h2>Upcoming</h2>` + upcoming.map(m =>
    `<div><strong>${m.movie.title}</strong> on ${m.date}</div>`
  ).join('');
  historyElem.innerHTML = `<h2>History</h2>` + history.map(m =>
    `<div>${m.movie.title} (${m.date})</div>`
  ).join('');
}

if (upcomingElem && historyElem) renderDashboard();
