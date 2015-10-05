    var count=0;
	var timer;
	var myarr=["images/pictures/1.jpg","images/pictures/11.jpg","images/pictures/12.jpg","images/pictures/14.jpg"];
	var imgo=document.getElementById('imgo');
	function b () {	
    if (count==myarr.length-1) {
    	count=0;
    }else{
    	count+=1;
    }
    imgo.src=myarr[count];
    timer=setTimeout(b,7000);
}
b();
