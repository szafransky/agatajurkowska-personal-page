document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
        autoplay: true,
        interval: 3000,
        rewind: true,
        height: 300,
        pagination: false
    } ).mount();
} );