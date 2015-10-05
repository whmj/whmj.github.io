
         $(function(){
       var tab=document.getElementById("tab");
       var Oul=document.getElementById("tab01");
       var Oli=Oul.getElementsByTagName("li");
       var Aa=Oul.getElementsByTagName("a");
       var Odiv=tab.getElementsByTagName("div");
       // alert(Aa.length);
       for (var i = 0; i < Oli.length; i++) {
              Oli[i].index=i;
              Oli[i].onclick=function(){
                for (var i = 0; i < Oli.length; i++) {
                  Oli[i].className="li02";
                    Aa[i].style.color="gray";
                Odiv[i].style.display="none";
              }
              this.className="li01";
              Aa[this.index].style.color="#fff";
              Odiv[this.index].style.display="block";
       }
}
       
  })