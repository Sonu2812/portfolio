$(function(){

    $('body').fadeIn(2000);

    $('.navbar-header').slideDown(2300);

    $('.navbar-nav').slideDown(2500);

    $('.middle h1').click(function(){
        $('.middle p').slideDown(1000);

    });

    $('.middle h1').dblclick(function(){
        $('.middle p').slideUp(1000);

    });

    $('.middle p').hide();

    $('.bottom').fadeIn(3500);

})