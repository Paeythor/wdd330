// review.js

const email = localStorage.getItem("mm_logged_in");
const matches = JSON.parse(localStorage.getItem("mm_matches_" + email)) || [];
const currentMatch = matches.find(m => m.status === "scheduled");

document.getElementById("reviewForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const userReview = document.getElementById("userReview").value;
  const reviewKey = `mm_review_${email}_${currentMatch.movie.id}`;
  localStorage.setItem(reviewKey, JSON.stringify({ userReview, submitted: true }));
  document.getElementById("reviewStatus").innerText = "Review submitted and locked until your date submits theirs!";
});

// Reveal logic (fake other user for demo)
function revealReview() {
  const reviewKey = `mm_review_${email}_${currentMatch.movie.id}`;
  const myReview = JSON.parse(localStorage.getItem(reviewKey));
  if (myReview?.submitted) {
    // Demo: instantly "unlock"
    document.getElementById("revealedReview").innerText = myReview.userReview;
  }
}

if (document.getElementById("revealedReview")) revealReview();
