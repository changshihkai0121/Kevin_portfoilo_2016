/**
=============================================================================
 portfoilo of Shih-Kai of jquery + javascript
=============================================================================
**/

var _windowWidth, _windowHeight, _countentTimeWidth;

// count size
function objectSize() {
    _windowWidth = $(window).width();
    _windowHeight = $(window).height();
    _countentTimeWidth = $('.countent-Time').width();
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

function changePage(changePage) {
    setTimeout(function() {
        $('body').fadeOut(2500);
        setTimeout(function() { window.location.href = changePage }, 1500);
    }, 1000);
}

/* Jquery auto run function began */
$(function() {
    objectSize(); // include object size
    var $touchRight = $('.touch-right'),
        $touchLeft = $('.touch-left'),
        $beforeBox = $('#content-Before'),
        $afterBox = $('#content-After'),
        $touchAll = $('#touchBox');
    var nextToken = 1,
        waitingAtBorder = 0, // 0: not waiting
        timeFrame = 500; // milliseconds

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
    }
    $('.face-left').css('width', _countentTimeWidth);
    $('.face-right').css('width', _countentTimeWidth);
    //mouse enter Box action --  jquery Mouseenter
    $touchRight.mouseenter(function() {
        if (!waitingAtBorder) {
            var token = nextToken++;
            waitingAtBorder = token;
            setTimeout(function() {
                if (waitingAtBorder == token) {
                    touchBoxWidth = $('#touchBox').width();
                    $beforeBox.stop().css('z-index', 99);
                    $beforeBox.stop().animate({ 'width': '100%' }, 1000);
                    $(this).stop().css('width', '100%');
                    $touchLeft.stop().css('width', 0);
                    $('.move-Icon p').stop().animate({ 'width': '100%' });
                    $beforeBox.find('.fontTime p').stop().animate({ 'opacity': 1 });
                    $touchAll.css('cursor', 'pointer');
                    $('.shihKaiporfoiloText').animate({ 'opacity': 1 });
                }
            }, timeFrame);
        }
    });
    $touchRight.mouseleave(function() {
        if (waitingAtBorder) {
            waitingAtBorder = 0;
            setTimeout(function() {
                if (waitingAtBorder == 0) {
                    touchBoxWidth = $('#touchBox').width();
                    $beforeBox.stop().css('z-index', 90);
                    $beforeBox.stop().animate({ 'width': '50%' }, 1000);
                    $(this).stop().css('width', '50%');
                    $touchLeft.stop().css('width', '50%');
                    $('.move-Icon p').stop().animate({ 'width': '60%' });
                    $beforeBox.find('.fontTime p').stop().animate({ 'opacity': 0 });
                    $touchAll.css('cursor', 'auto');
                    $('.shihKaiporfoiloText').animate({ 'opacity': 0 }, 500);
                    return;
                }
            }, timeFrame);
        }
    });
    $touchLeft.mouseenter(function() {
        if (!waitingAtBorder) {
            var token = nextToken++;
            waitingAtBorder = token;
            setTimeout(function() {
                touchBoxWidth = $('#touchBox').width();
                $afterBox.stop().css('z-index', 99);
                $afterBox.stop().animate({ 'width': '100%' }, 1000);
                $(this).stop().css('width', '100%');
                $touchRight.stop().css('width', 0);
                $('.move-Icon p').stop().animate({ 'width': '100%' });
                $afterBox.find('.fontTime p').stop().animate({ 'opacity': 1 });
                $touchAll.css('cursor', 'pointer');
                $('.shihKaiporfoiloText').animate({ 'opacity': 1 });
            }, timeFrame);
        }
    });
    $touchLeft.mouseleave(function() {
        if (waitingAtBorder) {
            waitingAtBorder = 0;
            setTimeout(function() {
                if (waitingAtBorder == 0) {
                    touchBoxWidth = $('#touchBox').width();
                    $afterBox.stop().animate({ 'width': '50%' }, 1000, function() {
                        $(this).stop().css('z-index', 90);
                    });
                    $(this).stop().css('width', '50%');
                    $touchRight.stop().css('width', '50%');
                    $('.move-Icon p').stop().animate({ 'width': '60%' });
                    $afterBox.find('.fontTime p').stop().animate({ 'opacity': 0 });
                    $touchAll.css('cursor', 'auto');
                    $('.shihKaiporfoiloText').animate({ 'opacity': 0 }, 500);
                }
                return;
            }, timeFrame);
        }
    });
    $('.toogle-Btn').click(function() {
        $afterBox.css('background-color', 'rgba(95,178,169,1)');
        $beforeBox.css('background-color', ' rgba(63,60,99,1)');
        $(this).css('background-color', '#bbb');
        $('body').append('<div class=' + '\"maskAllpage\"' + '></div>')
        changePage('/about.html');
    });
    $touchRight.click(function() {
        changePage('/2016before.html');
    });
    $touchLeft.click(function() {
        changePage('/2016after.html');
    });
    //menu btn click animation
    $('.menu-btn').click(function() {
        $('.menu-container').fadeIn();
    });
    $('.closeMenu-Btn').click(function() {
        $('.menu-container').fadeOut();
    });
    if (navigator.userAgent.match('Safari')) {
        if (_windowWidth <= 768) {
            $('.copyright').css('bottom', 10);
            $('.about-next').css('bottom', '5%');
        }
    }
    if (_windowHeight >= 700) {
        $('.copyright').css('bottom', 50);
    } else {
        $('.copyright').css('bottom', 25);
    }
});
/*  Jquery auto run function end */

/* window resize action began */
$(window).resize(function() {
    objectSize(); // include object size
    $('.face-left').css('width', _countentTimeWidth);
    $('.face-right').css('width', _countentTimeWidth);
    if (_windowHeight >= 700) {
        $('.copyright').css('bottom', 50);
    } else {
        $('.copyright').css('bottom', 25);
    }
});
/* window resize action end */

/* window scroll animate began */
$(window).scroll(function() {});
/* window scroll animate end */
