/**
===================================== 
Before page script for Shih Kai Chang porfolio 
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
    BasicWidth = $(window).width();
    // past option pc & mobile is different template
    // option 內容
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
    // 詳細內容
    if (_windowWidth <= 768) {
        for (var a = 0; a < beforeData.length; a++) {
            before_default += '<li id=' + beforeData[a].project_id + ' class=' + '\"slideshow-onecontent\"' + ' onClick=' + '\"ChangePage(this.id)\"' + '>';
            before_default += '<div class=' + '\"tipsBlock\"' + '><h2>' + beforeData[a].project_title + '</h2><p>' + beforeData[a].project_cat + '</p></div>';
            before_default += '<img src=' + beforeData[a].project_mainPic + ' alt=' + beforeData[a].project_title + ' /></li>';
            $slideshowList.html(before_default);
        }
    } else { // 電腦尺寸則分成6個一組帶入
        frequency = Math.ceil(beforeData.length / 6);
        roundtime = 0;
        $slideshowList.html('');
        for (var i = 0; i < frequency; i++) {
            before_default += '<div class=' + '"slideShow-Block"' + '>';
            if (roundtime == 0) {
                for (var a = roundtime; a <= 5; a++) {
                    before_template(a);
                };
            } else {
                for (var a = roundtime; a < beforeData.length; a++) {
                    before_template(a);
                };
            }
            before_default += '</div>';
            roundtime = roundtime + 6;
            $slideshowList.html(before_default);
        };
    }
    slideshow_isRetina(); //如果顯示其為retina則換成2倍的圖片
    //自動計算高度及行高
    var refreshInterval = setInterval(function() {
        slideImgHeight = $('.slideshow-onecontent img').height();
        if (slideImgHeight > 0) {
            chooseHeight = $('.choose-slideshow-page').height();
            $('.choose-slideshow-page').css('line-height', chooseHeight + 'px');
            if (_windowWidth <= 768) {
                $contentBlock.css('height', slideImgHeight);
            }
            clearInterval(refreshInterval);
        }
    }, 500);
});

// 利用option選擇內容時 則得到不同的資訊內容
$chooseOption.on('change', function() {
    slidepage = 0;
    var Value = $(this).find('option:selected').val(),
        slideshowContentHeight = $('.slideshow-onecontent').height(),
        templatecontent = '';
    if (Value == 'i00') {
        for (var i = 0; i < beforeData.length; i++) {
            templatecontent += '<li id=' + beforeData[i].project_id + ' class=' + '\"slideshow-onecontent\"' + ' onClick=' + '\"ChangePage(this.id)\"' + '>';
            templatecontent += '<div class=' + '\"tipsBlock\"' + '><h2>' + beforeData[i].project_title + '</h2><p>' + beforeData[i].project_cat + '</p></div>';
            templatecontent += '<img src=' + beforeData[i].project_mainPic + ' alt=' + beforeData[i].project_title + ' /></li>';
            $slideshowList.html(templatecontent);
        };
        $slideshowList.animate({ 'bottom': slideshowContentHeight * slidepage });
        slideshow_isRetina();
    } else if (Value == 'i01') {
        for (var i = 0; i < beforeData.length; i++) {
            if (Value == beforeData[i].cat_id) {
                templatecontent += '<li id=' + beforeData[i].project_id + ' class=' + '\"slideshow-onecontent\"' + ' onClick=' + '\"ChangePage(this.id)\"' + '>';
                templatecontent += '<div class=' + '\"tipsBlock\"' + '><h2>' + beforeData[i].project_title + '</h2><p>' + beforeData[i].project_cat + '</p></div>';
                templatecontent += '<img src=' + beforeData[i].project_mainPic + ' alt=' + beforeData[i].project_title + ' /></li>';
                // templatecontent += '<li id=' + beforeData[i].project_id + ' class=' + '\"slideshow-onecontent\"' + ' onClick=' + '\"ChangePage(this.id)\"' + '><img src=' + beforeData[i].project_mainPic + ' alt=' + beforeData[i].project_title + ' /></li>';
                $slideshowList.html(templatecontent);
            }
        };
        $slideshowList.animate({ 'bottom': slideshowContentHeight * slidepage });
        slideshow_isRetina();
    } else if (Value == 'i02') {
        for (var i = 0; i < beforeData.length; i++) {
            if (Value == beforeData[i].cat_id) {
                templatecontent += '<li id=' + beforeData[i].project_id + ' class=' + '\"slideshow-onecontent\"' + ' onClick=' + '\"ChangePage(this.id)\"' + '>';
                templatecontent += '<div class=' + '\"tipsBlock\"' + '><h2>' + beforeData[i].project_title + '</h2><p>' + beforeData[i].project_cat + '</p></div>';
                templatecontent += '<img src=' + beforeData[i].project_mainPic + ' alt=' + beforeData[i].project_title + ' /></li>';
                // templatecontent += '<li id=' + beforeData[i].project_id + ' class=' + '\"slideshow-onecontent\"' + ' onClick=' + '\"ChangePage(this.id)\"' + '><img src=' + beforeData[i].project_mainPic + ' alt=' + beforeData[i].project_title + ' /></li>';
                $slideshowList.html(templatecontent);
            }
        };
        $slideshowList.animate({ 'bottom': slideshowContentHeight * slidepage });
        slideshow_isRetina();
    }
});

// slideshow按鈕的動作
function slideshowBtn(btnID) { //判斷點哪一顆
    var slideshowContentHeight = $('.slideshow-onecontent').height(),
        slideshowInfobox = $slideshowList.height(),
        datalength = $('.slideshow-onecontent').length,
        SlideBlockWidth = $('.slideShow-Block').width(); // slideshow-block width
    objectSize(); // 將Device寬高帶入
    if (_windowWidth <= 768) { // 判斷螢幕尺寸
        switch (btnID) {
            case 'slideshownext':
                if (datalength >= slidepage) { //如果不是最後一張
                    slidepage = slidepage + 1;
                    if (slidepage < datalength) {
                        $slideshowList.animate({ 'bottom': slideshowContentHeight * slidepage });
                    } else {
                        slidepage = 0;
                        $slideshowList.animate({ 'bottom': slideshowContentHeight * slidepage });
                    }
                }
                break;
            case 'slideshowPrivate':
                if (slidepage <= 0) { //如果是最後一張
                    slidepage = (datalength - 1);
                    $slideshowList.animate({ 'bottom': slideshowContentHeight * slidepage });
                } else {
                    slidepage = slidepage - 1;
                    $slideshowList.animate({ 'bottom': slideshowContentHeight * slidepage });
                }
                break;
        }
    } else {
        var $slideBoxBlock = $('.slideShow-Block');
        slideboxsWidth = $slideBoxBlock.width();
        slideboxsLength = $slideBoxBlock.length;
        movespeed = 500; //animate speed
        //choose btn name
        switch (btnID) {
            case 'slideshowPrivate':
                if (slideboxsLength >= 2) {
                    if (slidepage == 0) {
                        slidepage = slidepage - 1;
                        $slideshowList.animate({ 'left': slideboxsWidth * slidepage }, movespeed);
                    } else {
                        slidepage = 0;
                        $slideshowList.animate({ 'left': slideboxsWidth * slidepage }, movespeed);
                    }
                } else {
                    return;
                }
                break;
            case 'slideshownext':
                if (slideboxsLength >= 2) {
                    if (slidepage == 0) {
                        slidepage = slidepage - 1;
                        $slideshowList.animate({ 'left': slideboxsWidth * slidepage }, movespeed);
                    } else {
                        slidepage = 0;
                        $slideshowList.animate({ 'left': slideboxsWidth * slidepage }, movespeed);
                    }
                } else {
                    return;
                }
                break;
        }
    }
}

// PC 版本選擇按鈕點擊後
function PCselect_project(btn_name) {
    var templatecontent = '';
    slidepage = 0;
    if (btn_name == 'i00') {
        frequency = Math.ceil(beforeData.length / 6);
        roundtime = 0;
        $slideshowList.html('');
        default_information = '';
        for (var i = 0; i < frequency; i++) {
            default_information += '<div class=' + '"slideShow-Block"' + '>';
            if (roundtime == 0) {
                for (var a = roundtime; a <= 5; a++) {
                    default_template(a);
                };
            } else {
                for (var a = roundtime; a < beforeData.length; a++) {
                    default_template(a);
                };
            }
            default_information += '</div>';
            roundtime = roundtime + 6;
            $slideshowList.html(default_information);
        };
        $slideshowList.animate({ 'left': slidepage });
    } else if (btn_name == 'i01') {
        $slideshowList.html('');
        PC_loadInfor(btn_name);
        $slideshowList.animate({ 'left': slidepage });
    } else if (btn_name == 'i02') {
        $slideshowList.html('');
        PC_loadInfor(btn_name);
        $slideshowList.animate({ 'left': slidepage });
    }
}

//非 ALL的選擇
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
                        PC_template(a);
                        j = j + 1;
                        roundtime = roundtime + 1;
                    }
                };
            } else if (roundtime < beforeData.length && j >= 6) {
                for (var a = roundtime; a < PC_datalength; a++) {
                    PC_template(a);
                };
            }
            Pc_templateInfo += '</div>'; //外框結束
        };
        $slideshowList.html(Pc_templateInfo);
        //小於六筆資料
    } else if (choose == 'i02') {
        for (var i = 0; i < frequency; i++) { //執行數量為6的倍數
            Pc_templateInfo += '<div class=' + '"slideShow-Block"' + '>'; //外框
            if (roundtime == 0 && j <= 6) { //如果為第一層
                for (var a = roundtime; a < beforeData.length; a++) { //初始值為0 且值必須小於共有幾筆資料
                    if (choose == beforeData[a].cat_id && j < 6) { //判斷選擇的內容正確且不得大於六則
                        PC_template(a);
                        j = j + 1;
                        roundtime = roundtime + 1;
                    }
                };
            } else if (roundtime < beforeData.length && j >= 6) {
                for (var a = roundtime; a < PC_datalength; a++) {
                    PC_template(a);
                };
            }
            Pc_templateInfo += '</div>'; //外框結束
        };
        $slideshowList.html(Pc_templateInfo);
    } else if (choose == 'i01') {
        Pc_templateInfo += '<div class=' + '"slideShow-Block"' + '>';
        for (var a = roundtime; a < PC_datalength; a++) {
            PC_template(a);
        };
        Pc_templateInfo += '</div>';
        $slideshowList.html(Pc_templateInfo);
    }
}

/**
 * PC_template
 */
function PC_template(numA) {
    Pc_templateInfo += '<li class=' + '\"slideshow-onecontent\"' + '>';
    Pc_templateInfo += '<div id=' + beforeData[numA].project_id + ' class=' + '\"mask-cover\"' + 'onClick=' + '\"ChangePage(this.id)\"' + '><p>' + beforeData[numA].project_cat + '</p><h2>';
    Pc_templateInfo += beforeData[numA].project_title + '</h2></div>' + '<img src=' + beforeData[numA].project_mainPic_PC + ' alt=' + beforeData[numA].project_title + ' /></li>';
}

function default_template(numA) {
    default_information += '<li class=' + '\"slideshow-onecontent\"' + '>';
    default_information += '<div id=' + beforeData[numA].project_id + ' class=' + '\"mask-cover\"' + 'onClick=' + '\"ChangePage(this.id)\"' + '><p>' + beforeData[numA].project_cat + '</p><h2>';
    default_information += beforeData[numA].project_title + '</h2></div>' + '<img src=' + beforeData[numA].project_mainPic_PC + ' alt=' + beforeData[numA].project_title + ' /></li>';
}

function before_template(numA) {
    before_default += '<li class=' + '\"slideshow-onecontent\"' + '>';
    before_default += '<div id=' + beforeData[numA].project_id + ' class=' + '\"mask-cover\"' + 'onClick=' + '\"ChangePage(this.id)\"' + '><p>' + beforeData[numA].project_cat + '</p><h2>';
    before_default += beforeData[numA].project_title + '</h2></div>' + '<img src=' + beforeData[numA].project_mainPic_PC + ' alt=' + beforeData[numA].project_title + ' /></li>';
}
//PC_template end

/**
 * Slideshow retina is true or false
 */
function slideshow_isRetina() {
    if (isRetina()) {
        $('.slideshow-onecontent').each(function() {
            $(this).find('img').attr('src', $(this).find('img').attr('src').replace('1x', '2x'));
        });
    }
}
// Slideshow retina is true or false end

/**
 * change Page location
 */
function ChangePage(projectID) {
    projectNum = projectID.split('p', 2)[1]; // 代表點擊的頁面
    pageUrl = '/2016afterInfor.html?pages=yji4qup3ru6' + projectNum;
    changePage(pageUrl);
}
// change Page location

$(window).resize(function() {
    objectSize();
    chooseHeight = $('.choose-slideshow-page').height();
    slideImgHeight = $('.slideshow-onecontent img').height();
    $('.choose-slideshow-page').css('line-height', chooseHeight + 'px');
    if (_windowWidth <= 768) {
        $('.contentBlock').css('height', slideImgHeight);
    }
    resizeWidth = $(window).width();
    totalgap = BasicWidth - resizeWidth;
    if (totalgap >= 512 || totalgap <= -512) {
        window.location.reload();
    }
});
