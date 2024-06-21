// ************ Scroll Trigger BOX Animation **********

gsap.from("#page1 .box",{
  scale: 0,
  duration: 2,
  delay: 1,
  rotate: 360
})
gsap.from("#page2 .box",{
  scale: 0,
  duration: 2,
  delay: 1,
  rotate: 360,
  // scrollTrigger specific properties below
  scrollTrigger : {
    trigger : "#page2 .box",
    scroller: "body",
    markers: true,
    start: "top 60%"
  }
})

// ************* */ Scroll Trigger Text Animation ******

gsap.from("h1",{
  opacity : 0,
  duration: 1,
  x: 450,
  delay: 1,
  scrollTrigger: {
    trigger: "#page3 h1",
    scroller: "body",
    markers: true,
    start: "top 50%",
  }
});
gsap.from("h2",{
  opacity : 0,
  duration: 1,
  x: -450,
  delay: 1,
  scrollTrigger: {
    trigger: "#page3 h2",
    scroller: "body",
    markers: true,
    start: "top 70%"
  }
});

// ************ Scroll Trigger scrub tag function ***********

// Scrub

gsap.from("#page4 .box",{
  scale: 0,
  opacity: 0,
  duration: 2,
  delay: 1,
  rotate: 720,
  scrollTrigger: {
    trigger: "#page4 .box",
    markers: true,
    start: "top 70%",
    end: "top 50%",
    // scrub: true,
    scrub: 2,
    // pin: true
  }
});