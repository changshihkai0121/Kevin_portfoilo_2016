/**
===================================== 
Before page all script for Shih Kai Chang porfolio 
=====================================
**/
var $chooseOption = $('#choose-cat'), // post choose-cat option information
    $slideshowList = $('.slideshowInfo'),
    $choosecatPC = $('#choose-cat-PC'),
    $contentBlock = $('.contentBlock'),
    beforehtml_text = '',
    before_default = '',
    slidepage = 0;

$(function() {
    //past option pc & mobile is different template
    // option infomation
    for (i = 0; i < beforeIndex.length; i++) {
        if (_windowWidth <= 768) {
            beforehtml_text += '<option value=' + beforeIndex[i].index_id + '>' + beforeIndex[i].index_title;
            beforehtml_text += '</option>';
            $chooseOption.html(beforehtml_text);
        } else {
            beforehtml_text += '<div id=' + beforeIndex[i].index_id + ' class=' + '\"before-listBtn\"' + 'onClick=' + '\"PCselect_project(this.id)\"' + '>' + '<p>' + beforeIndex[i].index_title;
            beforehtml_text += '</p></div>';
            $choosecatPC.html(beforehtml_text);
        }
    }
    // infomation detail
    if (_windowWidth <= 768) {
        for (var a = 0; a < beforeData.length; a++) {
            before_default += '<li class=' + '\"slideshow-onecontent\"' + '><img src=' + beforeData[a].project_mainPic + ' alt=' + beforeData[a].project_title + ' /></li>';
            $slideshowList.html(before_default);
        }
    } else {
        frequency = Math.ceil(beforeData.length / 6);
        roundtime = 0;
        $slideshowList.html('');
        for (var i = 0; i < frequency; i++) {
            before_default += '<div class=' + '"slideShow-Block"' + '>';
            if (roundtime == 0) {
                for (var a = roundtime; a <= 5; a++) {
                    before_default += '<li class=' + '\"slideshow-onecontent\"' + '><img src=' + beforeData[a].project_mainPic + ' alt=' + beforeData[a].project_title + ' /></li>';
                };
            } else {
                for (var a = roundtime; a < beforeData.length; a++) {
                    before_default += '<li class=' + '\"slideshow-onecontent\"' + '><img src=' + beforeData[a].project_mainPic + ' alt=' + beforeData[a].project_title + ' /></li>';
                };
            }
            before_default += '</div>';
            roundtime = roundtime + 6;
            $slideshowList.html(before_default);
        };
    }
    slideshow_isRetina();
    setTimeout(function() {
        chooseHeight = $('.choose-slideshow-page').height();
        slideImgHeight = $('.slideshow-onecontent img').height();
        $('.choose-slideshow-page').css('line-height', chooseHeight + 'px');
        if (_windowWidth <= 768) {
            $contentBlock.css('height', slideImgHeight);
        }
    }, 500);
});

// choose one and selected information
$chooseOption.on('change', function() {
    slidepage = 0;
    var Value = $(this).find('option:selected').val(),
        slideshowContentHeight = $('.slideshow-onecontent').height(),
        templatecontent = '';
    if (Value == 'i00') {
        for (var i = 0; i < beforeData.length; i++) {
            templatecontent += '<li class=' + '\"slideshow-onecontent\"' + '><img src=' + beforeData[i].project_mainPic + ' alt=' + beforeData[i].project_title + ' /></li>';
            $slideshowList.html(templatecontent);
        };
        $('.slideshowInfo').animate({ 'bottom': slideshowContentHeight * slidepage });
        slideshow_isRetina();
    } else if (Value == 'i01') {
        for (var i = 0; i < beforeData.length; i++) {
            if (Value == beforeData[i].cat_id) {
                templatecontent += '<li class=' + '\"slideshow-onecontent\"' + '><img src=' + beforeData[i].project_mainPic + ' alt=' + beforeData[i].project_title + ' /></li>';
                $slideshowList.html(templatecontent);
            }
        };
        $('.slideshowInfo').animate({ 'bottom': slideshowContentHeight * slidepage });
        slideshow_isRetina();
    } else if (Value == 'i02') {
        for (var i = 0; i < beforeData.length; i++) {
            if (Value == beforeData[i].cat_id) {
                templatecontent += '<li class=' + '\"slideshow-onecontent\"' + '><img src=' + beforeData[i].project_mainPic + ' alt=' + beforeData[i].project_title + ' /></li>';
                $slideshowList.html(templatecontent);
            }
        };
        $('.slideshowInfo').animate({ 'bottom': slideshowContentHeight * slidepage });
        slideshow_isRetina();
    } else {}
});

//slideshow
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

// PC Btn click
function PCselect_project(btn_name) {
    var templatecontent = '';
    if (btn_name == 'i00') {
        frequency = Math.ceil(beforeData.length / 6);
        roundtime = 0;
        $slideshowList.html('');
        default_information = '';
        for (var i = 0; i < frequency; i++) {
            default_information += '<div class=' + '"slideShow-Block"' + '>';
            if (roundtime == 0) {
                for (var a = roundtime; a <= 5; a++) {
                    default_information += '<li class=' + '\"slideshow-onecontent\"' + '><img src=' + beforeData[a].project_mainPic + ' alt=' + beforeData[a].project_title + ' /></li>';
                };
            } else {
                for (var a = roundtime; a < beforeData.length; a++) {
                    default_information += '<li class=' + '\"slideshow-onecontent\"' + '><img src=' + beforeData[a].project_mainPic + ' alt=' + beforeData[a].project_title + ' /></li>';
                };
            }
            default_information += '</div>';
            roundtime = roundtime + 6;
            $slideshowList.html(default_information);
        };
    } else if (btn_name == 'i01') {
        $slideshowList.html('');
        PC_loadInfor(btn_name);
    } else if (btn_name == 'i02') {
        $slideshowList.html('');
        PC_loadInfor(btn_name);
    }
}

function slideshow_isRetina() {
    if (isRetina()) {
        $('.slideshow-onecontent').each(function() {
            $(this).find('img').attr('src', $(this).find('img').attr('src').replace('1x', '2x'));
        });
    }
}


function PC_loadInfor(choose) {
    var PC_datalength = 0;
    if (choose != 'i00') {
        for (var i = 0; i < beforeData.length; i++) {
            if (choose == beforeData[i].cat_id) {
                PC_datalength = PC_datalength + 1;
            }
        }
    } else {
        PC_datalength = beforeData.length;
    }
    frequency = Math.ceil(PC_datalength / 6);
    roundtime = 0;
    Pc_templateInfo = '';
    j = 0;
    //大於六筆資料
    if (PC_datalength > 6) {
        for (var i = 0; i < frequency; i++) { //執行數量為6的倍數
            Pc_templateInfo += '<div class=' + '"slideShow-Block"' + '>'; //外框
            if (roundtime == 0 && j <= 6) { //如果為第一層
                for (var a = roundtime; a < beforeData.length; a++) { //初始值為0 且值必須小於共有幾筆資料
                    if (choose == beforeData[a].cat_id && j < 6) { //判斷選擇的內容正確且不得大於六則
                        Pc_templateInfo += '<li class=' + '\"slideshow-onecontent\"' + '><img src=' + beforeData[a].project_mainPic + ' alt=' + beforeData[a].project_title + ' /></li>';
                        j = j + 1;
                        roundtime = roundtime + 1;
                    }
                };
            } else if (roundtime < beforeData.length && j >= 6) {
                for (var a = roundtime; a < PC_datalength; a++) {
                    Pc_templateInfo += '<li class=' + '\"slideshow-onecontent\"' + '><img src=' + beforeData[a].project_mainPic + ' alt=' + beforeData[a].project_title + ' /></li>';
                };
            }
            Pc_templateInfo += '</div>'; //外框結束

        };
        $slideshowList.html(Pc_templateInfo);
        //小於六筆資料
    } else {
        Pc_templateInfo += '<div class=' + '"slideShow-Block"' + '>';
        for (var a = roundtime; a < PC_datalength; a++) {
            Pc_templateInfo += '<li class=' + '\"slideshow-onecontent\"' + '><img src=' + beforeData[a].project_mainPic + ' alt=' + beforeData[a].project_title + ' /></li>';
        };
        Pc_templateInfo += '</div>';
        $slideshowList.html(Pc_templateInfo);
    }
}

$(window).resize(function() {
    objectSize();
    chooseHeight = $('.choose-slideshow-page').height();
    slideImgHeight = $('.slideshow-onecontent img').height();
    $('.choose-slideshow-page').css('line-height', chooseHeight + 'px');
    if (_windowWidth <= 768) {
        $('.contentBlock').css('height', slideImgHeight);
    }
});
