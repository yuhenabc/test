//ÓÐÎÊÌâ

(function(b) {
	b.fn.imgLoad = function(f) {
		var d = this;
		if (!d.length || d[0].nodeName.toLowerCase() !== "img") {
			return d;
		}
		var e = b.extend({}, b.fn.imgLoad.defaults, f || {});
		var c = {};
		var g = d.length;
		var h = 0;
		if ("scroll" === e.event) {
			var a = new msc.event("scroll", 0);
			a.add("imgLoad", function(j) {
				for (var i in c) {
					if (j.scrollTop + j.height >= (c[i].offset().top + e.threshold) && (c[i].offset().top + c[i].height() >= j.scrollTop)) {
						c[i].trigger("imgLoad");
					}
				}
				if (h >= g) {
					g = h = c = null;
					msc.event.resize.remove("imgLoad");
					return false;
				}
			});
			msc.event.resize.add("imgLoad", function() {
				a.trigger("imgLoad");
			});
			setTimeout(function() {
				a.trigger("imgLoad");
			}, 50);
		}
		return d.each(function(k) {
			var j = $(this);
			c[k] = j;
			j.one("imgLoad", function() {
				if (!this["_imgLoad"]) {
					this["_imgLoad"] = 1;
					$("<img />").bind("load", function() {
						j.hide().attr("src", j.attr(e.attr))[e.effect]().removeAttr(e.attr);
					}).attr("src", j.attr(e.attr));
				}
				delete c[k];
				h++;
			});
			if ("scroll" !== e.event) {
				j.one(e.event, function() {
					if (c[k]) {
						c[k].trigger("imgLoad");
					}
				});
			}
		});
	};
	b.fn.imgLoad.defaults = {
		attr: "data-src",
		effect: "fadeIn",
		event: "scroll",
		threshold: 0
	};
}(jQuery));;