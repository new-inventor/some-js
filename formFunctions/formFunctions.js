;(function ($, undefined) {
    $.fn.moveTo = function ($block, clearDestinationHtml) {
        if (clearDestinationHtml) {
            $block.html('');
        }
        $block.append($(this));

        return $(this);
    };

    $.fn.fillForm = function (data) {
        $(this).getFields().each(function (index, item) {
            var $field = $(item);
            var name = $field.attr('name');
            $field.setFieldValue(data[name]);
        });

        return $(this);
    };

    $.fn.clearForm = function (withHidden) {
        $(this).getFields(withHidden).each(function (index, item) {
            $(item).setFieldValue();
        });

        return $(this);
    };

    $.fn.setFieldValue = function (value) {
        var $field = $(this);
        var tag = $field.prop('tagName');
        if (tag === 'SELECT') {
            if (value !== undefined) {
                $field.val(value);
            } else {
                $field.val($field.find('option:first-child').val());
            }
        } else if (tag === 'TEXTAREA') {
            $field.text(value);
        } else if (tag === 'INPUT') {
            var fieldType = $field.attr('type');
            if (fieldType === 'checkbox' || fieldType === 'radio') {
                if (value !== undefined && value) {
                    $field.attr('checked', 'checked');
                } else {
                    $field.removeAttr('checked');
                }
            } else {
                $field.val(value);
            }
        }
        $field.change();

        return $(this);
    };

    $.fn.getFields = function (withHidden) {
        var selector = 'input:not([type=submit], [type=reset], [type=button]' +
            (withHidden !== undefined && withHidden ? '' : ', [type=hidden]') +
            '), select, textarea';
        return $(this).find(selector);
    };
})(jQuery);