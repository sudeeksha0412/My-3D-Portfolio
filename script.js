function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {

    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const hamburger = document.querySelector(".hamburger-menu");

    // If menu is open and click is outside the hamburger menu
    if (
        menu.classList.contains("open") &&
        !hamburger.contains(event.target)
    ) {
        menu.classList.remove("open");
        icon.classList.remove("open");
    }

});
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
pagination: { clickable: true },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: { delay: 2500 },
  autoplay: { disableOnInteraction: false },
});



const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {

        scrollBtn.classList.remove("hidden");

    } else {

        scrollBtn.classList.add("hidden");

    }

};

function scrollToTop() {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

}

