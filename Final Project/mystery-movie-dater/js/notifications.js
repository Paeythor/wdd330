// notifications.js

const email = localStorage.getItem("mm_logged_in");
let matches = JSON.parse(localStorage.getItem("mm_matches_" + email)) || [];

function checkNotifications() {
  const now = new Date().toISOString();
  matches.forEach(m => {
    if (new Date(m.date).toISOString() > now && !m.notified) {
      alert(`Reminder: You have a Mystery Movie Date for "${m.movie.title}" soon.`);
      m.notified = true;
    }
  });
  localStorage.setItem("mm_matches_" + email, JSON.stringify(matches));
}

setInterval(checkNotifications, 60 * 1000); // Checks every minute
