// Init Owl Carousel

// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel();
// });

// $(".owl-carousel").owlCarousel({
//   loop: true,
//   autoplay: true,
//   margin: 10,
//   nav: false,
//   responsive: {
//     0: {
//       items: 1,
//     },
//   },
// });

// mobile navigation
const icon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-times-circle");
const mobileNavBG = document.querySelector(".mobile-bg");
const mobileNav = document.querySelector(".mobile-nav");

icon.addEventListener("click", () => {
  mobileNavBG.classList.toggle("display-none");
  mobileNav.classList.remove("slide-out");
  mobileNav.classList.toggle("slide-in");
  icon.classList.toggle("display-none");
});

closeIcon.addEventListener("click", () => {
  setTimeout(() => {
    mobileNavBG.classList.toggle("display-none");
    icon.classList.toggle("display-none");
  }, 500);
  mobileNav.classList.toggle("slide-in");
  mobileNav.classList.toggle("slide-out");
});

// submit contact data
const contactForm = document.querySelector(".contactForm");
const fullName = document.querySelector(".fullName");
const emailAddress = document.querySelector(".emailAddress");
const subject = document.querySelector(".subject");
const message = document.querySelector(".message");
const submit = document.querySelector(".submitForm");
const modal = document.querySelector(".modal-wrap");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  db.collection("contact-form")
    .doc()
    .set({
      fullName: fullName.value,
      email: emailAddress.value,
      subject: subject.value,
      message: message.value,
    })
    .then(() => {
      contactForm.reset();
      modal.classList.toggle("display-none");
    });
});
