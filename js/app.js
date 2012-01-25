(function($){
	$( document ).bind( "mobileinit", function(){
		//Disable tap toggle on fixed toolbars
		$.mobile.fixedtoolbar.prototype.options.tapToggle = false;
		
		// listview divider theme default
		$.mobile.listview.prototype.options.dividerTheme = "d";
		
		//if fixed support is a go, add a class to HTML
		if( !$.mobile.fixedtoolbar.prototype.options.supportBlacklist() ){
			$( document.documentElement ).addClass( "ui-mobile-supported-fixed" );
		}
	});
	
	//ghetto message open
	$( document ).bind( "vclick", function( e ){
		if( $(e.target).closest( ".email-primary li.ui-btn" ).length ){
			$(".email-content").insertBefore( $(e.target).closest( "li.ui-btn" ) );
			$(".email-content")[0].scrollIntoView();
			window.scrollBy(0,-45)
		}
	});
	
	// ghetto icon change
	$( document ).one( "collapsiblecreate", function(){
		$( ".ui-collapsible-heading .ui-icon" ).removeClass( "ui-icon-plus" ).addClass( "ui-icon-arrow-l" );
	} );
	
	// domready
	$(function(){
		//ghetto collapsible toggle
		$(".nav-primary a").bind( "vclick", function(){
			$(this).parents(".ui-collapsible").trigger( "collapse" );
			event.preventDefault();
		});
	});
	
	$(window).bind("scroll", function(){
		$(".ui-li-divider").each(function(){
			if($(this).offset().top < $(window).scrollTop()){
				$(this).addClass("fixed")
			}
		})
		
	})
	
	
})( jQuery );