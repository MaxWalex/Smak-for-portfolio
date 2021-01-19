AOS.init();

$('.countupClients, .countupProjects, .countupAwards, .countupDrinks').counterUp({
    time: 2000
});

// =========================== BURGER ========================

let burger = document.querySelector('.burger')
let menuList = document.querySelector('.menu__list')

burger.addEventListener('click', () => {
    menuList.classList.toggle('active')
    burger.classList.toggle('active')
})


// ======================== CLICK TOGETHER WHIS CLOSE 

document.querySelector('.del').onclick = function () {
    document.querySelector('.works__content-item').classList.add('close')
}



document.getElementsByClassName('.team__close').onclick = function () {

    let teamTabsPaes = document.querySelector('.team__tab-panes')
    let before = document.querySelector('.team-tab__box')
    let teamTabs = document.querySelector('.team__tabs')

    teamTabs.style.marginBottom = '50px'
    teamTabsPaes.classList.add('close')
    before.classList.toggle('team-tab__box--before')
}


// ------------------- SCROLL TO TOP -------------

$('.page__up').click(scrollToTop);

function scrollToTop() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
}

// ---------------- SLIDER -----------------

var mySwiper = new Swiper('.swiper-clients', {
    // Navigation arrows
    navigation: {
        nextEl: '.clietns__btn-next',
        prevEl: '.clietns__btn-prev',
    },
    slidesPerView: 6,
    //   spaceBetween: 80,

    breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        640: {
          slidesPerView:3,
          spaceBetween: 40
        },
        715: {
            slidesPerView:4,
            spaceBetween: 40
          },
        930: {
            slidesPerView: 5,
            spaceBetween: 40
          }
      }
})

var mySwiper2 = new Swiper('.swiper-quote', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
})

// ---------------------- TABS ---------------------

var container = document.querySelector('.works__mix')
tabs(container);

// -------

var container = document.querySelector('.team__tabs')
tabs(container);

// -----------------------------------------------------

// ----------------------------------- SCROLL ------------------------------

$(document).ready(function () {

    var $menu = $(".header");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100 && $menu.hasClass("default")) {
            $menu.fadeOut('fast', function () {
                $(this).removeClass("default")
                    .addClass("fixed")
                    .fadeIn('fast');
            });
        } else if ($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
            $menu.fadeOut('fast', function () {
                $(this).removeClass("fixed")
                    .addClass("default")
                    .fadeIn('fast');
            });
        }
    });
});


// ============================================= PROGRESS BAR ===========================

function progressCircleOne() {

    let progressCircle = document.querySelector('.skills__circule-bar');
    let radius = progressCircle.r.baseVal.value;
    let circumference = radius * 2 * Math.PI;

    progressCircle.style.strokeDasharray = circumference;

    setProgress(10);

    function setProgress(percent) {
        progressCircle.style.strokeDasharray = circumference - (percent / 100) * circumference;
    }
}

function progressCircleTwo() {

    let progressCircle = document.querySelector('.skills__circule-bar--2');
    let radius = progressCircle.r.baseVal.value;
    let circumference = radius * 2 * Math.PI;

    progressCircle.style.strokeDasharray = circumference;

    setProgress(4);

    function setProgress(percent) {
        progressCircle.style.strokeDasharray = circumference - (percent / 100) * circumference;
    }
}

function progressCircleThree() {

    let progressCircle = document.querySelector('.skills__circule-bar--3');
    let radius = progressCircle.r.baseVal.value;
    let circumference = radius * 2 * Math.PI;

    progressCircle.style.strokeDasharray = circumference;

    setProgress(15);

    function setProgress(percent) {
        progressCircle.style.strokeDasharray = circumference - (percent / 100) * circumference;
    }
}

function progressCircleFour() {

    let progressCircle = document.querySelector('.skills__circule-bar--4');
    let radius = progressCircle.r.baseVal.value;
    let circumference = radius * 2 * Math.PI;

    progressCircle.style.strokeDasharray = circumference;

    setProgress(6);

    function setProgress(percent) {
        progressCircle.style.strokeDasharray = circumference - (percent / 100) * circumference;
    }
}

progressCircleOne()
progressCircleTwo()
progressCircleThree()
progressCircleFour()

// =======================================================================








