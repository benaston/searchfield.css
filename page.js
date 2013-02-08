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

window.addEventListener('load', function() {
    new FastClick(document.body);
}, false);

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