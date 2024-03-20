function closeNavbar() {
    // Close the navbar by toggling the 'show' class
    var navbar = document.getElementById('navbarNav');
    navbar.classList.remove('show');
}

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("myNavbar");
    var navLinks = navbar.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            // Close the navbar when a link is clicked
            closeNavbar();
        });
    });

    // Close the navbar when clicking anywhere outside it
    document.addEventListener("click", function (event) {
        var target = event.target;
        if (!target.closest("#myNavbar")) {
            closeNavbar();
        }
    });
});

const link =(value)=>{
window.open(value,'_blank')
}

const bloglink =()=>{
    window.open('https://www.blogger.com/profile/05797361068923120560','_blank')
}