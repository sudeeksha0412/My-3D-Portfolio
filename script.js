function toggleMenu() {
    
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamerburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    
}
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

