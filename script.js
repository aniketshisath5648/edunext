var swiper1 = new Swiper(".mySwiper1", {
    direction: "vertical",
    autoplay:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var p=gsap.timeline();

  p.from('.eduu img',{
    duration:1.3,
    scale:0,
    opacity:0,
    stagger:.2
})
p.from('.tc1',{
    y: 100,
    opacity:0,
})






var swift = new Swiper(".myswift", {
  slidesPerView: 4,
         spaceBetween: 30,
         freeMode: true,
         autoplay:{
           delay:1000,
         },
        //  mousewheel:true,
        //  keyboard:{
        //    enable:true,
        //  },
         loop:true,
         breakpoints: {
           320:{
             slidesPerView: 1,
             spaceBetween: 20,
           },
           375:{
             slidesPerView: 1.1,
             spaceBetween: 20,
           },
           425:{
             slidesPerView: 1,
             spaceBetween: 20,
           },
           640: {
             slidesPerView: 2,
             spaceBetween: 20,
           },
           768: {
             slidesPerView: 2,
             spaceBetween: 40,
           },
           1024: {
             slidesPerView: 4,
             spaceBetween: 20,
           },
         },
       });
       document.addEventListener("DOMContentLoaded", function() {
         const serviceButtons = document.querySelectorAll('.service-buttons h3');       
         serviceButtons.forEach(button => {
           button.addEventListener('click', () => {
             const target = button.getAttribute('data-target');
             const currentActive = document.querySelector('.cards.active');
             currentActive.classList.remove('active');
             document.getElementById(target).classList.add('active');
           });
         });
       });

       var tl = gsap.timeline()

tl.from('.notis',{
    scale:0,
    opacity:0,
    duration:3,
    // scrollTrigger:{
       
    // }
})

tl.from('.play-store-right',{
    x:'50%',
    opacity:0,
    delay:0.5,
    // scrollTrigger:{
    //   markers:true,

    // }
});





const jousection = document.querySelectorAll('.journey-section');
const journeylink = document.querySelectorAll('.jou-link');

// Add the active class to the default section and link
jousection[0].classList.add('active');
journeylink[0].classList.add('active');

journeylink.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    jousection.forEach((section) => {
      section.classList.remove('active');
    });
    journeylink.forEach((link) => {
      link.classList.remove('active');
    });
    const targetid = e.target.getAttribute('data-target');
    const targetsection = document.getElementById(targetid);
    targetsection.classList.add('active');
    const targetlink = document.querySelector('.jou-link[data-target="${targetid}"]');
    targetlink.classList.add('active');
});
});
