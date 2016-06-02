/**
===================================== 
Before page script for Shih Kai Chang porfolio 
=====================================
**/
var slideNext = 0,
    basicWidth = $(window).width(),
    $aboutContentInfor = $('.about-contentInfor');
$(function() {
    objectSize();
    aboutcontent = $('.aboutcontent').height();
    if (_windowWidth >= 769) {
        $('#aboutNextBtn img').click(function() {
            if (slideNext >= 3) {
                slideNext = 0
                $aboutContentInfor.animate({ 'bottom': aboutcontent * slideNext }, 'slow');
                $('#lookMore-btn').removeClass('rotate-circle');
            } else {
                slideNext = slideNext + 1;
                $aboutContentInfor.animate({ 'bottom': aboutcontent * slideNext }, 'slow');
                if (slideNext == 3) {
                    $('#lookMore-btn').addClass('rotate-circle');
                }
            }
        });
    } else {
        $('.aboutcontent').height(_windowHeight);
        $('#aboutNextBtn .next-bntName,#aboutNextBtn img').click(function() {
            if (slideNext >= 3) {
                slideNext = 0
                $aboutContentInfor.animate({ 'bottom': _windowHeight * slideNext }, 'slow');
                $('#lookMore-btn').removeClass('rotate-circle');
            } else {
                slideNext = slideNext + 1;
                $aboutContentInfor.animate({ 'bottom': _windowHeight * slideNext }, 'slow');
                if (slideNext == 3) {
                    $('#lookMore-btn').addClass('rotate-circle');
                }
            }
        });
    }
});
$(window).resize(function() {
    aboutcontent = $('.aboutcontent').height();
    objectSize();
    Differencewidth = _windowWidth - basicWidth;
    if (Differencewidth > 200 || Differencewidth < -200) { window.location.reload(); }
    if (_windowWidth <= 768) {
        $('.aboutcontent').height(_windowHeight);
    }
});
