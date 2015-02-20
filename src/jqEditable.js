/**
 * @author naoufal el masbahi wen <naoufal.elmasbahi@gmail.com>
 * version: 1.1.0
 */

!function ($) {

 
    // TOOLS DEFINITION
    // ======================

    var editeThis = function (editable) {
        var that = this;
        var text_back = "";

        text_back = editable.text();
        editable.css('padding', '0px')
        editable.removeClass("editable")
        var height = editable.height() < 21 ? '' : '' + editable.height() + 'px'
        editable.html('');

        var input = $('<input></input>')
            .attr({
                'type': 'text',
                'name': 'fname',
                'id': 'txt_fullname',
                'value': text_back
            })
            .css('width', '100%')
            .css('border-radius', '0px')
            .css('box-sizing', 'border-box')
            .css('height', height)
            .addClass('form-control')
            .appendTo(editable)

        input.focus();
        input.keypress(function (e) {
            var key = e.which;
            if (key == 13)  // the enter key code
            {
                var name = input.val();
                editable.text(name);
                editable.css('padding', name === '' ? '10px' : '');
                editable.addClass("editable");
            }
        });

        input.blur(function (e) {
            editable.text(text_back);
            editable.css('padding', text_back == '' ? '10px' : '')
            editable.addClass("editable")
        });
    };

    // jqEditable PLUGIN DEFINITION
    // =======================

    $.fn.jqEditable = function (option) {
        var that = this;
        that.on('dblclick', function () {
            console.log(5)
            editeThis($(this));
        });
    };

} (jQuery);
