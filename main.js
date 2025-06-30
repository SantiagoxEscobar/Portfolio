document.addEventListener('DOMContentLoaded', function () {
  // BACK TO TOP button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // FORM VALIDATION
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      let isValid = true;

      [name, email, message].forEach(input => {
        input.classList.remove('is-invalid');
      });

      if (name.value.trim() === '') {
        name.classList.add('is-invalid');
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        email.classList.add('is-invalid');
        isValid = false;
      }

      if (message.value.trim() === '') {
        message.classList.add('is-invalid');
        isValid = false;
      }

      if (!isValid) {
        e.preventDefault();
      } else {
        alert('Mensaje enviado con éxito ✅');
      }
    });
  }
});
