 // Add this JavaScript to your page
 document.addEventListener("DOMContentLoaded", function () {
    // Get the navbar element
    var navbar = document.getElementById("myNavbar");

    // Get all the links inside the navbar
    var navLinks = navbar.querySelectorAll(".nav-link");

    // Add a click event listener to each link
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            // Remove the border class when a link is clicked
            navbar.classList.remove("navbar-no-border");
        });
    });

    // Add a click event listener to the toggler button
    var toggler = navbar.querySelector(".navbar-toggler");
    if (toggler) {
        toggler.addEventListener("click", function () {
            // Add the border class when the toggler is clicked
            navbar.classList.add("navbar-no-border");
        });
    }
});



const bloglink =()=>{
    window.open('https://www.blogger.com/profile/05797361068923120560','_blank')
}