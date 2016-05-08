$(function() {
    //post choose-cat option information
    var $chooseOption = $('#choose-cat'),
        beforehtml_text = '';
    for (i = 0; i < beforeIndex.length; i++) {
        beforehtml_text += '<option value=' + beforeIndex[i].index_id + '>' + beforeIndex[i].index_title;
        beforehtml_text += '</option>';
        $chooseOption.html(beforehtml_text);
    }
    $chooseOption.on('change', function() {
        var Value = $(this).find('option:selected').val();
        if (Value == 'i00') { console.log(Value); } else if (Value == 'i01') { console.log(Value); } else if (Value == 'i02') { console.log(Value); } else {}
    });
});
