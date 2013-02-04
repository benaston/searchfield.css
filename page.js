jQuery(document).ready(function () {
    //used to unify font line height appearance Mac/PC
	if (navigator.userAgent.indexOf('Mac') > 0) {
		$("body").addClass("mac");
	}
	
	$(".navbar a:nth-child(1)").bind('click', function(){
		$('.three-d-context').addClass('flipped');
	});
}); 
