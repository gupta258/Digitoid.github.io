const menuIcon = document.querySelector('.hamburger-menu');

const navbar = document.querySelector('.custom-navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
    document.querySelector("#navShadow").classList.toggle("change-nav-shadow");
});

$(function() {

    function RippleStyle(width, height, posX, posY) {

        this.width = ( width <= height ) ? height : width;
        this.height = ( width <= height ) ? height : width;
        this.top = posY - (this.height * .5);
        this.left = posX - (this.width * .5);

    }

    $('.ripple').click(function(e) {

        var rippleE1 = $('<span class="btn-ripple"></span>').appendTo(this);

        var pos = $(this).offset();

        var width = $(this).outerWidth();
        var height = $(this).outerHeight();

        var posX = e.pageX - pos.left;
        var posY = e.pageY - pos.top;

        var rippleStyle = new RippleStyle(width, height, posX, posY);

        rippleE1.css(rippleStyle);

    });

    $('.ripple').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.btn-ripple', function() {
        $(this).remove();
    });

});