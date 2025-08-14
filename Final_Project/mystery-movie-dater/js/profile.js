// profile.js

// Populate ages
function populateAges(selectElem) {
  for (let i = 18; i <= 50; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = i;
    selectElem.appendChild(opt);
  }
}

if (document.getElementById('selfAge')) {
  populateAges(document.getElementById('selfAge'));
  populateAges(document.getElementById('matchAgeMin'));
  populateAges(document.getElementById('matchAgeMax'));
}

// Demo genres
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

document.getElementById("profileForm")?.addEventListener("submit", e => {
  e.preventDefault();

  // Get base login email (or use entered email if new)
  let loginEmail = localStorage.getItem("mm_logged_in");
  const enteredEmail = document.getElementById("email").value.trim();

  if (!loginEmail) {
    loginEmail = enteredEmail; // new signup
    localStorage.setItem("mm_logged_in", loginEmail);
  }

  // Read all fields
  const profile = {
    fullName: document.getElementById("fullName").value.trim(),
    email: enteredEmail,
    selfHeight: parseInt(document.getElementById("selfHeight").value, 10),
    matchHeightMin: parseInt(document.getElementById("matchHeightMin").value, 10),
    matchHeightMax: parseInt(document.getElementById("matchHeightMax").value, 10),
    selfAge: parseInt(document.getElementById("selfAge").value, 10),
    matchAgeMin: parseInt(document.getElementById("matchAgeMin").value, 10),
    matchAgeMax: parseInt(document.getElementById("matchAgeMax").value, 10),
    selfGender: document.getElementById("selfGender").value,
    matchGender: document.getElementById("matchGender").value,
    genres: Array.from(document.getElementById("genres").selectedOptions).map(opt => opt.value),
    availability: document.getElementById("availability").value.trim(),
    location: document.getElementById("location").value.trim()
  };

  // Validations
  if (profile.matchAgeMin > profile.matchAgeMax) {
    alert("Minimum preferred age cannot be greater than maximum.");
    return;
  }
  if (profile.matchHeightMin > profile.matchHeightMax) {
    alert("Minimum preferred height cannot be greater than maximum.");
    return;
  }

  // Save
  localStorage.setItem("mm_profile_" + loginEmail, JSON.stringify(profile));
  window.location.href = "dashboard.html";
});
