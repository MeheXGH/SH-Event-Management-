const mSlid = document.querySelector(".menu-slid-con");
const siClose = document.querySelector(".si-close");

function openSlide() {
    mSlid.style.right = "0"; // Set right to 0 to show the menu
    // siClose.style.opacity = "1"; // Show the close icon

    console.log("hii")
}

function closeSlide() {
    mSlid.style.right = "-100vw"; // Hide the menu offscreen (or use -100% for full width)
    // siClose.style.opacity = "0"; // Hide the close icon

    console.log("h000la")
}

