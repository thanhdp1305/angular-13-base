$(document).ready(function () {
    $('.img-title').click(function () {
        alert('click here')
    });
    
    $('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:true,
    prevArrow:'<button type="button" class="slick-prev"></button>',
    nextArrow:'<button type="button" class="slick-next"></button>',
    dots: false,
    centerPadding: '0px',
    //vertical: false,
    //verticalSwiping: false,
    responsive: [
        {

            breakpoint: 1400,
            settings: {
                centerMode: true,
                slidesToShow: 4,
                slidesToScroll: 1,
            },

        },
        {

            breakpoint: 992,
            settings: {
                slidesToShow: 3, centerMode: true,
                slidesToScroll: 1,
            },

        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2, centerMode: true,
                slidesToScroll: 1,
            },

        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2, centerMode: true,
                slidesToScroll: 1,
            },
        }
    ]
});
$("#Ecosystem a.nav-link").click(function () {
    let data = $(this).data("img");
    let findata = "";
    $('.list-ecosystem a.imgitem').each(function (index, value) {
        $(value).find(".item").removeClass("active");
        let find = $(value).data("img");
        //console.log($(value).data("img")+"-"+data);
        if (find == data) {
            findata = $(value).data("img");
            $(value).find(".item").addClass("active");
        }
        //console.log(`div${index}: ${this.id}`);
        //console.log($(value).data("img"));
    });
    // $('.list-ecosystem a.'+findata)
});
$(".list-ecosystem .item").hover(function () {
    $(".list-ecosystem div.item").removeClass("active");
    $(this).addClass("active");
    $(this).find("img.img-back").attr("src", "../../assets/img/home/v4/Image/Ellipsexanh.png");
}, function () {
    //$(this).find("img.img-back").attr("src","./Image/Ellipse 5.png");
});
});

setTimeout(function () {

var viewportWidth = jQuery(window).width();
if (viewportWidth > 767) {
    // $('.slidemobileitem').slick('unslick');
    $("#mobi-gmap").remove();

} else {

    $('div.slidemobileitem').slick({
        arrows: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1000,
        dots: true,
        // unslick: true,
        //vertical: false,
        verticalSwiping: false,


    });
    $('div.slideantaonbaomat').slick({
        arrows: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1000,
        dots: true,
        // unslick: true,
        //vertical: false,
        verticalSwiping: false,
        slidesToShow: 1,
        slidesToScroll: 1,

    });
    $("#pc-gmap").remove();
    $(".section-3 .title-section br").remove();
    $(".title_mobi br").remove();
}

$('.disabled-goicuoc').click(function (event) {
    if ($(this).hasClass('disabled')) {
        return false;
    }
});


$(".btn-register-package").click(function () {
    $('html,body').animate({
        scrollTop: $(".price_list-ss2").offset().top
    },
        'slow');
}); 

}, 2000);


jQuery(window).on('resize', function () {
var viewportWidth = jQuery(window).width();

if (viewportWidth > 767) {

} else {
    $('div.slidemobileitem').slick({
        arrows: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1000,
        dots: true,
        // unslick: true,
        //vertical: false,
        verticalSwiping: false,


    });
    $('div.slideantaonbaomat').slick({
        arrows: false,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1000,
        dots: true,
        // unslick: true,
        //vertical: false,
        verticalSwiping: false,
        slidesToShow: 1,
        slidesToScroll: 1,

    });
    $("#pc-gmap").remove();
    $(".section-3 .title-section br").remove();
    $(".title_mobi br").remove();
}
});

window.onscroll = function () { myFunction() };
//menu
var pushy = $('.pushy'), //menu css class
body = $("div.landingpage"),
container = $('#container'),
push = $('.push'),
pushyRight = 'pushy-right',
pushyOpenLeft = 'pushy-open-left',
pushyOpenRight = 'pushy-open-right',
siteOverlay = $('.site-overlay'),
menuBtn = $('.menu-btn'),
menuItem = $('.pushy-link'),
menuLinkFocus = $(pushy.data('focus')),
menuBtnFocus = $('.menu-btn');

menuItem.on('click', function () {
$('#menu_portal li').removeClass("active");
$('#menu_portal li a').removeClass("active");
$(this).children('a').addClass("active");
$(this).addClass("active");
togglePushy();
});

function togglePushy() {
//add class to body based on menu position
// if (pushy.hasClass(pushyLeft)) {
//     body.toggleClass(pushyOpenLeft);
// } else {
//     body.toggleClass(pushyOpenRight);
// }
body.toggleClass(pushyOpenRight);
//focus on link in menu after css transition ends

pushy.one('transitionend', function () {
    // menuLinkFocus.focus();
});


}

function myFunction() {
var header = document.getElementById("myheader");
if (header) {
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.classList.add("fixed-top");
    } else {
        header.classList.remove("fixed-top");
    }
}
}

function initNavListApi() {
$('.nav-item-api.has-tree').on("click", function ($event) {
    $event.stopPropagation();
    if ($(this).hasClass("nav-item-open")) {
        $(this).removeClass("nav-item-open");
    } else {
        $(this).addClass("nav-item-open");
    }
});

$('.nav-item-api').on("click", function ($event) {
    $event.stopPropagation();
});
}