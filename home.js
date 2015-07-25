// Made by Nolan Takeshita in 2015.

var heightTop = null,
    menu = null,
    sticky = null,
    imgPath = null,
    id = null;


$(document).ready(function() {
    menu = $('#menu_bar');
    heightTop = menu.offset().top;
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
        }
    );
});
