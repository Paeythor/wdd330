// profile.js

document.getElementById("profileForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const email = localStorage.getItem("mm_logged_in");
  if (!email) return alert("Not logged in");
  const genres = Array.from(document.getElementById("genres").selectedOptions).map(opt => opt.value);
  const availability = document.getElementById("availability").value;
  const ageRange = document.getElementById("ageRange").value;
  const location = document.getElementById("location").value;
  const profile = { genres, availability, ageRange, location };
  localStorage.setItem("mm_profile_" + email, JSON.stringify(profile));
  window.location.href = "dashboard.html";
});

// Populate genres (demo list)
const genresList = [
  {id:28, name: "Action"}, {id:35, name:"Comedy"}, {id:18, name:"Drama"},
  {id:10749, name:"Romance"}, {id:27, name:"Horror"}, {id:878, name:"Sci-Fi"}
];
if (document.getElementById('genres')) {
  document.getElementById('genres').innerHTML = genresList.map(g => `<option value="${g.id}">${g.name}</option>`).join('');
}
