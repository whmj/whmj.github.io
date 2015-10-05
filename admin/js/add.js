 var EventUtil={
    addHandler:function(element,type,handler){
        if (element.addEventListener) {
            addEventListener(type,handler,false);
        }
        else if (element.attchEvent) {
            attchevent("on"+type,handler);
        }
        else{
            element["on"+type]=handler;
        }
    },
    getEvent:function(event){
        return event?window.event:event;
    },
    getTarget:function(event){
        return event.target||event.srcElement;
    },
    prventDefault:function(event){
        if (event.prventDefault) {
            event.prventDefault();
        }
        else{
            event.returnValue=false;
        }
    },
    removeHandler:function(element,type,handler){
        if (element.removeEventListener) {
            addEventListener(type,handler,false);
        }
        else if (element.detchEvent) {
            detchevent("on"+type,handler);
        }
        else{
            element["on"+type]=null;
        }
    },
    stopPropagation:function(event){
            if (event.stopPropagation) {
                event.stopPropagation();
            }
            else{
                event.cancelBubble=true;
            }
        }
 }
 EventUtil.addHandler(window,"load",function(event){
    EventUtil.addHandler(window,"click",function(event){
        event=EventUtil.getEvent(event);
        var target=EventUtil.getTarget(event);
        switch(target.id){
        case "addBnt":
        document.body.appendChild(addAll);
        addAll.className="addAll show";
        addUser.className="addUser show";
          break;
        case "addBut":
          addAll.className="addAll hide";
        addUser.className="addUser hide";
        break;
        case "addGoods":
        document.body.appendChild(addAll);
        addAll.className="addAll show";
        addUser.className="addUser show";
        }
    })

 })