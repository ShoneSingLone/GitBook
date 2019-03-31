function loadImage(url,callback) {       
    var img =new Image();  
    img.onload =function(){  
        img.onload =null;  
        callback(img);  
    }  
    img.onerror = function () {
        console.log(onerror);
    }
    img.src = url;   
}  