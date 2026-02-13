// Scroll-triggered animations using Intersection Observer
export function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-in');
        // Optionally unobserve after animation to improve performance
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements that should animate on scroll
  const animatedElements = document.querySelectorAll(`
    .about-visual,
    .about-content,
    .about-text,
    .about-button,
    .section-header,
    .event-card,
    .details-container,
    .fee-banner,
    .key-message,
    .info-item,
    .faq-header,
    .timeline-item
  `);

  animatedElements.forEach(el => observer.observe(el));

  // Return cleanup function
  return () => {
    animatedElements.forEach(el => observer.unobserve(el));
  };
}
