function navfun() {
    document.getElementById("menu-bar").classList.toggle("end-0")
    document.body.classList.toggle("overflow_hidden")
    document.getElementById("menu-icon").classList.toggle("cross");
}

setTimeout(() => {
    console.log("Delayed for 3 second.");
    document.getElementById("preloder").classList.add("opacity-0");
    document.getElementById("preloder").classList.add("pointer_event_none");
    document.body.classList.remove("overflow-hidden")
}, 3000);

$('.responsive').slick({
    dots: false,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                // dots: true
            }
        },
        {
            breakpoint: 994,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.myslider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                // dots: true
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});