



function lineStart (arg1,arg2,callback) {
    
    
    var start = document.querySelector(arg1);
    var end = document.querySelector(arg2);
	var beginX= start.offsetLeft;
	var beginY  = start.offsetTop;
	
	var endX  = end.offsetLeft;
	var endY  = end.offsetTop;
	var i = 0;
	var load =Math.sqrt((endX-beginX)*(endX-beginX)+(endY-beginY)*(endY-beginY));
//	alert(load);
	var a = Math.atan((endX-beginX)/(endY-beginY))/Math.PI*180;
	
	if ((endX-beginX) >= 0) {
	    if ((endY-beginY)>= 0) {
	    	  var aa = 90-a;
	    } else{
	       var aa = 90-a +180; 
	    }
		
	} else{
	    if ((endY-beginY)>=0) {
	    	  var aa = a-90;
//	    	  alert(aa)
	    }else{
	      var aa = 180+90-a;
	    }  
		
	}
//  var aa = 180+90-a;
	console.log(aa);
//	star.style.background = "#007AFF";
    start.style.webkitTransform ="rotate("+aa+"deg)";
    start.style.transform ="rotate("+aa+"deg)";
    start.style.transformOrigin ="left";
    start.style.webkitTransformOrigin ="left";
//  star.style.width = "20%";
    (function once () {
            	setTimeout(function  () {
        	    i+=5;
//      	    console.log(i);
        	  start.style.width = i+"px";
        	  if (i<load) {
        	  	once()
        	  }else{
        	      var shan =document.createElement("div");
        	      shan.style.position = "absolute";
              shan.style.width= "10px";
              shan.style.height= "10px";
              shan.style.backgroundColor = "white"
              shan.style.top = (endY-5)+"px";
              shan.style.left = (endX-5)+"px";
              shan.style.borderRadius = "5px";
              shan.style.webkitAnimation ="shan 1s  linear infinite";
              end.parentNode.appendChild(shan);
             
//      	      end.style.transform = "scale(10)";
//      	     end.style.width = "10px" ;
//      	     end.style.height = "10px" ;
        	     if (callback) {
        	     	callback();
        	     }
        	  }
        	  
        	},10)
    })();
	
}
