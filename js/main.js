$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('.entry-header').hide();
	$('#loader-wrapper').hide();
    }, 3000);
 
});
