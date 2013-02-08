var myScroll;
jQuery(document).ready(function () {
    //used to unify font line height appearance Mac/PC
	if (navigator.userAgent.indexOf('Mac') > 0) {
		$("body").addClass("mac");
	}
	
	
	
	$(".navbar a:nth-child(1)").bind('click', function(){
		$('.three-d-context').addClass('flipped');
	});
	
	$('.back-to-top').bind('click', function(){$('.result-details').scrollTop(0); return false;});
	
	$('body').bind('ontouchmove', function(event){
    event.preventDefault();
	});
	
	

}); 

function touchHandler(event)
{
    var touches = event.changedTouches,
        first = touches[0],
        type = "";
         switch(event.type)
    {
        case "touchstart": type = "mousedown"; break;
        case "touchmove":  type="mousemove"; break;        
        case "touchend":   type="mouseup"; break;
        default: return;
    }

    //initMouseEvent(type, canBubble, cancelable, view, clickCount, 
    //           screenX, screenY, clientX, clientY, ctrlKey, 
    //           altKey, shiftKey, metaKey, button, relatedTarget);
    
    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1, 
                              first.screenX, first.screenY, 
                              first.clientX, first.clientY, false, 
                              false, false, false, 0/*left*/, null);
							  first.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
}

function init() 
{
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);    
}

function allowDrop(ev)
	{
	ev.preventDefault();
	}

	function drag(ev)
	{
	ev.dataTransfer.setData("Text",ev.target.id);
	}

	function drop(ev)
	{
	ev.preventDefault();
	var data=ev.dataTransfer.getData("Text");
	$('.favourites').append(document.getElementById(data));
	}