var mobile_burger = document.getElementById('mobile-menu');
var closebtn = document.getElementById('closebtn');

function openNav() {
    document.getElementById("myNav").style.width = "100%";
    mobile_burger.style.display = "none";
    closebtn.style.display = "block";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    mobile_burger.style.display = "block";
    closebtn.style.display = "none";
}


$(function(){
	$('.slide-wrap').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true,
                    dots: true
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: true
                }
            }
        ]
    });
});