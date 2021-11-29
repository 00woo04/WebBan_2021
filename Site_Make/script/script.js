// image slider
$(".slider").slick({
    dots:true,
    autoplay:true,
    autoplaySpeed: 3000,
    arrows:false,
    responsive:[
        {
            breakpoint:768,
            settings:{
                arrows:true,
                dots:false
            }
        }
    ]
});


// lightbox (blend effect)
$(".lightbox").lightGallery({
    thumbnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
});
