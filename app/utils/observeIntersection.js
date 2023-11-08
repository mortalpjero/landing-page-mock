export const observeIntersection = (elementId, callback) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      callback(entry.isIntersecting);
    });
  }, {
    rootMargin: '0px 0px 10px 0px',
    threshold: 0.1,
  });

  const element = document.querySelector(elementId);

  if (element) {
    observer.observe(element);
  }

  return () => {
    if (element) {
      observer.unobserve(element);
    }
  }
}
