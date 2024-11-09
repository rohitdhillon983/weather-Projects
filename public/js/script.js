
// navigator bar 
var tl = gsap.timeline();
tl.from(".navbar-brand",{
    y:-30,
    // rotate:90,
    opacity:0,
    duration:1,
    scale:0
})
tl.from(".navbar-nav li",{
    x:50,
    opacity:0,
    duration:1,
    stagger:0.5,
})

// home page 
gsap.from(".weatName",{
    x:-100,
    rotateX:90,
    // width:0,
    opacity:0,
    duration:1

})
// footer
gsap.from(".container .icons a",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:".container .icons a",
        scroller:"body",
        start:"top 85%",
        end:"top 75%",
        // markers:true,
        scrub:2,
    },
})
gsap.from(".footerInput",{
    x:-50,
    window:0,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".footerInput",
        scroller:"body",
        start:"top 85%",
        end:"top 75%",
        // markers:true,
        scrub:2,
    },
})
gsap.from(".footerbtn",{
    // y:50,
    width:0,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:".footerbtn",
        scroller:"body",
        start:"top 95%",
        end:"top 75%",
        // markers:true,
        scrub:2,
    },
})
