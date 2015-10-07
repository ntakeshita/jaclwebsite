// Made by Nolan Takeshita in 2015.

var heightTop = null,
    menu = null,
    sticky = null,
    imgPath = null,
    id = null,
    stellarActivated = false;


$(document).ready(function() {
    menu = $('#menu_bar');
    heightTop = menu.offset().top;
    menuSizing();
});


/* Apply a linear gradient and show text field on hover over. */
$(function() {
    $(".gallery_img").hover(
        // Handler in for gallery photos.
        function () {
            $(this).find("span").css('visibility', 'visible');
            id = '#'+ $(this).attr('id');
            imgPath = $(id).css('background-image');
            $(id).css('background-image', 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ' + imgPath);
        },
        // Handler out for gallery photos.
        function () {
            $(this).find("span").css('visibility', 'hidden');
            $(id).css('background-image', imgPath);
            id = imgPath = null;
        });
});


// On clicking the icon show the menu
$(function() {
    $('#menu_alt_icon').click(function() {
        $('#menu_alt').toggle();
    });
});


// On clicking an element close the menu.
$(function() {
    $('.menu_link_alt').click(function() {
        $('#menu_alt').toggle();
    });
});

$(function() {
    $('.menu_item').click(function() {
        $('#menu_alt').toggle();
    });
});

$(function() {
    $(window).resize(function() {
        menuSizing();
    });
});


// Resizing function.
function menuSizing() {
    var windowWidth = $(window).width(),
        menuHeight = $('#menu_bar').innerHeight();
    $('#menu_alt').css('margin-top', menuHeight + 'px');
    if (windowWidth < 1100) {
        $('#menu_alt_icon').css('display', 'inline');
        $('#menu').css('display', 'none');
        $('.gallery_txt').css('font-size', '80%');
    } 
    else {
        $('#menu_alt').hide();
        $('#menu_alt_icon').css('display', 'none');
        $('#menu').css('display', 'inline');
        $('.gallery_txt').css('font-size', '110%');
    }
}
