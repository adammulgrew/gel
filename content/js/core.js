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



/* ACCORDION TOGGLES ------------ */
$(".js-toggle-content").hide();
$(".js-toggle.js-toggle--open").addClass("js-toggle--active").next().show();

var toggleNavFilter = function (elem) {
	elem.siblings('div').toggle();
	elem.children('i').toggleClass("icon-plus").toggleClass("icon-minus");
	elem.toggleClass("js-toggle--active");
};

var toggle = $('.js-toggle');

toggle.on('click', function () {
	toggleNavFilter($(this));
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


/* FONTELLO FOE IE7 ------------ */
  function toggleCodes(on) {
	var obj = document.getElementById('icons');
	
	if (on) {
	  obj.className += ' codesOn';
	} else {
	  obj.className = obj.className.replace(' codesOn', '');
	}
  }
  
  

 
