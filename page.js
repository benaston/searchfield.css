var myScroll;
jQuery(document).ready(function () {
    //used to unify font line height appearance Mac/PC
	if (navigator.userAgent.indexOf('Mac') > 0) {
		$("body").addClass("mac");
	}
	
	myScroll = new iScroll('wrapper');
	
	$(".navbar a:nth-child(1)").bind('click', function(){
		$('.three-d-context').addClass('flipped');
	});
	
	$('.back-to-top').bind('click', function(){$('.result-details').scrollTop(0); return false;});
	
	$('body').bind('ontouchmove', function(event){
    event.preventDefault();
	});
}); 
