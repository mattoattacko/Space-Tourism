// when someone clicks the hamburger button
// if the nav is closed, open it
// if the nav is open, close it

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// when someone clicks the hamburger button
navToggle.addEventListener("click", () => {
    
    const visibility = nav.getAttribute("data-visible");
    // if the nav is closed, open it
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
    } else {
        nav.setAttribute("data-visible", false);
    }
})

// To actually get the menu to open and close, we use CSS