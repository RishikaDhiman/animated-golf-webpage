gsap.to("#nav",{
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start:"top -10%",
        end: "top -11%",
        srcub: 1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -40%",
        end: "top -45%",
        scrub: 2
    }
})

var crsr = document.querySelector("#cursor");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})

var crsrBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){
    crsrBlur.style.left = dets.x-150+"px"
    crsrBlur.style.top = dets.y-150+"px"
})

gsap.from("#about-us img, #about-us-in",{
    y: 90,
    opacity: 0,
    duration: 1,
    // stagger: 0.4,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        // start: "top 10%",
        // end: "top 100%",
        scrub: 2
    }
})

gsap.from(".card",{
    scale: 0.9,
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        // markers: true,
        // start: "top 10%",
        // end: "top 100%",
        scrub: 2
    }
})

gsap.from("#colon1",{
    y: -80,
    x: -80,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        // start: "top 10%",
        // end: "top 100%",
        scrub: 2
    }
})
gsap.from("#colon2",{
    y: 80,
    x: 80,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        // start: "top 10%",
        // end: "top 100%",
        scrub: 4
    }
})

gsap.from("#page4 h1",{
    y: 50,
    scrollTrigger:{
        trigger: "#page4 h1",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 80%",
        scrub: 3
    }
})


