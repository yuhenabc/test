/**
 * Created by feng on 15-01-27.
 */
(function($) {

    $.inputChange = function(options) {

        var opts = $.extend({}, $.inputChange.defaults, options);

        var $inputs = $('input[type=text]', opts.scope);
        if ($inputs.length > 0) {
            $.each($inputs, function(index, elem) {
                $(elem).val(opts.value);
            });
        }

        if (opts.callback) {
            opts.callback(opts.value);
        }
    };

    $.inputChange.defaults = {
        scope: 'body',
        value: '',
        callback: null
    };

})(jQuery);