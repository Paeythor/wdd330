import { fetchMoviesByGenre } from "./api.js";

// Schedule form listener
document.getElementById("scheduleForm")?.addEventListener("submit", async e => {
  e.preventDefault();

  const date = document.getElementById("movieDate").value;
  const email = localStorage.getItem("mm_logged_in");
  const profile = JSON.parse(localStorage.getItem("mm_profile_" + email));

  if (!profile) {
    alert("Please complete your profile before scheduling a movie date.");
    return;
  }

  const genreId = profile.genres?.[0] || 28;

  // Fetch movies
  const movies = await fetchMoviesByGenre(genreId);
  if (!movies.results || movies.results.length === 0) {
    alert("No movies found for the selected genre.");
    return;
  }

  const movie = movies.results[Math.floor(Math.random() * movies.results.length)];

  // Store match
  const match = { date, movie, status: "scheduled" };
  let matches = JSON.parse(localStorage.getItem("mm_matches_" + email)) || [];
  matches.push(match);
  localStorage.setItem("mm_matches_" + email, JSON.stringify(matches));

  alert(`Scheduled "${movie.title}" for ${date}`);
});

// Compatibility check
function isCompatible(userProfile, candidateProfile) {
  const ageOk =
    candidateProfile.selfAge >= userProfile.matchAgeMin &&
    candidateProfile.selfAge <= userProfile.matchAgeMax &&
    userProfile.selfAge >= candidateProfile.matchAgeMin &&
    userProfile.selfAge <= candidateProfile.matchAgeMax;

  const genderOk =
    (userProfile.matchGender === "any" || candidateProfile.selfGender === userProfile.matchGender) &&
    (candidateProfile.matchGender === "any" || userProfile.selfGender === candidateProfile.matchGender);

  return ageOk && genderOk;
}
