function game(username) {
    var rmb = document.getElementById("rmb");
    //	alert(rmb.tagName)
    var img = document.getElementById("img");
    var fenshu = document.querySelectorAll("#game #time span");
    var lunbo = document.querySelectorAll("#game .game_top img");
    var a = 0;
    var box = document.querySelectorAll(".box")[0];
    var gameP = document.querySelector("#game");
    var page3 =document.querySelector("#page3");
    box.style.display = "none";
    gameP.style.display = "block";
    page3.style.display = "none";
    setInterval(function() {
        a++;
        for (var i = 0; i < lunbo.length; i++) {
            lunbo[i].style.display = "none";
        }
        if (a >= 3) {
            a = 0;
        }
        lunbo[a].style.display = "block";
    }, 1000);

    var x = 000;
    var t = 5;
    var time = setInterval(function() {
        t--;
        fenshu[1].innerHTML = t;

        if (t <= 0) {
            clearInterval(time);
            var url = "mark.php?mark="+x+"&username="+username;
//          console.log(url);
            requestByGET(url,function  (responText) {
//          	   alert(responText);
            });
//          console.log(username);
            end(x,username);
            
        }

    }, 1000)

    touch.on(rmb, 'swipeup', function(ev) {
        x++;
        var fly = document.createElement("img");
        fly.src = "img/p2_qian.jpg";
        img.appendChild(fly);
        fenshu[0].innerHTML = x;

        fly.style.webkitAnimation = "rmb 0.25s linear 1 ";
        setTimeout(function() {
            fly.parentNode.removeChild(fly);
        }, 500)

    });

}