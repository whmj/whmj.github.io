
		window.onload = function(){
		 var bannerTop=document.getElementById("bannerTop");
		 var Oimg=bannerTop.getElementsByTagName("img");
		 var span=bannerTop.getElementsByTagName("span");
		var a=bannerTop.getElementsByTagName("a");
		// alert(a.length);
         	 for (var i = 4; i <a.length; i++) {
         		a[i].index=i;
         		a[i].onclick=function(){
         			for (var n = 0; n < span.length; n++) {
         				a[n+4].className="one";
         				Oimg[n].className="hide";
                        span[n].className="hide";	
                    }
                  this.className="two";
                   Oimg[this.index-4].className="on";
                   span[this.index-4].className="on";

         		 }
         	}
         
}
	
