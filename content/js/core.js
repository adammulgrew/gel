// = Header Icon triggers
//-----------------------------------------------------------------------------//


/* PRIMARY NAV EXPANDER ------------ */
$(function () {	
    $('.js-toggle-link').click(function(e){
         var item = $(e.currentTarget);
        item.parent().find(".js-toggle-item").toggle();
    });
    
});



/* Async loading ------------ */
function loadAsync(url, loadFn) {
    loadFn = loadFn || function() {}
    $(function() {
	    var script = document.createElement('script');
	    script.src = url;
	    script.async = true;
	    $(script).on('load', loadFn);
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s);
	});
}


//  Or init in this way:
$(document).on('opened', '.remodal', function () {
	$('#siteSearch').focus();
});
var inst = $('[data-remodal-id=modal]').remodal();
//  inst.open();




