
    //load page preloader
    $(document).ready(function () {
        setTimeout(() => {
            $('body, .preloader, .preloader__txt, .preloader__box').addClass('active');
            animLoad();
        }, 800);
    });

    //load page options
    function animLoad() {
        let tl = new TimelineMax({ paused: true });

        tl.staggerFrom("nav.nav > .anim", 0.8, {
            y: 100,
            opacity: 0,
            ease: Expo.easeInOut
        }, "0.1", "+=1.2");
        tl.staggerFrom(".header__bott-scroll, .header__social-item", 0.8, {
            y: 100,
            opacity: 0,
            ease: Expo.easeInOut
        }, "0.1", "-=0.8");
        tl.staggerFrom(".img_bg", 0.8, {
            height: 100,
            opacity: 0,
            ease: Expo.easeInOut
        }, "0.1", "-=0.5");
        tl.staggerFrom(".header__let, .header__num", 0.8, {
            x: -100,
            opacity: 0,
            ease: Expo.easeInOut
        }, "0.1", "-=0.5");
        tl.staggerFrom(".header__title > span", 0.8, {
            y: 100,
            opacity: 0,
            ease: Expo.easeInOut
        }, "0.1", "-=0.8");

        tl.reverse();
        $(document).ready(function () {
            tl.reversed(!tl.reversed())
        });
    }
    // animLoad();


    //menu option
    function animMenu() {
        let tl = new TimelineMax({ paused: true });

        tl.to(".menu-container", 1, {
            left: 0,
            ease: Expo.easeInOut
        });

        tl.staggerFrom(".menu > div", 0.8, {
            y: 100,
            opacity: 0,
            ease: Expo.easeInOut
        }, "0.1", "-=0.4");

        tl.staggerFrom(".socials", 0.8, {
            y: 100, opacity: 0, ease: Expo.easeOut
        }, "0.4", "-=0.6");

        tl.reverse();
        $(document).on("click", ".burger", function () {
            tl.reversed(!tl.reversed())
        });
        $(document).on("click", ".menu-close", function () {
            tl.reversed(!tl.reversed())
        });
        $(document).on("click", ".menu__item-link", function () {
            tl.reversed(!tl.reversed())
        });
    }
    animMenu();
