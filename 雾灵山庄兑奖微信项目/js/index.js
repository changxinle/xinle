var box = document.getElementsByClassName("box")[0];
//      var btns = document.getElementById("btns");
var oBtn = document.querySelectorAll("#btns li");
var cont = document.querySelectorAll("#content #ii .xiangqing");
var meng = document.querySelector("#meng");
var content = document.querySelector("#content");
var start = document.querySelectorAll(".start")[0];

for (var i = 0; i < oBtn.length; i++) {
    oBtn[i].index = i;
    oBtn[i].onclick = function() {
        
        that = this;
        for (var j = 0; j < 4; j++) {
            meng.style.display = "none";

            cont[j].style.display = "none";
        }

        console.log(this.tagName);
        meng.style.display = "block";
        content.style.display = "block";

        cont[this.index].style.display = "block";
        var x = document.querySelectorAll("#content #ii .xiangqing .close")[that.index];
        x.onclick = function() {
            meng.style.display = "none";
            content.style.display = "none";
            cont[that.index].style.display = "none";
        }
    }
}
start.onclick = function() {
    meng.style.display = "block";
    content.style.display = "block";
    cont[4].style.display = "block";
    var x = document.querySelectorAll("#content #ii .xiangqing .close")[4];
    var sub = document.getElementById("sub");
    sub.onclick = function() {
        var username = document.querySelectorAll("#content #ii .xiangqing ul li input")[0].value;
        var tel = document.querySelectorAll("#content #ii .xiangqing ul li input")[1].value;
        if (username == "" || tel == "") {
            alert("请输入姓名和电话")
        } else {
            var url = "index.php";
            var postbody = "username=" + username + "&tel=" + tel;

            requestByPOST(url, postbody, function(responseText) {
//              console.log(username)
                game(username);
            })
        }
    }

    x.onclick = function() {
        meng.style.display = "none";
        content.style.display = "none";
        cont[4].style.display = "none";
    }
}

function best(node) {

    var bestboard = document.getElementById(node);
    requestByGET("best.php", function(responseText) {
        obj = JSON.parse(responseText);
        console.log(obj);
        for (var i = 0; i < 5; i++) {
            var ali = document.createElement("li");
            ali.innerHTML = "<span>" + (i + 1) + "</span>. <span>" + obj[i].username + "</span> <span>" + obj[i].mark + "</span>分";
            bestboard.appendChild(ali);
        }
    })

}
best("bestboard");