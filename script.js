var typed = new Typed("#element", {
  strings: [
    "Jr. Web Developer",
    "",
    "Jr. Web Designer",
    "",
    "Jr. App Developer",
    "",
    "Jr. App Designer",
    "",
    "Jr. Web Developer",
    "",
    "Jr. Web Designer",
    "",
    "Jr. App Developer",
    "",
    "Jr. App Designer",
    "",
    "Jr. Web Developer",
    "",
    "Jr. Web Designer",
    "",
    "Jr. App Developer",
    "",
    "Jr. App Designer",
    "",
    "Jr. Web Developer",
    "",
    "Jr. Web Designer",
    "",
    "Jr. App Developer",
    "",
    "Jr. App Designer",
    "",
    "Jr. Web Developer",
    "",
    "Jr. Web Designer",
    "",
    "Jr. App Developer",
    "",
    "Jr. App Designer",
    "",
    "Jr. Web Developer",
  ],
  typeSpeed: 69,
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


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetElement = document.querySelector(this.getAttribute('href'));

      if (targetElement) {
          const duration = 1500; // Time in ms (1.5 seconds for slower scroll)
          let startTime = null;

          const smoothScroll = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const elapsed = timestamp - startTime;

              const progress = Math.min(elapsed / duration, 1); // Normalized progress
              const easeInProgress = Math.pow(progress, 3); // Cubic ease-in formula

              const start = window.scrollY;
              const distance = targetElement.offsetTop - start;

              window.scrollTo(0, start + distance * easeInProgress);

              if (progress < 1) {
                  requestAnimationFrame(smoothScroll);
              }
          };

          requestAnimationFrame(smoothScroll);
      }
  });
});


// Get the navbar element
const navbar = document.querySelector('nav');

// Function to add/remove the "nav-scrolled" class based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('nav-scrolled');
  } else {
    navbar.classList.remove('nav-scrolled');
  }
});



// Select all fade sections
const fadeSections = document.querySelectorAll('.fade-section');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Find all child fade items in the intersecting section
      const fadeItems = entry.target.querySelectorAll('.fade-item');
      
      // Apply staggered animation to each fade item
      fadeItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('visible');
        }, index * 250); // 200ms delay for each item
      });

      // Optional: Stop observing this section after animating
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.6, // Trigger when 30% of the section is visible
});

// Observe all fade sections
fadeSections.forEach((section) => observer.observe(section));
