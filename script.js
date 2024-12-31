var typed = new Typed("#element", {
  strings: [
    "Jr. Web Developer",
    "",
    "Jr. Web Designer",
    "",
    "Jr. App Developer",
    "",
    "Jr. App Disigner",
    "",
    "Jr. Web Developer",
    "",
    "Jr. Web Designer",
    "",
    "Jr. App Developer",
    "",
    "Jr. App Disigner",
    "",
    "Jr. Web Developer",
    "",
    "Jr. Web Designer",
    "",
    "Jr. App Developer",
    "",
    "Jr. App Disigner",
    "",
    "Jr. Web Developer",
    "",
    "Jr. Web Designer",
    "",
    "Jr. App Developer",
    "",
    "Jr. App Disigner",
    "",
    "Jr. Web Developer",
    "",
    "Jr. Web Designer",
    "",
    "Jr. App Developer",
    "",
    "Jr. App Disigner",
    "",
    "Jr. Web Developer",
  ],
  typeSpeed: 50,
});

// Toggle Read More functionality
function toggleReadMore(postNumber) {
    // Show full text and hide the "Read More" link
    document.getElementById('full' + postNumber).style.display = 'block';  // Show full text
    document.getElementById('readLess' + postNumber).style.display = 'inline-block';  // Show Read Less
    document.getElementById('excerpt' + postNumber).style.display = 'none';  // Hide the excerpt
    document.getElementById('readMore' + postNumber).style.display = 'none';  // Hide the Read More button
}

// Toggle Read Less functionality
function toggleReadLess(postNumber) {
    // Hide full text and show the "Read More" link
    document.getElementById('full' + postNumber).style.display = 'none';  // Hide full text
    document.getElementById('readLess' + postNumber).style.display = 'none';  // Hide the Read Less button
    document.getElementById('excerpt' + postNumber).style.display = 'block';  // Show the excerpt
    document.getElementById('readMore' + postNumber).style.display = 'inline-block';  // Show the Read More button
}

// JavaScript for automatic sliding effect
let currentIndex = 0;
const reviews = document.querySelectorAll('.review-item');
const totalReviews = reviews.length;

function showReview(index) {
  if (index >= totalReviews) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalReviews - 1;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * 100;
  reviews.forEach(review => {
    review.style.transform = `translateX(${offset}%)`;
  });
}

// Initialize the first review
showReview(currentIndex);

// Set interval for automatic sliding every 5 seconds
const interval = setInterval(() => {
  showReview(currentIndex + 1);
}, 5000);

// Clear interval on user interaction
document.querySelector('.reviews-slider').addEventListener('mouseenter', () => {
  clearInterval(interval);
});

document.querySelector('.reviews-slider').addEventListener('mouseleave', () => {
  setInterval(() => {
    showReview(currentIndex + 1);
  }, 5000);
});