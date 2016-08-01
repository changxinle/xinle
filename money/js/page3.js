$(document).ready(function() {
	// $("body").on("touchmove",function (ev) {
	// 	ev.preventDefault();
	// });

	$.ajax({
		url: 'main/page3.php',
		type: 'POST',
		dataType: 'html',
		data: ""
	})
	.done(function(res) {
		var arr = JSON.parse(res);
		var rank = 999;
		for (var i = 1; i < arr.length; i++) {
			if (arr[i].openid == arr[0].openid) {
				rank = i;
				break;
			}
		}
		$(".get h3").html("￥"+arr[arr.length-1]*5);
		$(".get p em").html(arr[0].score*5);
		$(".get p strong").html(rank);
	});
	
});