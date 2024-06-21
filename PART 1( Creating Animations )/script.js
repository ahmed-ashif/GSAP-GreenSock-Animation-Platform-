// Syntax to write gsap code
// gsap.to("(write where you want to animate like id, h1 or class etc.)",{(here write whatever property you want to add to animate)})

// Box Animation
gsap.to("#box1",{
  x: 1620,
  duration: 1,
  delay: 0.5,
  rotate: 180
});
gsap.from("#box2",{
  x: 1620,
  duration: 1,
  delay: 1.5,
  rotate: 180,
  borderRadius : "50%",
  backgroundColor: "pink"
})
gsap.to("#box3",{
  x: 1620,
  duration: 1,
  delay: 0.5,
  rotate: 180
})

// Text Animation
gsap.from("h1",{
  opacity : 0, //It will go from 0 to 1
  y: 90,
  duration : 1,
  delay : 0.5,
  // stagger : 0.34, //Used to appear all the similar h1 one by one
  stagger : -1, //displays the last  h1 first and first h1 last
})

//Repeat Animation
gsap.to("#box4",{
  x : 1200,
  duration : 1,
  delay : 0.5,
  rotate : 180,
  // repeat : 2, //It repeats the animation, remember if it set to 1 then it will repeat 2 times as first animation will be the default one , if it set to 2 then it will animate for 3 times
  repeat : -1, //It repeats infinite times
  yoyo : true //It helps to move the box in the both direction
});

//GSAP timelines
var tl = gsap.timeline();

tl.to("#box5",{
  x : 1200,
  duration : 1,
  delay : 0.5,
  rotate : 180
})
tl.to("#box6",{
  x : 1200,
  duration : 1,
  delay : 0.5,
  rotate : 180
})
tl.to("#box7",{
  x : 1200,
  duration : 1,
  delay : 0.5,
  rotate : 180
})

//To understand the Timeline concept nicely
var tlm = gsap.timeline();

tlm.from("h3",{
  opacity : 0,
  y : -30,
  duration : 1,
  delay : 0
});

tlm.from("h2",{
  opacity : 0,
  y : 30,
  duration : 1,
  delay : 0,
  stagger : 0.3
});

tlm.from("h4",{
  opacity : 0,
  duration : 1,
  delay  : 0,
  scale : 0.2,
  color : "black"
});