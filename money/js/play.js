$(document).ready(function() {
	// $("body").on("touchmove",function (ev) {
	// 	ev.preventDefault();
	// });
	$(".content").height($(window).height());
	$(".content").css("background-size", $(window).width()+"px "+$(window).height()+"px")
	
	var arr_src = ["img/hope.png","img/feel.png","img/lei.png"];
	var count = 0;
	var timer_bol = 1;
	var time_count = 10;
	var timer = null;
	var animate_bol = 1;
	var count_bol = 1;
	touch.on('#money_box', 'touchstart', function(ev){
		ev.preventDefault();
		count_bol = 1;
	});
	touch.on('#money_box', 'swipeup', function(ev){
		if (timer_bol) {
			$(".hand").hide();
			timer = setInterval(function () {
				time_count--;
				$(".clock_box").html(time_count);
				$(".active_font img").attr({"src":arr_src[time_count%3]});
				if (time_count <= 0) {
					clearInterval(timer);
					$(".clock_box").html(0);
					
					$.ajax({
						url: 'main/update_score.php',
						type: 'POST',
						dataType: 'html',
						data: "score="+count
					})
					.done(function() {
						window.location="score.html";
					});
				}	 
			},1000)
			timer_bol = 0;
		}
		if (count_bol) {
			count_bol = 0;
			count++;
			var bai = Math.floor(count/100);
			var shi = Math.floor(count%100/10);
			var ge = count%10;
			$(".bai").html(bai);
			$(".shi").html(shi);
			$(".ge").html(ge);
			$("#big_money").append("<img src='img/big_money.jpg'>");
			setTimeout(function () {
				 $("#big_money img:nth-child(1)").remove();
			},1000);
			// if (animate_bol) {
				// animate_bol = 0;
				
				
				// $(".big_money").show();
				// $(".big_money").animate({"width": 0,"top": -1000,"left": "50%"},500,
				// 	function () {
				// 		$(".big_money").hide();
				// 		$(".big_money").css({"width":"5.671875rem","top":0,"left":"2.078125rem"});
				// 		animate_bol = 1;
				// 	});

			// }
		}
			
	
		
	});

});						