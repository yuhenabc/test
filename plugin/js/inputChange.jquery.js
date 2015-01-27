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
            _log(opts.scope);
        }

        function _log(v) {
            console.log(v);
        }
    };

    $.inputChange.defaults = {
        scope: 'body',
        value: ''
    };

})(jQuery);