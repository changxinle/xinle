$(document).ready(function() {
	$(".content").height($(window).height());

	// $("body").on("touchmove",function (ev) {
	// 	ev.preventDefault();
	// });

	$(".content").css("background-size", $(window).width()+"px "+$(window).height()+"px")
	// 开始
	$(".start").on("tap",function () {
		$.get('main/go_or_al.php',function(res) {
			if (res == "insert") {
				$(".user_info").show();
			}else{
				window.location.href = "game.html";
			}
			
		});	 
	})
	$("#submit").on("tap",function () {
		$.ajax({
			url: 'main/insert_name_tel.php',
			type: 'POST',
			dataType: 'html',
			data: "name="+$("#name").val()+"&tel="+$("#tel").val()
		})
		.done(function() {
			window.location.href = "game.html";
		});
		
	})



	$(".user_info .X").on("tap",function () {
		 $(".user_info").hide();
	})
	// 提交数据，开始游戏



	

	// 数钱榜
	$(".bottom_btn1").on("tap",function () {
		$("#rank").html("");
		$(".rank").show();
		$(this).css("background-position", "0 -1.421875rem");
		$.ajax({
			url: 'main/get_rank.php',
			type: 'POST',
			dataType: 'html',
			data: ""
		})
		.done(function(res) {
			var arr = JSON.parse(res);
			for (var i = 0; i < arr.length; i++) {
				$("#rank").append("<li></li>");
				if ((i+1)>3) {
					$("#rank li:nth-child("+(i+1)+")").append("<span class='rank"+(i+1)+"'>"+(i+1)+"</span>");
				}else {
					$("#rank li:nth-child("+(i+1)+")").append("<span class='rank"+(i+1)+"'></span>");
				}
				$("#rank li:nth-child("+(i+1)+")").append("<img src='"+arr[i].head_img+"'>");
				$("#rank li:nth-child("+(i+1)+")").append("<p>"+arr[i].nickname+"</p>");
				$("#rank li:nth-child("+(i+1)+")").append("<em>"+arr[i].score+"分</em>")
			}
		});
		








	})
	$(".rank .X").on("tap",function () {
		$(".rank").hide();
		$(".bottom_btn1").css("background-position", "0 0");
	})
	// 活动规则
	$(".bottom_btn2").on("tap",function () {
		$(".rule").show();
		$(this).css("background-position", "-2.015625rem -1.421875rem");

	})
	$(".rule .X").on("tap",function () {
		$(".rule").hide();
		$(".bottom_btn2").css("background-position", "-2.015625rem 0");
	})
	// 活动奖品
	$(".bottom_btn3").on("tap",function () {
		$(".prize").show();
		$(this).css("background-position", "-4.03125rem -1.421875rem");
	})
	$(".prize .X").on("tap",function () {
		$(".prize").hide();
		$(".bottom_btn3").css("background-position", "-4.03125rem 0");
	})
	// 奖券使用说明
	$(".bottom_btn4").on("tap",function () {
		$(".explain").show();
		$(this).css("background-position", "-6.046875rem -1.421875rem");
	})
	$(".explain .X").on("tap",function () {
		$(".explain").hide();
		$(".bottom_btn4").css("background-position", "-6.046875rem 0");
	})



	// 再来一次
	$(".again").on("tap",function () {
		 window.location.href = "game.html";
	})

	// 分享
	$(".share").on("tap",function () {
		$(".share_box").show();
	})
	$(".share_bg").on("tap",function () {
		$(".share_box").hide();
	})






});