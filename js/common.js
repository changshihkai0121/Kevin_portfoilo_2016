//portfoilo of Shih-Kai
var windowWidth = $(window).width();
var windowHeight = $(window).height();

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

// Jquery auto run function began
$(function() {
    if (isRetina()) {
    	// all classname is images-icon change
        $('.images-icon').each(function(){
            $(this).attr('src',$(this).attr('src').replace('.png','.svgz'));
        });

    } else {

    };
});
/*	Jquery auto run function end
--------------------------------
*/

// window resize action began
$(window).resize(function() {});
/* window resize action end
---------------------------
*/

// window scroll animate began
$(window).scroll(function() {});
/* window scroll animate end
 */
