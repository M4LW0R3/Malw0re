TweenMax.to("loading-screen", 4, {
    delay: 6.6,
    top: "-110%",
    ease: Expo.easeInOut
});

TweenMax.from(".log", 3, {
    delay: 8.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".contact", 3, {
    delay: 8.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".options", 3, {
    delay: 8.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".", 3, {
    delay: 8.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});