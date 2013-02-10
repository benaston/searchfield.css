//NOTE: This is just an experiment. I will transition to client-side MVC if this evolves into something more.
var myScroll;
jQuery(document).ready(function () {
    //used to unify font line height appearance Mac/PC
	if (navigator.userAgent.indexOf('Mac') > 0) {
		$("body").addClass("mac");
	}
		
	$(".btn-my-account").bind('click', function(){
		$('.app-wrapper.three-d-context').addClass('flipped');
	});
	
	$(".btn-back-to-search").bind('click', function(){
		$('.app-wrapper.three-d-context').removeClass('flipped');
	});
	
	$("#btn-it-contractor,#btn-employer").bind('click', function(){	
		$(".welcome-panel").addClass('hidden');
		$('.search-panel, .results , .result-details, .navbar').removeClass('hidden');
	});
	
	$(".btn-log-out").bind('click', function(){			
		$('.app-wrapper.three-d-context').removeClass('flipped');
		$('.search-panel, .results , .result-details, .navbar').addClass('hidden');
		$(".welcome-panel").removeClass('hidden');
	});
	
	$(".welcome").bind('click', function(){
		$('.welcome-panel').addClass('flipped');
	});
	
	$(".back-to-welcome").bind('click', function(){
		$('.welcome-panel').removeClass('flipped');
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