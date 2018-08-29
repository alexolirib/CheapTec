$(document).ready(function () {
    $(".thumbnails").owlCarousel({
        margin: 10,
        nav: true,
        navText:["ANTERIOR","PROXIMO"]
        
    })
    var owl = $(".thumbnails");
    owl.owlCarousel();
})