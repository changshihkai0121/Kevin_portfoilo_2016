/**
=============================================================================
 portfoilo of Shih-Kai of jquery + javascript
=============================================================================
**/

var _windowWidth, _windowHeight;

// count size
function objectSize() {
    _windowWidth = $(window).width();
    _windowHeight = $(window).height();
}

//Checking for Retina Devices
function isRetina() {
    var query = '(-webkit-min-device-pixel-ratio: 1.5),\
                (min--moz-device-pixel-ratio: 1.5),\
                (-o-min-device-pixel-ratio: 3/2),\
                (min-device-pixel-ratio: 1.5),\
                (min-resolution: 144dpi),\
                (min-resolution: 1.5dppx)';
    if (window.devicePixelRatio > 1 || (window.matchMedia && window.matchMedia(query).matches)) {
        return true;
    } else {
        return false;
    }
}

//Checking your Devices
function isDevices() {
    var isiDevice = /iphone|ipod/i.test(navigator.userAgent.toLowerCase()),
        isAndroid = /android/i.test(navigator.userAgent.toLowerCase()),
        isBlackBerry = /blackberry/i.test(navigator.userAgent.toLowerCase()),
        isWebOS = /webos/i.test(navigator.userAgent.toLowerCase()),
        isWindowsPhone = /windows phone/i.test(navigator.userAgent.toLowerCase());
    if (isiDevice || isAndroid || isBlackBerry || isWebOS || isWindowsPhone) {
        return true;
    } else {
        false
    }
}


/* Jquery auto run function began */
$(function() {
    objectSize(); // include object size
    $('body').append('<div id=' + '\"paceDiv\"' + '></div><div class=' + '\"paceBox\"' + '><div class=' + '\"loader\"' + '><div class=' + '\"dot\"' + '></div><div class=' + '\"dot\"' + '></div><div class=' + '\"dot\"' + '></div> <div class=' + '\"dot\"' + '></div><div class=' + '\"dot\"' + '></div></div>');
    //append loading site
    paceOptions = {
        ajax: false, // disabled
        document: false, // disabled
        eventLag: false, // disabled
        elements: {
            selectors: ['.container']
        }
    };
    Pace.on("done", function() {
        $('#paceDiv').fadeOut();
        $('.paceBox').fadeOut();
        setTimeout(function() {
            $('#paceDiv').remove();
        }, 3000);
    });
    if (isRetina()) {
        $('.images-icon').each(function() { // all class-name: images-icon change retina use pic
            $(this).attr('src', $(this).attr('src').replace('.png', '.svg'));
        });
    } else {};
    //mouse enter Box action --  jquery Mouseenter
    $('.touch-right').click(function() {
        var $beforeBox = $('#content-Before');
        touchBoxWidth = $('#touchBox').width();
        rightBox_Width = $(this).width();
        percentWidth = rightBox_Width / touchBoxWidth;
        if (percentWidth <= 0.9) {
            $beforeBox.css('z-index', '990');
            $beforeBox.animate({ 'width': '100%' });
            $(this).css('width', '100%');
            $('.touch-left').css('width', 0);
            $('.face-right').css({ 'width': '100%' });
            $('.move-Icon p').animate({ 'width': '100%' });
            $beforeBox.find('.fontTime p').delay(800).animate({ 'opacity': 1 });
        } else {
            $beforeBox.animate({ 'width': '50%' });
            $(this).css('width', '50%');
            $('.touch-left').css('width', '50%');
            $('.face-right').css({ 'width': '197%' });
            $('.move-Icon p').animate({ 'width': '60%' });
            $beforeBox.find('.fontTime p').animate({ 'opacity': 0 });
        }
    });
    $('.touch-left').click(function() {
        var $beforeBox = $('#content-After');
        touchBoxWidth = $('#touchBox').width();
        rightBox_Width = $(this).width();
        percentWidth = rightBox_Width / touchBoxWidth;
        if (percentWidth <= 0.9) {
            $beforeBox.css('z-index', '991');
            $beforeBox.animate({ 'width': '100%' });
            $(this).css('width', '100%');
            $('.touch-right').css('width', 0);
            $('.face-left').css({ 'width': '100%' });
            $('.move-Icon p').animate({ 'width': '100%' });
            $beforeBox.find('.fontTime p').delay(800).animate({ 'opacity': 1 });
        } else {
            $beforeBox.css('z-index', '990');
            $beforeBox.animate({ 'width': '50%' });
            $(this).css('width', '50%');
            $('.touch-right').css('width', '50%');
            $('.face-left').css({ 'width': '203%' });
            $('.move-Icon p').animate({ 'width': '60%' });
            $beforeBox.find('.fontTime p').animate({ 'opacity': 0 });
        }
    });
    //menu btn click animation
    $('.menu-btn').click(function() {
        $('.menu-container').fadeIn();
    });
    $('.closeMenu-Btn').click(function() {
        $('.menu-container').fadeOut();
    });
});
/*  Jquery auto run function end */



/* window resize action began */
$(window).resize(function() {
    objectSize(); // include object size
});
/* window resize action end */

/* window scroll animate began */
$(window).scroll(function() {});
/* window scroll animate end */
