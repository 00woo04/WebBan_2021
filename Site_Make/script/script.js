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


// 라이트박스
$(".lightbox").lightGallery({
    thumbnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
});

