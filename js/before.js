//post choose-cat option information
var $chooseOption = $('#choose-cat'),
    $slideshowList = $('.slideshowInfo'),
    beforehtml_text = '',
    before_default = '';
$(function() {
    //past option
    for (i = 0; i < beforeIndex.length; i++) {
        beforehtml_text += '<option value=' + beforeIndex[i].index_id + '>' + beforeIndex[i].index_title;
        beforehtml_text += '</option>';
        $chooseOption.html(beforehtml_text);
    }
    for (var a = 0; a < beforeData.length; a++) {
        before_default += '<li class=' + '\"slideshow-onecontent\"' + '><img src=' + beforeData[a].project_mainPic + ' alt=' + beforeData[a].project_title + ' /></li>';
        $slideshowList.html(before_default);
    };
    slideshow_isRetina();
});

// choose one and selected information
$chooseOption.on('change', function() {
    var Value = $(this).find('option:selected').val(),
        slideshowContentHeight = $('.slideshow-onecontent').height(),
        templatecontent = '';
    if (Value == 'i00') {
        for (var i = 0; i < beforeData.length; i++) {
            templatecontent += '<li class=' + '\"slideshow-onecontent\"' + '><img src=' + beforeData[i].project_mainPic + ' alt=' + beforeData[i].project_title + ' /></li>';
            $slideshowList.html(templatecontent);
        };
        $('.slideshowInfo').animate({ 'bottom': slideshowContentHeight * 0 });
        slideshow_isRetina();
    } else if (Value == 'i01') {
        for (var i = 0; i < beforeData.length; i++) {
            if (Value == beforeData[i].cat_id) {
                templatecontent += '<li class=' + '\"slideshow-onecontent\"' + '><img src=' + beforeData[i].project_mainPic + ' alt=' + beforeData[i].project_title + ' /></li>';
                $slideshowList.html(templatecontent);
            }
        };
        $('.slideshowInfo').animate({ 'bottom': slideshowContentHeight * 0 });
        slideshow_isRetina();
    } else if (Value == 'i02') {
        for (var i = 0; i < beforeData.length; i++) {
            if (Value == beforeData[i].cat_id) {
                templatecontent += '<li class=' + '\"slideshow-onecontent\"' + '><img src=' + beforeData[i].project_mainPic + ' alt=' + beforeData[i].project_title + ' /></li>';
                $slideshowList.html(templatecontent);
            }
        };
        $('.slideshowInfo').animate({ 'bottom': slideshowContentHeight * 0 });
        slideshow_isRetina();
    } else {}
});

//slideshow
var slidepage = 0;

function slideshowBtn(btnID) {
    var slideshowContentHeight = $('.slideshow-onecontent').height(),
        slideshowInfobox = $('.slideshowInfo').height(),
        datalength = $('.slideshow-onecontent').length;
    if (btnID == 'slideshowPrivate') {
        if (datalength >= slidepage) {
            slidepage = slidepage + 1;
            if (slidepage < datalength) {
                $('.slideshowInfo').animate({ 'bottom': slideshowContentHeight * slidepage });
            } else {
                slidepage = 0;
                $('.slideshowInfo').animate({ 'bottom': slideshowContentHeight * slidepage });
            }
        }
    } else if (btnID == 'slideshownext') {
        if (slidepage <= 0) {
            slidepage = (datalength - 1);
            $('.slideshowInfo').animate({ 'bottom': slideshowContentHeight * slidepage });
        } else {
            slidepage = slidepage - 1;
            $('.slideshowInfo').animate({ 'bottom': slideshowContentHeight * slidepage });
        }
    }
}

function slideshow_isRetina() {
    if (isRetina()) {
        $('.slideshow-onecontent').each(function() {
            $(this).find('img').attr('src', $(this).find('img').attr('src').replace('1x', '2x'));
        });
    }
}
