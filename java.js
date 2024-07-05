gsap.registerPlugin(ScrollTrigger);

gsap.from('.intro-logo',{
    opacity:0,
    duration:2
})
let intro =gsap.timeline({
    scrollTrigger:{
        
        trigger:'header',
        start:'top top',
        scrub: 1,
        pin: true,
        pinSpacing: false,
        end: '+=300',
    }
});
intro.to('.intro-logo',{
    scale:0.8
})
.from('.intro-sub',{
    opacity: 0,
    y: 600
},'<')
.from('.bg-black', {
    duration: 4,
    yPercent: 100,
})


/* PRIMER SECTION*/

let paralax =gsap.timeline({
    scrollTrigger:{
        
        trigger:'.paralax-wrapper',
        start:'top top',
        scrub:true,
        end:'+=100',
        pin: true,
    }
});
paralax.from('.video',{
    y: 100
},'<')
paralax.from('.paralax-title',{
    scale:20.8,
    y: 400
},'<')

/*SEGUNDO SECTION*/


let paralax2 =gsap.timeline({
    scrollTrigger:{
        
        trigger:'.paralax-wrapper2',
        start:'top top',
        scrub:true,
        end:'+=300',
        pin: true,
    }
});
paralax2.from('.video2',{
    y: 600
},'<')
paralax2.from('.paralax-title2',{
    scale:5.8,
    y: 400,
},'<')

paralax2.from('.cd-img', {
    opacity:0,
    x:-1000,
    transformOrigin: 'left',
},'<')








let discos1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.discos1',
        start: 'top 50%',
        // toggleActions: 'restart none none reverse',
        scrub: 1,
        end: '+=2000',
    }});

discos1.from('.discos1 .year', {
    y:2200,
    opacity:0
})

.from('.cd1 .cd-name', {
    y:400,
    opacity:0
},0)

.from('.cd1 .cd-info', {
    y: 900,
    opacity:0
},0)

.from('.cd1 .cd-img', {
    opacity:0,
    x:-800,
    transformOrigin: 'left center',
},0)

.from('.cd2 .cd-name', {
    y:300,
    opacity:0
},)

.from('.cd2 .cd-info', {
    y: 500,
    opacity:0
},'<')

.from('.cd2 .cd-img', {
    opacity:0,
    x:-800,
    transformOrigin: 'left center',
},'<')