// profile.js

// Populate ages 18 to 50
function populateAges(selectElem) {
  for (let i = 18; i <= 50; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = i;
    selectElem.appendChild(opt);
  }
}

// Run population if selects exist
if (document.getElementById('selfAge')) {
  populateAges(document.getElementById('selfAge'));
  populateAges(document.getElementById('matchAgeMin'));
  populateAges(document.getElementById('matchAgeMax'));
}

// Populate genres (demo list)
const genresList = [
  { id: 28, name: "Action" },
  { id: 35, name: "Comedy" },
  { id: 18, name: "Drama" },
  { id: 10749, name: "Romance" },
  { id: 27, name: "Horror" },
  { id: 878, name: "Sci-Fi" }
];
if (document.getElementById('genres')) {
  document.getElementById('genres').innerHTML =
    genresList.map(g => `<option value="${g.id}">${g.name}</option>`).join('');
}

// Handle form submit
document.getElementById("profileForm")?.addEventListener("submit", e => {
  e.preventDefault();

  const email = localStorage.getItem("mm_logged_in");
  if (!email) {
    alert("Not logged in");
    return;
  }

  const selfAge = parseInt(document.getElementById("selfAge").value);
  const matchAgeMin = parseInt(document.getElementById("matchAgeMin").value);
  const matchAgeMax = parseInt(document.getElementById("matchAgeMax").value);
  const selfGender = document.getElementById("selfGender").value;
  const matchGender = document.getElementById("matchGender").value;
  const genres = Array.from(document.getElementById("genres").selectedOptions).map(opt => opt.value);
  const availability = document.getElementById("availability").value;
  const location = document.getElementById("location").value;

  if (matchAgeMin > matchAgeMax) {
    alert("Minimum preferred age cannot be greater than maximum.");
    return;
  }

  const profile = {
    selfAge,
    matchAgeMin,
    matchAgeMax,
    selfGender,
    matchGender,
    genres,
    availability,
    location
  };

  localStorage.setItem("mm_profile_" + email, JSON.stringify(profile));
  window.location.href = "dashboard.html";
});
