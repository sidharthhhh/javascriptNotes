gsap.from("#nav h2",{
  y:-100,
  duration:1,
  delay:1,
  opacity:0,
  stagger:0.3
})

gsap.from("h1",{
  x:-500,
  duration:1,
  delay:2,
  opacity:0,
  stagger:0.3 
})

gsap.from("img",{
  x:500,
  rotate:90,
  delay:3,
  stagger:0.4,
  duration:1,
  opacity:0
})

gsap.from("#elem1",{
  scale:0,
  opacity:0,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
    trigger:"#elem1",
    scroller:"body",
    markers:true,
    start:"top 80%"
  }
})