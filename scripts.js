// Smooth Scrolling for Navigation
document.querySelectorAll('nav ul li a').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Back to Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '↑';
backToTopBtn.id = 'backToTop';
backToTopBtn.style.cssText =
  'position:fixed;bottom:20px;right:20px;display:none;background-color:#333;color:#fff;border:none;border-radius:50%;padding:10px;cursor:pointer;font-size:1.2em;';
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
