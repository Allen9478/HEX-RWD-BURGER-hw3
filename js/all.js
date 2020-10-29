$(".hambuger-menu").click(function (e) {
    e.preventDefault();
    $(".hambuger-menu").toggleClass("open-hambuger-menu");
    $(".menu-bar-mobile li").slideToggle(500);
});
$(".ft-backtop").click(function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 1000);
});