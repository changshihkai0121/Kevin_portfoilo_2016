$(function() {
    //post choose-cat option information
    var $chooseOption = $('#choose-cat'),
    	$slideshowList = $('.slideshowInfo'),
        beforehtml_text = '',
        before_default = '';
    //past option
    for (i = 0; i < beforeIndex.length; i++) {
        beforehtml_text += '<option value=' + beforeIndex[i].index_id + '>' + beforeIndex[i].index_title;
        beforehtml_text += '</option>';
        $chooseOption.html(beforehtml_text);
    }
    for (var a = 0; a < beforeData.length; a++) {
    	before_default += '<li class=' + '\"slideshow_onecontent\"' + '><img src=' + beforeData[a].project_mainPic + ' alt=' + beforeData[a].project_title + ' /></li>';
    	$slideshowList.html(before_default);
    };
    // choose one and selected information
    $chooseOption.on('change', function() {
        var Value = $(this).find('option:selected').val(),
            templatecontent = '';
        if (Value == 'i00') {
            for (var i = 0; i < beforeData.length; i++) {
                templatecontent += '<li class=' + '\"slideshow_onecontent\"' + '><img src=' + beforeData[i].project_mainPic + ' alt=' + beforeData[i].project_title + ' /></li>';
                $slideshowList.html(templatecontent);
            };
        } else if (Value == 'i01') {
            for (var i = 0; i < beforeData.length; i++) {
                if (Value == beforeData[i].cat_id) {
                    templatecontent += '<li class=' + '\"slideshow_onecontent\"' + '><img src=' + beforeData[i].project_mainPic + ' alt=' + beforeData[i].project_title + ' /></li>';
                    $slideshowList.html(templatecontent);
                }
            };
        } else if (Value == 'i02') {
            for (var i = 0; i < beforeData.length; i++) {
                if (Value == beforeData[i].cat_id) {
                    templatecontent += '<li class=' + '\"slideshow_onecontent\"' + '><img src=' + beforeData[i].project_mainPic + ' alt=' + beforeData[i].project_title + ' /></li>';
                    $slideshowList.html(templatecontent);
                }
            };
        } else {}
    });
    // if (isRetina()) {
    //     $('.slideshow_onecontent').each(function() {
    //         $(this).find('img').attr('src', $(this).attr('src').replace('@1x', '@2x'));
    //     });
    // }
});
