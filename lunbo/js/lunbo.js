/*
* plugin: lunbo.js
* author: Joseph Weng
* license: MIT
*/
function Lunbo(div) {
	var obj = $("#" + div),
		top = obj.find(".lunbo-top"),
		lis = top.find("li"),
		len = lis.length - 1,
		bottom = obj.find(".lunbo-bottom");
	var arr_l = obj.find(".arr_l a");
	var arr_r = obj.find(".arr_r a");
	var str = '',
		curr = 0,
        interval = 3000;
	for (var i = 0; i <= len; i++) {
		str += '<a href="javascript:void(0);"></a>';
	}
	bottom.html(str);
	var as = bottom.find("a");
	var timer = null;

	function _play() {
		timer = setInterval(_go, interval);
	}

	function _pause() {
		clearInterval(timer);
	}

	function _go() {
		_show(curr);
		curr = _next(curr);
	}

	function _next(curr) {
		var index = curr;
		index += 1;
		if (index > len) index = 0;
		return index;
	}

	function _prev(curr) {
		var index = curr;
		index -= 1;
		if (index < 0) index = len;
		return index;
	}

	function _show(curr) {
        console.log(curr);
        var curr_li = $(lis[curr]);
		curr_li.css("display", "block");
        curr_li.siblings().css("display", "none");
        var img = curr_li.find("img");
		img.attr("src", img.attr("data-src"));
		as.removeClass("cur");
		$(as[curr]).addClass("cur");
	}

	arr_l.click(function() {
		curr = _prev(curr);
		_show(curr);
		return false;
	});

	arr_r.click(function() {
		_show(curr);
		curr = _next(curr);
		return false;
	});

	this.inits = function(n) {
        if ($.isNumeric(n) && n > 0) {
            interval = n;
        }
		_show(curr);
		curr = _next(curr);
		_play();
		as.each(function(s, a) {
			a = $(a);
			a.click(function() {
				_show(s);
				curr = s;
			});
		});
	};

    this.pause = _pause;
}
