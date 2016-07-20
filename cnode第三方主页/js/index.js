window.onload = function  () {
    
	var small_nav = document.querySelectorAll("#small-nav button");
//	alert(small_nav.length)
    var tab = ["","good","share","ask","job"];
   
    var nTab = tab[0];
    var npage = parseInt(getUrlId("page"));
    topics(tab[0],npage);
    for (var i = 0; i < small_nav.length; i++) {
        small_nav[i].index = i;
    	    small_nav[i].onclick =function  () {
           nTab = tab[this.index];
//         console.log(npage)
          npage = 1;
    		  topics(tab[this.index],npage);
    	   } 
    	   
    }	   
    
    $("#page-btn a").eq(npage).css("background","aqua");
    
    $("#page-btn a").on("mouseover",function() {
        var pageNum = parseInt($(this).text());
//      console.log(pageNum);
        if (pageNum>0 && pageNum <10) {
            $(this).attr("href","index.html?page="+pageNum+"&tab="+nTab);
            
        } else{
            
        }
    });
	       
    
	
};



function topics(tab,page) {
    
    var content = document.getElementById("content");
    
    var url = "https://cnodejs.org/api/v1/topics?page="+page+"&tab="+tab+"&limit=20";
    requestByGET(url, function(responseText) {
        //		content.innerHTM = responseText;

        var obj = JSON.parse(responseText);
//      console.log(obj);

        content.innerHTML = "";
        
        
       

        for(var i = 0; i < obj.data.length; i++) {
            var li = document.createElement("li");
            var out_time = getTime(obj.data[i].last_reply_at);
            if (obj.data[i].top == true) {
            	   li.innerHTML = "<img src=" + obj.data[i].author.avatar_url + "/><span class ='btn-info' >置顶</span><span>" + obj.data[i].reply_count + "/<small>" + obj.data[i].visit_count + "</small></span><a class='lead' href='detail.html?id="+obj.data[i].id+"' title=" + obj.data[i].title + ">" + obj.data[i].title + "</a><span >" + out_time + "</span><hr />";
            } else if(obj.data[i].good == true){
            	   li.innerHTML = "<img src=" + obj.data[i].author.avatar_url + "/><span class ='btn-info' >精品</span><span>" + obj.data[i].reply_count + "/<small>" + obj.data[i].visit_count + "</small></span><a class='lead' href='detail.html?id="+obj.data[i].id+"' title=" + obj.data[i].title + ">" + obj.data[i].title + "</a><span >" + out_time + "</span><hr />";
            } else if (obj.data[i].tab == "ask") {
            	    li.innerHTML = "<img src=" + obj.data[i].author.avatar_url + "/><span class ='btn-default' >问答</span><span>" + obj.data[i].reply_count + "/<small>" + obj.data[i].visit_count + "</small></span><a class='lead' href='detail.html?id="+obj.data[i].id+"' title=" + obj.data[i].title + ">" + obj.data[i].title + "</a><span >" + out_time + "</span><hr />";
            } else if (obj.data[i].tab == "job") {
            	    li.innerHTML = "<img src=" + obj.data[i].author.avatar_url + "/><span class ='btn-default' >招聘</span><span>" + obj.data[i].reply_count + "/<small>" + obj.data[i].visit_count + "</small></span><a class='lead' href='detail.html?id="+obj.data[i].id+"' title=" + obj.data[i].title + ">" + obj.data[i].title + "</a><span >" + out_time + "</span><hr />";
            } else if (obj.data[i].tab == "share") {
                    li.innerHTML = "<img src=" + obj.data[i].author.avatar_url + "/><span class ='btn-default' >分享</span><span>" + obj.data[i].reply_count + "/<small>" + obj.data[i].visit_count + "</small></span><a class='lead' href='detail.html?id="+obj.data[i].id+"' title=" + obj.data[i].title + ">" + obj.data[i].title + "</a><span >" + out_time + "</span><hr />";
            }
           
            content.appendChild(li);
            $("#content li").addClass("shadow");
        }
    })

}


//通过时间戳 获取最距现在的时间长
function getTime (last_reply_at) {
	var last_time = last_reply_at; 
        date1 = last_time.substring(0,10);
        date2 = last_time.substring(11,19);
        date = date1+" "+date2;
        date = date.substring(0,19);    
        date = date.replace(/-/g,'/'); 
        var last_timestamp = parseInt(new Date(date).getTime()/1000);
        var timestamp = parseInt(new Date().getTime()/1000); 
        time = timestamp-last_timestamp;
        if (time/3600/24>=1) {
               out_time =parseInt(time/3600/24)+"天前";
        } else if (time/3600>=0) {
               out_time =parseInt(time/3600)+"小时前";
        } else if (time/60>=0) {
               out_time =parseInt(time/60)+"分钟前";
        } else{
            out_time =parseInt(time)+"秒前";
        }
        return out_time;
}
//获取url中的get参数
        function getUrlId(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r != null) return unescape(r[2]);
            return null;
        }


































