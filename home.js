var heightTop = null,
    menu = null,
    sticky = null;

$( document ).ready(function() {
    menu = $('#menu_bar');
    heightTop = menu.offset().top;
});

/* Everytime window is scrolled, check slider function. */

$(window).scroll(function() {
    
    if ($(window).scrollTop() > heightTop && !sticky) {
        sticky = menu.clone();
        sticky.prop('id', menu.prop('id') + '-clone');
        sticky.insertBefore(menu);
        menu.toggleClass('fixed');
    } else if ($(window).scrollTop() < heightTop && sticky != null) {
        sticky.remove();
        sticky = null;
        menu.toggleClass('fixed');
    }
    
});

/* Offset hashchange to account for menu size. */

$(window).on("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - menu.height());
});

/* Hover functionality for the board pictures. */

$('.wrapper').hover(function() {
    window.alert();
    $(this, 'span').css('opacity', '1');
}, function() {
    $(this, 'span').css('opacity', '0');
});


