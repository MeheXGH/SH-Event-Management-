const mSlid = document.querySelector(".menu-slid-con");
const siClose = document.querySelector(".si-close");

function openSlide() {
    mSlid.style.right = "0"; // Set right to 0 to show the menu
    document.body.style.overflow = "hidden"; 
    // siClose.style.opacity = "1"; // Show the close icon

    // console.log("hii")
}

function closeSlide() {
    mSlid.style.right = "-100vw"; // Hide the menu offscreen (or use -100% for full width)
    document.body.style.overflow = "auto";
    // siClose.style.opacity = "0"; // Hide the close icon

    // console.log("h000la")
}










function openSlider(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add('active');

  // Initialize Swiper for the specific modal
  new Swiper(`#${modalId} .swiper-container`, {
    navigation: {
      nextEl: `#${modalId} .swiper-button-next`,
      prevEl: `#${modalId} .swiper-button-prev`,
    },
    loop: true, // Enable looping
    spaceBetween: 10, // Add some spacing between slides
  });
}

function closeSlider(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('active');
}
