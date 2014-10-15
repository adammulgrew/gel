// = Header Icon triggers
//-----------------------------------------------------------------------------//

$('.js-trigger__search').on('click', function() {
    $('.js-panel__search').toggle(); 
	$('.js-panel__nav--utility').hide(); 
});

$('.js-trigger__nav--utility').on('click', function() {
    $('.js-panel__nav--utility').toggle(); 
	$('.js-panel__search').hide(); 
});


jQuery.expr[':'].parents = function(a,i,m){
    return jQuery(a).parents(m[3]).length < 1;
};

function toggleNavSearch(container, e) {
	e.preventDefault();
	$('header').find('.toggle').filter(':parents(' + container + ')').removeClass('show');
	$(container).find('.toggle').toggleClass('show');
	$('.wrap-search, .nav-utility').each(function(index, element) {
		var link = $(element).find('.utility-link, .search-link');
        if($(element).find('.toggle').hasClass('show')) {
			link.addClass('active');
		} else {
			link.removeClass('active');
		}
    });
}


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
