/**
 * Created by feng on 14-11-21.
 */
(function($) {

    $.fn.inputRandom = function(options) {

        var $self = $(this);

        var opts = $.extend({}, $.fn.inputRandom.defaults, options);

        var number,
            from = opts.from,
            to = opts.to,
            percent = Math.random();

        number = Math.round(from + percent * (to - from));

        $self.val(number);

        if (opts.callback) {
            var message = '我们给你的随机数是：' + number;
            opts.callback(message);
        }
    };

    $.fn.inputRandom.defaults = {
        from: 1000,
        to: 9999,
        callback: false
    };

})(jQuery);