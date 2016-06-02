/**
===================================== 
Before page in history for Shih Kai Chang porfolio 
=====================================
**/
var template_Infor = '',
    select_text = '',
    slidecounter = 0,
    listMove = 0,
    windowLocationUrl = window.location.href,
    $slideshownext = $('#slideshownext'),
    $slideshowPrivate = $('#slideshowPrivate'),
    $slideshowContainer = $('#slideshow-container');

// auto run script
$(function() {
    objectSize();
    BasicWidth = $(window).width(); //Basic width when enter this page
    pageNum = 'p' + windowLocationUrl.split('yji4qup3ru6')[1]; // 得到為第幾個單元的頁面
    // 宣告 通用函數及字串
    var $chooseOption = $('#choose-cat'),
        $choosecatPC = $('#choose-cat-PC'),
        selectnum = 0;
    // get template
    for (var i = 0; i < beforeInformation.length; i++) {
        if (beforeInformation[i].project_id === pageNum) {
            template_Information(i, selectnum);
            template_selectBox_PC(i);
            selectnum = selectnum + 1;
        }
    };
    $choosecatPC.html(select_text);
    $slideshowContainer.html(template_Infor);
    // get template end
    content_length = $slideshowContainer.find('.content').length; // get load object quantity
    //數字計算
    if (_windowWidth >= 1024) {
        content_width = $('.BF-container').width();
        content_total = content_width * content_length;
        if (content_length == 1) {
            one_content = content_width;
            $('.choose-slideshow-page').hide();
        } else {
            one_content = content_total / content_length;
        }
        $('.BF-active').show();
        $slideshowContainer.width(content_total);
        $slideshowContainer.find('.content').css('width', one_content);
    } else {
        slideshowHeight = $('.BF-container').height();
        content_total = slideshowHeight * content_length;
        if (content_length == 1) {
            one_content = slideshowHeight;
            $('.choose-slideshow-page').hide();
        } else {
            one_content = content_total / content_length;
        }
        $slideshowContainer.height(slideshowHeight * content_length);
        $slideshowContainer.find('.content').css('height', one_content);
        $slideshownext.css('display', 'inline-block');
    }
});
$(window).resize(function() {
    objectSize();
    // 數字計算
    if (_windowWidth >= 1024) {
        content_width = $('.BF-container').width();
        content_total = content_width * content_length;
        if (content_length > 2) {
            one_content = content_width;
        } else {
            one_content = content_total / content_length;
        }
        $('#slideshow-container').width(content_total);
        $('#slideshow-container .content').css('width', one_content);
    } else {
        slideshowHeight = $('.BF-container').height();
        $slideshowContainer.height(slideshowHeight * content_length);
        content_height = $('.BF-container').height();
        content_total = content_height * content_length;
        if (content_length > 2) {
            one_content = content_height;
        } else {
            one_content = content_total / content_length;
        }
    }
    resizeWidth = $(window).width();
    totalgap = BasicWidth - resizeWidth;
    if (totalgap >= 512 || totalgap <= -512) {
        window.location.reload();
    }
});
// all into template
function template_Information(numI, selectnum) {
    add_id = 'contentBox' + selectnum;
    template_Infor += '<div id=' + add_id + ' class=' + '\"content\"' + "><div class=" + '\"BF-image\"' + "><img src=" + beforeInformation[numI].project_Img.img01 + ' alt=' + beforeInformation[numI].project_title;
    template_Infor += '></div><div class=' + '\"BF-block\"' + '><div class=' + '\"BF-Title\"' + '>' + beforeInformation[numI].project_title + '<span class=' + '\"BF-projectCat\"' + '>' + beforeInformation[numI].project_cat + '</span>';
    template_Infor += '</div><div class=' + '\"BF-Information\"' + '>' + beforeInformation[numI].project_Infor + "</div></div></div>";
}

function template_selectBox_PC(numA) {
    listMove = listMove + 1;
    add_class = 'selectBox-' + listMove;
    select_text += '<div id=' + add_class + ' class=' + '\"before-listBtn\"' + ' onclick=' + '\"list_Tag(this.id)\"' + '>' + '<p>' + beforeInformation[numA].project_title;
    select_text += '</p></div>';
}
//template end

function list_Tag(tagID) {
    listTag_id = tagID.split('-')[1];
    move_list = Number(listTag_id) - 1;
    $slideshowContainer.animate({ 'right': move_list * one_content });
}

function slideshowBtn(projectID) {
    if (_windowWidth >= 1024) {
        switch (projectID) {
            case 'slideshownext':
                slidecounter = slidecounter + 1;
                $slideshowContainer.find('.content').removeClass('BF-active');
                if (slidecounter < content_length) { //在資料範圍內則繼續往左移動
                    $slideshowContainer.animate({ 'right': slidecounter * one_content });
                } else { //如果超出總量則跳回第一頁
                    slidecounter = 0;
                    $slideshowContainer.animate({ 'right': slidecounter * one_content });
                }
                break;
            case 'slideshowPrivate':
                slidecounter = slidecounter - 1;
                $slideshowContainer.find('.content').removeClass('BF-active');
                if (slidecounter < 0) { //如果超出總量則回到最後一則
                    slidecounter = content_length - 1;
                    $slideshowContainer.animate({ 'right': slidecounter * one_content });
                } else { //在資料範圍內則繼續往左移動
                    $slideshowContainer.animate({ 'right': slidecounter * one_content });
                }
                break;
        }
    } else {
        switch (projectID) {
            case 'slideshownext':
                slidecounter = slidecounter + 1;
                $slideshowContainer.animate({ 'bottom': slidecounter * one_content });
                if (slidecounter >= content_length - 1) {
                    $slideshownext.fadeOut();
                    $slideshowPrivate.width('100%');
                    $slideshowPrivate.fadeIn();
                }
                break;
            case 'slideshowPrivate':
                slidecounter = 0;
                $slideshowContainer.animate({ 'bottom': slidecounter * one_content });
                $slideshownext.fadeIn();
                $slideshowPrivate.fadeOut();
                break
        }
    }
}
