// Array to hold all reviews
const reviews=window.reviewData;

// Function to render all reviews on the page
function renderReviews() {
  const reviewsContainer = document.querySelector("#reviews-container");
  reviewsContainer.innerHTML = "";

  // Generate review cards for each review in the reviews array
  for (const review of reviews) {
    const card = generateReviewCard(review);
    reviewsContainer.appendChild(card);
  }
}

// Function to generate a single review card
function generateReviewCard(review) {
  // Create elements for the review card
  var card = document.createElement("div");
  card.className = "card";

  var name = document.createElement("h2");
  name.textContent = review.name;

  var date = document.createElement("p");
  date.className = "date";
  date.textContent = review.date.toDateString();

  var rating = document.createElement("div");
  rating.className = "rating";
  for (var i = 0; i < review.rating; i++) {
    var star = document.createElement("span");
    star.textContent = "★";
    rating.appendChild(star);
  }
  for (var i = review.rating; i < 5; i++) {
    var stars = document.createElement("span");
    stars.textContent = "☆";
    rating.appendChild(stars);
  }

  var reviewText = document.createElement("p");
  reviewText.textContent = review.review;

  // Add elements to the card
  card.appendChild(name);
  card.appendChild(date);
  card.appendChild(rating);
  card.appendChild(reviewText);

  return card;
}

// Function to add a new review
function addReview(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values from the form
  var nameInput = document.getElementById("name");
  var dateInput = document.getElementById("date");
  var ratingInput = document.getElementById("rating");
  var reviewInput = document.getElementById("review");

  // Create a new review object with the form values
  var review = {
    name: nameInput.value,
    date: new Date(dateInput.value),
    rating: ratingInput.value,
    review: reviewInput.value,
  };

  // Add the review to the reviews array
  reviews.push(review);

  // Render all reviews on the page
  renderReviews();

  // Reset the form inputs
  nameInput.value = "";
  dateInput.value = "";
  ratingInput.value = "";
  reviewInput.value = "";
}

// Render all reviews on the page when the page loads
window.onload = function () {
  renderReviews();
};

// Add event listener for form submission
var form = document.getElementById("review-form");
form.addEventListener("submit", addReview);
