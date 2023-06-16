// gsap.from("#page1 #box",{
//     scale:0,
//     duration:1,
//     delay:1
// })
// gsap.from("#page2 #box",{
//     scale:0,
//     duration:1,
//     delay:1,
//     scrollTrigger:"#page2 #box"
// })

gsap.from("#page1 #box",{
    scale:0,
    duration:1,
    delay:1
})
gsap.from("#page2 #box",{
    scale:0,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:2,
    }
})

