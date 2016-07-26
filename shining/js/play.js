window.onload = function (){

var play = document.getElementsByName("play");
for (var i = 0; i < play.length; i ++){
	play[i].onmouseover = function (){
		var that = this;
		this.children[1].src = "img/3dicon_02.png";
		this.onmouseout = function (){
			that.children[1].src = "img/3dicon_01.png";
		}
	}
}

}