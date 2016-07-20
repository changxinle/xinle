/*
 * url 是我们网络请求的地址
 * successCallback 是请求成功的返回函数
 * errorCallback 是请求失败的返回函数
 * 
 */

function requestByGET(url, successCallback, errorCallback) {
    var request = window.XMLHttpRequest ? new XMLHttpRequest() : ActiveXObject("Microsoft.XMLHTTP");
    request.open("GET", url, true);
    request.send();
   request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            
            if (successCallback) {
                successCallback(request.responseText);
            }
            }
        else if (request.readyState == 4 && request.status != 200) {
                if (errorCallback) {
                    errorCallback(request.statusText);
                }  
        }
    }
}

// POST 方式请求
function requestByPOST(url, postbody, successCallback, errorCallback) {
    var request = window.XMLHttpRequest ? new XMLHttpRequest() : ActiveXObject("Microsoft.XMLHTTP");
   // 设置请求对象的请求地址
   request.open("POST", url, true);
   request.setRequestHeader("content-type","application/x-www-form-urlencoded");

   request.send(postbody);

   request.onreadystatechange = function() {
       if (request.readyState == 4 && request.status == 200) {
           
           if (successCallback) {
               successCallback(request.responseText);
           }
           }
       else if (request.readyState == 4 && request.status != 200) {
               if (errorCallback) {
                   errorCallback(request.statusText);
               }  
       }
   }
}