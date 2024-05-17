let navbar = document.querySelector('.header .navbar');
let loginForm = document.querySelector('.login-form');
let loginMessage = document.getElementById('login-message');

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  loginForm.classList.remove('active');
  loginMessage.style.display = 'none';
}

document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
  navbar.classList.remove('active');
  loginMessage.style.display = 'none';
}

document.querySelector('#login-now-btn').onclick = () => {
  // Assuming there's a form submission and validation here
  // For simplicity, we'll directly show the message
  // Replace this with actual form validation and submission logic
  loginMessage.style.display = 'block';
}

window.onscroll = () => {
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
  loginMessage.style.display = 'none';
}

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  grabCursor: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
