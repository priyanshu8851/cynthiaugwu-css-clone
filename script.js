
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


// function firstPageAnim(){
//     var t1= gsap.timeline();
//     t1.from("#nav",{
//         y:'-10',
//         opacity:0,
//         duration:2,
//         ease: Expo.easeInOut
//     })
//     .to(".boundingelem",{
//         y: 0,
//         ease: Expo.easeInOut,
//         duration: 2,
//         stagger: .2
//     })
// }


function mouseFollower(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector(".minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`
    })
}
mouseFollower();
// firstPageAnim();



// document.querySelectorAll(".elem").forEach(function(elem){
//     var rotate=0;
//     var diffrot=0;
    
//     elem.addEventListener("mousemove", function(dets){
//         var diff= dets.clientY - elem.getBoundingClientRect().top;
//         diffrot= dets.clientX- rotate;
//         rotate=dets.clientX;
//         gsap.to(elem.querySelector("img"),{
//             opacity: 1,
//             ease: Power1,
//             top: diff,
//             left: dets.clientX,
//             rotate: gsap.utils.clamp(-20,20, diffrot)
//         });
//         console.log("hello")
//     });
// });
