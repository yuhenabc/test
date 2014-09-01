$(function () {
	$('window').ready(function(){
		$('#info').html('没有消息！');
	});
	$('#btn1').click(function() {
		$.growlUI(null, '你快乐吗？');
	});
	$('#btn2').mouseover(function() {
		$.growlUI(null, '我很快乐！');
	});
	$('#btn3').mouseover(function() {
		$.growlUI(null, '别听他瞎扯。');
	});
});
