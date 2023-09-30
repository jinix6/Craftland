function c(t){
navigator.clipboard.writeText(t);
};
const scroller = new LocomotiveScroll({
    el: document.querySelector('.container'),
    smooth: 2
})

gsap.registerPlugin(ScrollTrigger)
scroller.on('scroll', ScrollTrigger.update)

ScrollTrigger.scrollerProxy(
    '.container', {
        scrollTop(value) {
            return arguments.length ?
            scroller.scrollTo(value, 0, 0) :
            scroller.scroll.instance.scroll.y
        },
        getBoundingClientRect() {
            return {
                left: 0, top: 0, 
                width: window.innerWidth,
                height: window.innerHeight
            }
        }
    }
)


 const photos = document.querySelectorAll('.photo');
 
 photos.forEach((photo) => {
   const animationTimeline = gsap.timeline();
   const animationTimelin = gsap.timeline();


   
 
   animationTimelin.from(photo, {
    y: -100,
      ease: "power1.inOut",
      opacity: 0,
      scale: 0,
     rotationX: 270,
       rotationY: 0,
       transformStyle: "preserve-3d",
      
   });
   animationTimelin.from(photo, {
     y: 0,
       opacity: 1,
       scale: 1,
       ease: "power1.inOut",
       rotationX: 0,
         rotationY: 0,
         transformStyle: "preserve-3d",
       
   });
   
   ScrollTrigger.create({
     trigger: photo,
      scroller: "body, html",
       start: "top 150%",
       end: "top -100%",
       markers: false,
       animation: animationTimelin,
       scrub: 1,
   });
 });
 
 
 
 
 
 
 
const animationTimelin = gsap.timeline();
animationTimelin.to("#ndjhdb", {
  ease: "power1.inOut",
  opacity: 1,
  scale: 1,
  top: "10%",
  

});

   animationTimelin.to("#ndjhdb", {
     ease: "power1.inOut",
     opacity: 1,
     scale: 1,
     top: "3%",
    duration: 10,
   
   });
 
   animationTimelin.to("#ndjhdb", {
      ease: "power1.inOut",
      opacity: 0.3,
      scale: 10,
     top: "50%",
     duration: 10,
      
   });
   animationTimelin.to("#ndjhdb", {
       opacity: 0.5,
       scale: 5,
       ease: "power1.inOut",
       top: "50%",
       left: "0%",
       duration: 10,
   });
   
   animationTimelin.to("#ndjhdb", {
     opacity: 0.5,
     scale: 5,
     ease: "power1.inOut",
     left: "200%",
     duration: 10,
   });
   
   
   ScrollTrigger.create({
     trigger: "#ndjhdb",
      scroller: "body, html",
       start: "top 0%",
       end: "top -100%",
       markers: false,
       animation: animationTimelin,
       scrub: 1,
   });

 
 
 function loaded(){
   
   document.getElementById("nxidndnd").style.animation ="dialog1hide 250ms 1 forwards";
 }