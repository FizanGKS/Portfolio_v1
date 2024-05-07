// script.js

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');

  // Function to smoothly scroll to a section
  const scrollToSection = (target) => {
      target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  };

  // Function to handle scrolling with the mouse wheel
  const handleScroll = (e) => {
      e.preventDefault();
      const delta = e.deltaY || -e.detail;
      let currentIndex = -1;

      // Find the index of the currently active section
      sections.forEach((section, index) => {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
              currentIndex = index;
          }
      });

      // Scroll to the next or previous section based on mouse wheel direction
      if (delta < 0 && currentIndex > 0) {
          scrollToSection(sections[currentIndex - 1]);
      } else if (delta > 0 && currentIndex < sections.length - 1) {
          scrollToSection(sections[currentIndex + 1]);
      }
  };

  // Add event listener for mouse wheel scroll
  document.addEventListener('wheel', handleScroll, { passive: false });

  // Add click event listener for navigation links
  navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);
          scrollToSection(targetSection);
      });
  });
});

