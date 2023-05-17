// navbar menu
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar-expand-lg').addClass("sticky");
        } else {
            $('.navbar-expand-lg').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('#arrow-down').addClass("show");
        } else {
            $('#arrow-down').removeClass("show");
        }
    });

    // slide up scroll
    $('#arrow-down').click(function () {
        $('html').animate({
            scrollTop: 0
        });

    });

    // animation
    $('[data-aos]').parent().addClass('all-animate');

    // client js
    $(".client-list").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        },
    });
});
