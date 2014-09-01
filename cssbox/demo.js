$(function () {
	var div1 = $('#div1');
	var div2 = $('#div2');
	var div3 = $('#div3');
	var messages = new Array();
	messages[0] = '绿色方块的 width 为：' + div3.width();
	messages[1] = '绿色方块的 innerWidth 为：' + div3.innerWidth();
	messages[2] = '绿色方块的 outerWidth 为：' + div3.outerWidth();
	messages[3] = '绿色方块的 height 为：' + div3.height();
	messages[4] = '绿色方块的 innerHeight 为：' + div3.innerHeight();
	messages[5] = '绿色方块的 outerHeight 为：' + div3.outerHeight();
	messages[6] = '绿色方块的 offset 为：（' + div3.offset.left + '，' + div3.offset.top + '）';
	messages[7] = '绿色方块的 position 为：（' + div3.position.left + '，' + div3.position.top + '）';
	messages[8] = '看来以上方法只能获取元素的内联样式！';
	$('#info').html(messages.join('<br/>'));
	//$('#info').empty();
});


























