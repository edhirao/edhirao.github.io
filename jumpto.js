

$('.jumpto').eq(0).click(function () {
    $('html, body').animate({
        scrollTop: $('#home').eq(0).offset().top },
    300);
});

$('.jumpto').eq(1).click(function () {
    $('html, body').animate({
        scrollTop: $('#about').eq(1).offset().top },
    300);
});

$('.jumpto').eq(2).click(function () {
    $('html, body').animate({
        scrollTop: $('#experience').eq(2).offset().top },
    300);
});

$('.jumpto').eq(3).click(function () {
    $('html, body').animate({
        scrollTop: $('#portfolio').eq(3).offset().top },
    300);
});

$('.jumpto').eq(4).click(function () {
    $('html, body').animate({
        scrollTop: $('#contact').eq(4).offset().top },
    300);
});








