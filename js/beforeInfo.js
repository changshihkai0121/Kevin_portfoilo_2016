/**
===================================== 
Before page in history for Shih Kai Chang porfolio 
=====================================
**/
var template_Infor = '',
    windowLocationUrl = window.location.href;
$(function() {
    pageNum = 'p' + windowLocationUrl.split('yji4qup3ru6')[1]; // 得到為第幾個單元的頁面
    var $pageInfor = $('#pageInfor');
    for (var i = 0; i < beforeInformation.length; i++) {
        if (beforeInformation[i].project_id === pageNum) {
            template_Information(i);
        }
    };
    $pageInfor.html(template_Infor)
});


// all into template
function template_Information(numI) {
    template_Infor += '<div class=' + '\"content\"' + "><img src=" + beforeInformation[numI].project_Img.img01;
    template_Infor += ' alt=' + beforeInformation[numI].project_title + " class=" + '\"BF-Image\"';
    template_Infor += '><div class=' + '\"BF-block\"' + '><div class=' + '\"BF-Title\"' + '>' + beforeInformation[numI].project_title;
    template_Infor += '</div><div class=' + '\"BF-Information\"' + '>' + beforeInformation[numI].project_Infor + "</div></div></div>";
}
