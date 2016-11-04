/**
 * Created by ss on 01.10.2016.
 */
$(document).ready(function() {
    //animate middle menu
    $('.btn-default').bind('mouseenter',function(){
        $(this).parent().find('img').animate({opacity:0.7},100);
    }).bind('mouseleave',function(){
        $(this).parent().find('img').animate({opacity:1},100);
    });

    //navbar in the center
    //$(function(){
    //    var wBrowser = document.documentElement.clientWidth;
    //    var navbarWidth = $('.navbar-collapse').width(),
    //        navWidth = $('.nav').width(),
    //        navMargin = (navbarWidth/2)-(navWidth/2);
    //    $('.nav').css('margin-left', Math.round(navMargin));
    //    if(wBrowser < 768){
    //        $('.nav').css('margin-left', '-15px');
    //    }
    //});
});