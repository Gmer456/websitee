// Wait for the DOM to fully load before running the scroll animation
document.addEventListener('DOMContentLoaded', () => {

    // Function to detect when an element is in the viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
  
    // Select all elements that should fade in
    const fadeElements = document.querySelectorAll('.fade-in');
  
    // Listen for scroll events to trigger the fade-in effect
    window.addEventListener('scroll', () => {
      fadeElements.forEach(element => {
        if (isElementInViewport(element)) {
          element.classList.add('visible');
        }
      });
    });
  
    // Trigger the fade-in effect for elements already in the viewport when the page loads
    fadeElements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('visible');
      }
    });
  });
  