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

function UrlBack() {
    NowPage = window.location.href;
    wherePage = NowPage.split('/')[3].split('.html')[0]
    console.log(wherePage);
    if (wherePage === 'about' || wherePage === '2016after' || wherePage === '2016before') {
        changePage('/index.html');
    } else if (wherePage === '2016beforeInfo') {
        changePage('/2016before.html');
    } else if (wherePage === '2016afterInfor') {
        changePage('/2016after.html');
    }
}

/* Jquery auto run function began */
$(function() {
    BasicWidth = $(window).width(); //Basic width when enter this page
    objectSize(); // include object size
    var $touchRight = $('.touch-right'),
        $touchLeft = $('.touch-left'),
        $beforeBox = $('#content-Before'),
        $afterBox = $('#content-After'),
        $touchAll = $('#touchBox');
    // 宣告 point name
    var $mouseRight = $('.instruction-right'),
        $mouseLeft = $('.instruction-left'),
        $mouseAbout = $('.instruction-about');

    var nextToken = 1,
        waitingAtBorder = 0, // 0: not waiting
        timeFrame = 500; // milliseconds

    $('body').append('<div id=' + '\"paceDiv\"' + '></div><div class=' + '\"paceBox\"' + '><div class=' + '\"spinner\"' + '><div class=' + '\"cube1\"' + '></div><div class=' + '\"cube2\"' + '></div></div></div>');
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
                    $beforeBox.stop().animate({ 'width': '100%' }, 1250);
                    $(this).stop().css('width', '100%');
                    $touchLeft.stop().css('width', 0);
                    $('.move-Icon p').stop().animate({ 'width': '100%' });
                    $beforeBox.find('.fontTime p').stop().animate({ 'opacity': 1 });
                    $touchAll.css('cursor', 'pointer');
                    $('.shihKaiporfoiloText').animate({ 'opacity': 1 });
                    $mouseRight.css('opacity', .2);
                    $mouseLeft.delay(250).fadeOut();
                    $mouseAbout.delay(125).fadeOut();
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
                    $beforeBox.stop().animate({ 'width': '50%' }, 1250);
                    $(this).stop().css('width', '50%');
                    $touchLeft.stop().css('width', '50%');
                    $('.move-Icon p').stop().animate({ 'width': '60%' });
                    $beforeBox.find('.fontTime p').stop().animate({ 'opacity': 0 });
                    $touchAll.css('cursor', 'auto');
                    $('.shihKaiporfoiloText').animate({ 'opacity': 0 }, 500);
                    $mouseRight.css('opacity', .6);
                    $mouseLeft.delay(100).fadeIn();
                    $mouseAbout.delay(500).fadeIn();
                }
                return;
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
                $afterBox.stop().animate({ 'width': '100%' }, 1250);
                $(this).stop().css('width', '100%');
                $touchRight.stop().css('width', 0);
                $('.move-Icon p').stop().animate({ 'width': '100%' });
                $afterBox.find('.fontTime p').stop().animate({ 'opacity': 1 });
                $touchAll.css('cursor', 'pointer');
                $('.shihKaiporfoiloText').animate({ 'opacity': 1 });
                $mouseLeft.css('opacity', .2);
                $mouseRight.delay(250).fadeOut();
                $mouseAbout.delay(125).fadeOut();
            }, timeFrame);
        }
    });
    $touchLeft.mouseleave(function() {
        if (waitingAtBorder) {
            waitingAtBorder = 0;
            setTimeout(function() {
                if (waitingAtBorder == 0) {
                    touchBoxWidth = $('#touchBox').width();
                    $afterBox.stop().animate({ 'width': '50%' }, 1250, function() {
                        $(this).stop().css('z-index', 90);
                    });
                    $(this).stop().css('width', '50%');
                    $touchRight.stop().css('width', '50%');
                    $('.move-Icon p').stop().animate({ 'width': '60%' });
                    $afterBox.find('.fontTime p').stop().animate({ 'opacity': 0 });
                    $touchAll.css('cursor', 'auto');
                    $('.shihKaiporfoiloText').animate({ 'opacity': 0 }, 500);
                    $mouseLeft.css('opacity', .6);
                    $mouseRight.delay(100).fadeIn();
                    $mouseAbout.delay(500).fadeIn();
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
            $('.copyright').css('bottom', 25);
            $('.about-next').css('bottom', '5%');
        }
    }
    if (_windowWidth >= 768 && _windowHeight >= 700) {
        $('.copyright').css('bottom', 50);
    } else if (_windowWidth >= 768 && _windowHeight <= 560) {
        $('.copyright').css('bottom', 25);
    } else if (_windowWidth >= 768 && _windowHeight <= 640) {
        $('.copyright').css('bottom', 40);
    }
});
/*  Jquery auto run function end */

/* window resize action began */
$(window).resize(function() {
    resizeWidth = $(window).width();
    totalgap = BasicWidth - resizeWidth;
    objectSize(); // include object size
    $('.face-left').css('width', _countentTimeWidth);
    $('.face-right').css('width', _countentTimeWidth);
    if (totalgap >= 256 || totalgap <= -256) {
        window.location.reload();
    }
});
/* window resize action end */


/**
 * ga script
 */
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-78820559-1', 'auto');
ga('send', 'pageview');
//end
