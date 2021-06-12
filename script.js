$(document).ready(function(){
 $(window).scroll(function(){
     // sticky navbar on scroll script
     if(this.scrollY > 20){
         $('.navbar').addClass("sticky");
     }else{
         $('.navbar').removeClass("sticky");
     }
     
     // scroll-up button show/hide script
     if(this.scrollY > 500){
         $('.scroll-up-btn').addClass("show");
     }else{
         $('.scroll-up-btn').removeClass("show");
     }
 });

 // slide-up script
 $('.scroll-up-btn').click(function(){
     $('html').animate({scrollTop: 0});
     // removing smooth scroll on slide-up button click
     $('html').css("scrollBehavior", "auto");
 });

 $('.navbar .menu li a').click(function(){
     // applying again smooth scroll on menu items click
     $('html').css("scrollBehavior", "smooth");
 });

 // toggle menu/navbar script
 $('.menu-btn').click(function(){
     $('.navbar .menu').toggleClass("active");
     $('.menu-btn i').toggleClass("active");
 });

 // typing text animation script
 var typed = new Typed(".typing", {
     strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
     typeSpeed: 100,
     backSpeed: 60,
     loop: true
 });

 var typed = new Typed(".typing-2", {
     strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
     typeSpeed: 100,
     backSpeed: 60,
     loop: true
 });

 // owl carousel script
 $('.carousel').owlCarousel({
     margin: 20,
     loop: true,
     autoplayTimeOut: 2000,
     autoplayHoverPause: true,
     responsive: {
         0:{
             items: 1,
             nav: false
         },
         600:{
             items: 2,
             nav: false
         },
         1000:{
             items: 3,
             nav: false
         }
     }
 });
});





























/*$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
             $('.navbar').addClass("sticky");
        }else{
             $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    })
});

// slide-up script
$('.scroll-up-btn').click(function(){
   $('html').animate({scrollTop: 0});
   // This is removing the scroll on slide-up button click
   $('html').css("scrollBehavior", "auto");
});

$('.navbar .menu li a').click(function(){
  $('html').animate({scrollTop: 0});
  // removing smooth scroll on slide-up button click
  $('html').css("scrollBehavior", "smooth");
});

// The toggle menu/the navbar script attempt on own
$('.menu-btn').click(function(){
   $('.navbar .menu').toggleClass("active");
   $('.menu-btn i').toggleClass("active");
});


// This block when used will produce an output of animation script
let typed = new Typed(".typing", {
    strings: ["Developer", "Freelancer", "Blogger", "Front End Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true 
});

let typed = new Typed(".typing-2", {
    strings: ["Developer", "Freelancer", "Blogger", "Front End Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Checkout the meaning of owl carousel script what is this?
$('.carousel').owlCarousel({
   margin: 20,
   loop: true,
   autoplayTimeOut: 2000,
   autoplayHoverPause: true,
   responsive: {
      0:{
          items: 1,
          nav: false
      },
      600:{
       items: 2,
       nav: false
      },
      1000:{
       items: 3,
       nav: false
      }
   }
});

// owl carousel script
$('.carousel').owlCarousel({
 margin: 20,
 loop: true,
 autoplayTimeOut: 2000,
 autoplayHoverPause: true,
 responsive: {
     0:{
         items: 1,
         nav: false
     },
     600:{
         items: 2,
         nav: false
     },
     1000:{
         items: 3,
         nav: false
     }
 }
});

*/