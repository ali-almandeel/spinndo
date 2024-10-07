
const { innerHeight } = window;
// window.onload= function(){
//     document.getElementById("myAudio"). play();
// }
// var vid= document.getElementById("myAudio");
// vid.volume = 0.2;
const isMobile = window.innerWidth < 1000; // Change 768px based on your breakpoint

function animateTimeline() {
    let tlS = gsap
        .timeline({
            scrollTrigger: {
                trigger: ".container",
                start: "top top",
                end: "+=100%",
                pin: true,
                scrub: true,
            }
        })
    let tl = gsap.timeline({ delay: 0 });

    tl.to(".col", {
        top: 0,
        duration: 3,
        ease: "power4.inOut",
    });

    tl.to(
        ".c-1 .item",
        {
            top: 0,
            stagger: 0.25,
            duration: 3,
            ease: "power4.inOut",
        },
        "-=2"
    );

    tl.to(
        ".c-2 .item",
        {
            top: 0,
            stagger: -0.25,
            duration: 3,
            ease: "power4.inOut",
        },
        "-=4"
    );

    tl.to(
        ".c-3 .item",
        {
            top: 0,
            stagger: 0.25,
            duration: 3,
            ease: "power4.inOut",
        },
        "-=4"
    );

    tl.to(
        ".c-4 .item",
        {
            top: 0,
            stagger: -0.25,
            duration: 3,
            ease: "power4.inOut",
        },
        "-=4"
    );

    tl.to(
        ".c-5 .item",
        {
            top: 0,
            stagger: 0.25,
            duration: 3,
            ease: "power4.inOut",
        },
        "-=4"
    );
    // tl.to(
    //     isMobile && ".container",
    //     {
    //         background: "url('images/photo_1.jpg')",
    //         duration: 2,
    //         ease: "power4.inOut",
    //     },
    //     "-=2"
    // );

    tl.to(
        isMobile ? "#img-mobile" : "#img-scl",
        {
            height: "100vh",
            width: "100vw",
            duration: 4,
            objectFit: isMobile ? "contain" : "cover",
            objectPosition: "center",
            ease: "power4.inOut",
        },
        "-=2"
    );

    tl.to(
        isMobile && "#img-mobile",
        {
            y: -200,
            duration: 2,
            ease: "power4.inOut",
        },
        "-=2"
    );

    tl.to(
        "#img-none",
        {
            display: "none",
            duration: .1,
            ease: "power4.inOut",
        },
        "-=2"
    );
    tl.to(
        ".content-hero",
        {
            opacity: 1,
            duration: 2,
            ease: "power4.inOut",
        },
        "-=2"
    );
    tl.to(
        ".icon",
        {
            opacity: 1,
            duration: 2,
            ease: "power4.inOut",
        },
        "-=2"
    );
    tl.to(isMobile && "#img-mobile", {
        scale: 1.5,         // Move up by 20px
        duration: 1,    // Duration of each movement (up or down)
        ease: "power1.inOut",  // Smooth easing for better animation flow
        repeat: -1,     // Repeat infinitely
        yoyo: true      // Go back and forth (up and down)
    },
    );

    tl.to(
        "html",
        {
            overflowY: "scroll",
            duration: .2,
            ease: "power4.inOut",
        },
        "-=2"
    );
    tlS.to("#img-scl", {
        scale: .5,
        borderRadius: "30px",
        x: 300,
        with: "400px",
        ease: "power4.inOut"
    });
    tlS.to(
        isMobile && ".container", {
        scale: .2,
        y: -500,
        ease: "power4.inOut"
    })
    // tlS.to(
    //     isMobile && "#container-about", {
    //     y: -50,
    //     ease: "power4.inOut"
    // })
    tl.to(
        "#container-about",
        {
            display: "flex",
            opacity: 1,
            duration: 1,
            ease: "power4.inOut",
        },
        "-=2"
    );
    tl.to( "#spando-about", {
        x:100, 
        scale : .8,        // Move up by 20px
        duration: 1,    // Duration of each movement (up or down)
        ease: "power1.inOut",  // Smooth easing for better animation flow
        repeat: -1,     // Repeat infinitely
        yoyo: true      // Go back and forth (up and down)
    },
    );



}

// // zoom-out
// gsap.from("#img-mobile", {
//     scale: 50, stagger: 0.25, duration: 3,
//     scrollTrigger: {
//         trigger: "#zoom-out",
//         pin: true,
//         end: `+=${innerHeight * 1.3}`,
//         scrub: 3
//     }
// });

// zoom-in

gsap.registerPlugin(ScrollTrigger);


window.addEventListener("load", animateTimeline);

// gsap.to("#zoom-in h1", {
//     scale: 100, stagger: 0.25, duration: 3,
//     scrollTrigger: {
//         trigger: "#zoom-in",
//         pin: true,
//         end: `+=${innerHeight * 1.3}`,
//         scrub: 3
//     }
// });



window.addEventListener("load", () => {

    gsap
        .timeline({
            scrollTrigger: {
                trigger: ".container-about",
                start: "top top",
                end: "+=300%",
                pin: true,
                scrub: true,
            }
        })
        .to("#zoom-in", {
            scale: 1,
            duration: .1,
            ease: "power4.inOut"
        })
        .to("#zoom-in img", {
            scale: 500,
            display : "none",
            duration:  3,
            ease: "power4.inOut"
        })
        .to(".about-1", {
            y : -100 ,
            opacity: 1,
            duration: 1,
            ease: "power3.inOut"
        })
        .to(".img-about-1", {
            opacity: 1,
            x: isMobile ? "5%" : "20%",
            duration: 1,
            ease: "power4.inOut"
        })
        .to("#zoom-out", {
            opacity: 1,
            duration: 1,
            ease: "power4.inOut"
        })
    // .to(".img-about img",{
    //      with : "100vw",
    //      height : "100vh",
    //     ease : "power2.inOut"
    // })
    // .to(".img-about",{
    //     position : "absolute",
    //     top : 0,
    //     left : 0,
    //     zIndex : -1,
    //      with : "100vw",
    //      height : "100vh",
    //     ease : "power2.inOut"
    // })
});
