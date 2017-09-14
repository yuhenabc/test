$(function () {
	var div1 = $('#div1');
	var div2 = $('#div2');
	var div3 = $('#div3');

	var messagesL = [];
	messagesL.push('<strong>红色方块</strong>');
	messagesL.push('方块的 width() 为：' + div2.width());
	messagesL.push('方块的 height() 为：' + div2.height());
	messagesL.push('方块的 innerWidth() 为：' + div2.innerWidth());
	messagesL.push('方块的 innerHeight() 为：' + div2.innerHeight());
	messagesL.push('方块的 outerWidth() 为：' + div2.outerWidth());
	messagesL.push('方块的 outerHeight() 为：' + div2.outerHeight());
	messagesL.push('方块的 offset() 为：' + JSON.stringify(div2.offset()));
	messagesL.push('方块的 position() 为：' + JSON.stringify(div2.position()));
	messagesL.push('<br><strong>改为javascript原生属性为：</strong>');
	messagesL.push('方块的 clientWidth 为：' + div2.get(0).clientWidth);
	messagesL.push('方块的 clientHeight 为：' + div2.get(0).clientHeight);
	messagesL.push('方块的 clientTop 为：' + div2.get(0).clientTop);
	messagesL.push('方块的 clientLeft 为：' + div2.get(0).clientLeft);
	messagesL.push('方块的 offsetParent 为：' + div2.get(0).offsetParent);
	messagesL.push('方块的 offsetWidth 为：' + div2.get(0).offsetWidth);
	messagesL.push('方块的 offsetHeight 为：' + div2.get(0).offsetHeight);
	messagesL.push('方块的 offsetTop 为：' + div2.get(0).offsetTop);
	messagesL.push('方块的 offsetLeft 为：' + div2.get(0).offsetLeft);
	$('#info-left').html(messagesL.join('<br>'));

	var messagesR = [];
	messagesR.push('<strong>绿色方块</strong>');
	messagesR.push('方块的 width() 为：' + div3.width());
	messagesR.push('方块的 height() 为：' + div3.height());
	messagesR.push('方块的 innerWidth() 为：' + div3.innerWidth());
	messagesR.push('方块的 innerHeight() 为：' + div3.innerHeight());
	messagesR.push('方块的 outerWidth() 为：' + div3.outerWidth());
	messagesR.push('方块的 outerHeight() 为：' + div3.outerHeight());
	messagesR.push('方块的 offset() 为：' + JSON.stringify(div3.offset()));
	messagesR.push('方块的 position() 为：' + JSON.stringify(div3.position()));
	messagesR.push('<br><strong>改为javascript原生属性为：</strong>');
	messagesR.push('方块的 clientWidth 为：' + div3.get(0).clientWidth);
	messagesR.push('方块的 clientHeight 为：' + div3.get(0).clientHeight);
	messagesR.push('方块的 clientTop 为：' + div3.get(0).clientTop);
	messagesR.push('方块的 clientLeft 为：' + div3.get(0).clientLeft);
	messagesR.push('方块的 offsetParent 为：' + div3.get(0).offsetParent);
	messagesR.push('方块的 offsetWidth 为：' + div3.get(0).offsetWidth);
	messagesR.push('方块的 offsetHeight 为：' + div3.get(0).offsetHeight);
	messagesR.push('方块的 offsetTop 为：' + div3.get(0).offsetTop);
	messagesR.push('方块的 offsetLeft 为：' + div3.get(0).offsetLeft);
	$('#info-right').html(messagesR.join('<br>'));

	// console.log(div2);
	// console.log(div3);
});


























