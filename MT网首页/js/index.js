    var index=0;
	var timer;
	var arr=["images/pictures/M4.jpg","images/pictures/811a.jpg","images/pictures/iphone6.png","images/pictures/811@326.jpg","images/pictures/S5.png","images/pictures/s6.png"];
	var img=document.getElementById('img');
	function a () {	
    if (index==arr.length-1) {
    	index=0;
    }else{
    	index+=1;
    }
    img.src=arr[index];
    timer=setTimeout(a,8000);
}
a();
