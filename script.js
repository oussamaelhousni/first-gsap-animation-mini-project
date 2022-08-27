// gsap.to(".cookie_content", { y: 50, opacity: 0, duration: 1 });

/*gsap.fromTo(
    ".cookie__content",
    { opacity: 0, y: -150 },
    { opacity: 1, y: 0, duration: 1 }
);
 */

const tl = gsap.timeline({ defaults: { duration: 0.3 } });

tl.fromTo(
    ".cookie",
    { scale: 0.5 },
    { scale: 1, ease: "back.out(1.8)", duration: 1 }
);

tl.fromTo(
    ".cookie__img",
    { y: -50, rotate: "-45deg", opacity: 0 },
    { y: 0, opacity: 1, rotate: "0deg", duration: 0.75 },
    "<50%"
);

tl.fromTo(
    ".cookie__content",
    { y: -150, opacity: 0 },
    { y: 0, opacity: 1 },
    "<70%"
);
