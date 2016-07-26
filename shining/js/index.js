window.onload = function (){

	var banner = document.getElementById("banner");
	var banner_img = banner.getElementsByTagName("img");
	var pagination = document.getElementById("pagination");
	var paginations = pagination.getElementsByTagName("span");
	var timer = null;
	var num = 0;

	function play(){
		for (var i = 0; i < paginations.length; i ++){
			banner_img[i].className = "";
			paginations[i].className = "";
		}
		banner_img[num].className = "banner-active";
		paginations[num].className = "pagination-active";
	}

	function autoplay(){
		timer = setInterval(function (){
			num ++;
			if(num > paginations.length - 1){
				num = 0;
			}
			play();
		},2000)
	}

	for (var i = 0; i < paginations.length; i ++){
		paginations[i].index = i;
		paginations[i].onmouseover = function (){
			num = this.index;
			play();
			clearInterval(timer);
		}
		paginations[i].onmouseout = function (){
			autoplay();
		}
	}

	autoplay();

	//瀑布流
	
	var wall = document.getElementById("wall");
	var wall_li = wall.getElementsByTagName("li");
	var arr = ["img/室外1021更新-0001.jpg",
	"img/室外1021更新-0002.jpg",
	"img/室外1021更新-0003.jpg",
	"img/室外1021更新-0004.jpg",
	"img/室外1021更新-0005.jpg",
	"img/室外1021更新-0006.jpg",
	"img/室外1021更新-0007.jpg",
	"img/室外1021更新-0008.jpg",
	"img/室外1021更新-0009.jpg",
	"img/室外1021更新-0010.jpg",
	"img/室外1021更新-0011.jpg",
	"img/室外1021更新-0012.jpg",
	"img/室外1021更新-0013.jpg",
	"img/室外1021更新-0014.jpg",
	"img/室外1021更新-0015.jpg",
	"img/室外1021更新-0016.jpg",
	"img/室外1021更新-0017.jpg",
	"img/室外1021更新-0018.jpg",
	"img/室外1021更新-0019.jpg",
	"img/室外1021更新-0020.jpg",
	"img/室外1021更新-0021.jpg",
	"img/室外1021更新-0022.jpg",
	"img/室外1021更新-0023.jpg",
	"img/室外1021更新-0024.jpg"];

	// window.onresize = function (){
	// 	var li = document.createElement("li");
	// 	if (document.documentElement.clientWidth < 495){
	// 		if (wall.childNodes.length > 2){
	// 			wall.removeChild(wall.children[0]);
	// 			wall.removeChild(wall.children[1]);

	// 		}
	// 	}else if (document.documentElement.clientWidth >= 495){
	// 		if (wall.childNodes.length <= 4){
	// 			wall.appendChild(li);
	// 			wall.appendChild(li);
	// 		}
	// 	}
	// }

	var arrNum = [];

	while(arrNum.length < 24){
		var num = random(24,0);
		for (var j = 0; j < arrNum.length; j ++){
			if(arrNum[j] == num){
				break;
			}
		}
		if (j == arrNum.length){
			arrNum.push(num);
		}
	}

	for (var i = 0; i < arr.length; i ++){

		var lih = [];
		for (var k = 0; k < wall_li.length; k ++){
			lih.push(wall_li[k].offsetHeight);
		}

		var min = lih[0];
		var minindex = 0;
		for (var j = 0; j < wall_li.length; j ++){
			if (min > lih[j]){
				min = lih[j];
				minindex = j;
			}
		}
		var div = document.createElement("div");
		var img = document.createElement("img");
		var span = document.createElement("span");
		var search = document.createElement("img");
		img.src = arr[arrNum[i]];
		img.datasrc = arr[arrNum[i]];
		img.name = "img";
		search.src = "img/search.png";

		wall_li[minindex].appendChild(div);
		div.appendChild(img);
		div.appendChild(span);
		span.appendChild(search);
	}

	var big = document.getElementsByName("img");
	var fangda = document.getElementById("fangda");
	var body = document.getElementsByTagName("body")[0];

	for (var i = 0; i < big.length; i ++){
		big[i].parentNode.onclick = function (){
			var address = this.firstChild.datasrc;
			fangda.style.display = "block";
			fangda.firstChild.src = address;

			body.onclick = function (){
				fangda.style.display = "none";
			}
			stopPro();
		}
	}

	function stopPro(evt) {
		var e = evt || window.event;
		window.event ? e.cancelBubble = true : e.stopPropagation();
	}

	function random(max,min){
		return parseInt(Math.random() * (max - min) + min);
	}
}