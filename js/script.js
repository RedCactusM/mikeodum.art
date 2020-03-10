// When user CLICKS navigation
// IF the user CLICKS "About" in the nav
$(".aboutNav").on("click", function(){
    //add clash of .show to selection
    $(".about").addClass("show");
    // fade in about section // Add class .show and give .show ease in and translation on Y
    $(".about").fadeIn("slow");
    // hide all other section
    $(".gallery,.sketch,.games,.commissions,.books,.shop").fadeOut("fast");
});
// IF the user CLICKS "Gallery" in the nav
$(".galleryNav").on("click", function(){
    // fade in gallery section
    $(".gallery").fadeIn("slow");
    // hide all other section
    $(".about,.games,.sketch,.commissions,.books,.shop").fadeOut("fast");
});
// IF the user CLICKS "Books" in the nav
$(".booksNav").on("click", function(){
    //add clash of .show to selection
    $(".books").addClass("show");
    // fade in books section
    $(".books").fadeIn("slow");
    // hide all other section
    $(".about,.gallery,.games,.sketch,.commissions,.shop").fadeOut("fast");
});
// IF the user CLICKS "Games" in the nav
$(".gamesNav").on("click", function(){
    //add clash of .show to selection
    $(".games").addClass("show");
    // fade in games section
    $(".games").fadeIn("slow");
    // hide all other section
    $(".about,.gallery,.sketch,.books,.commissions,.shop").fadeOut("fast");
});
// IF the user CLICKS "Sketchbook" in the nav
$(".sketchNav").on("click", function(){
    //add clash of .show to selection
    $(".sketch").addClass("show");
    // fade in sketchbook section
    $(".sketch").fadeIn("slow");
    // hide all other section
    $(".about,.gallery,.games,.books,.commissions,.shop").fadeOut("fast");
});
// IF the user CLICKS "Commissions" in the nav
$(".commissionsNav").on("click", function(){
    //add clash of .show to selection
    $(".commissions").addClass("show");
    // fade in commissions section
    $(".commissions").fadeIn("slow");
    // hide all other section
    $(".about,.gallery,.games,.books,.sketch,.shop").fadeOut("fast");
});
// IF the user CLICKS "Shop" in the nav
$(".shopNav").on("click", function(){
    //add clash of .show to selection
    $(".shop").addClass("show");
    // fade in shop section
    $(".shop").fadeIn("slow");
    // hide all other section
    $(".about,.gallery,.games,.books,.sketch,.commissions").fadeOut("fast");
});
// If the user clicks the moon
$(".dark").on("click", function(){
    //add class of .darkHeader
    $("header").addClass("darkHeader");
     //add class of .darkHeader
    $("nav").addClass("darkNav");
    //add class of .shadow
    $(".about img, .books img, .games img, .commissions img, .books img, .shop img, .gallery img, .sketch img").addClass("shadow");
    //add class of .darkFooter
    $("footer").addClass("darkFooter");
    //add class of .darkBackground
    $("main").addClass("darkBackground");
    //add class of .imageboxTextDark
    $(".imageboxText").addClass("imageboxTextDark");
    // add class of .darkSidebar
    $(".sidebar").addClass("darkSidebar");
    // add class of .darkli
    $("li").addClass("darkli");
});

// If the user clicks the sun
$(".light").on("click", function(){
    //remove  class of .darkHeader
    $("header").removeClass("darkHeader");
     //remove  class of .darkHeader
    $("nav").removeClass("darkNav");
    //remove  class of .shadow
    $(".about img, .books img, .games img, .commissions img, .books img, .shop img, .gallery img, .sketch img").removeClass("shadow");
    //remove  class of .darkFooter
    $("footer").removeClass("darkFooter");
    //remove  class of .darkBackground
    $("main").removeClass("darkBackground");
    //remove  class of .imageboxTextDark
    $(".imageboxText").removeClass("imageboxTextDark","imageboxTextDark2");
    //remove class of .darkSidebar
    $(".sidebar").removeClass("darkSidebar");
    //remove class of .darkli
    $("li").removeClass("darkli");
});

//When user CLICKS the HAMBURGER menu
    //slide the sidebar in from the left

    $(".hamburger").on("click", function(){
        $(".sidebar").addClass("active");
    });

//When user CLICKS the Close anchor
    //slide the sidebar out to the left

    $(".close").on("click", function(){
        $(".sidebar").removeClass("active");
    });

// When user CLICK img
$(".about img, .books img, .games img, .commissions img, .books img, .shop img, .gallery img, .sketch img").on("click", function(){

    // grab clicked image src
    let clickedImgSrc = $(this).attr('src');
    // add class of lightboxOverlay to lightbox
    $(".lightbox").addClass("lightboxDisplay");
    // retrieve img source using attribute method .attr
    $(".lightbox img").attr("src", clickedImgSrc);
    // store img src in a variable
    // select the img in the lightbox
    // set the img in the lightbox to be the same as img variable .attr
    // show img modal
});
// When user CLICKS "x" on img modal
//remove class .lightBox
// hide img modal

$(".lightbox img").on("click", function(){
    $(".lightbox").removeClass("lightboxDisplay");

});