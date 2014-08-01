/**
 * --------------------------------------
 *
 *   Accordable.js v1.0.0
 *   http://accordablejs.com
 *
 *   A responsive, fully-loaded jQuery accordion plugin
 *
 *   -- CSS not included --
 *
 * --------------------------------------
 *
 *   Copyright 2014 Jack Parker
 *   http://jackmparker.com/
 *
 *   Released under the MIT license
 *   http://opensource.org/licenses/MIT
 *
 *	 Also released under the GNU GPL license
 * 	 http://www.gnu.org/copyleft/gpl.html
 *
 */

;(function($){

	$.fn.accordable = function(options) {
		
				
		/*
		|
		| default options
		|
		*/
		
		var defaults = $.extend({
		
			// choose which panels should start by being opened
			openPanel: [],
			
			// open all panels on page load
			openAll: false,
			
			// when user clicks, only allow one panel open at a time
			closeAll: true,
			
			// speed of the transition
			speed: 300,
			
			// easing style
			easing: 'swing',
			
			// add classes to accordion elements
			addClasses: true,
			
			// function on page load
			onLoad: function() {},
			
			// function immediately before accordion fires
			beforeToggle: function() {},
			
			// function immediately after accordion fires
			afterToggle: function() {}
			 
		}, options);
		
		
		
		/*
		|
		| set up plugin and allow for multiple instances
		|
		*/
		
		// begin by returning 'this' to allow for chaining
		return this.each(function() {
		
		
			// cache variables
			var accordion = $(this),
				panel  	  = accordion.children('li'),
				heading   = panel.children('span'),
				expander  = panel.children('div');	
				
			
			// remove margin, padding, and bullets
			accordion
				.css({

					listStyle: 'none',
					margin: '0px',
					padding: '0px'
					
				});
			
			
			// set this to fix an IE8 bug *sigh*
			panel
				.css({
				
					overflow: 'hidden'
					
				});
			
			
			// set the CSS of the headings
			heading
				.css({
				
					cursor: 'pointer',
					display: 'block'
					
				});
			
			
			
			/*
			|
			| add classes to all the elements unless 'addClasses' is set to false
			|
			*/
			
			if(defaults.addClasses == true) {
			
				accordion.addClass('accordable');
				panel.addClass('accordable-panel');
				heading.addClass('accordable-heading');
				expander.addClass('accordable-expander');
				
			}
			
			
			
			/*
			|
			| close all panels unless the 'openAll' option is set to 'true'
			|
			*/
			
			if(defaults.openAll == false) expander.hide().parent().toggleClass('closed');
			
			
			
			/*
			|
			| open the correct panels on page load
			|
			*/
			
			// if the option to open certain panels is set...
			if((defaults.openPanel.length > 0) && (defaults.openAll == false)) {
				
				// create an empty array
				var panels = [];
				
				// iterate through the array to create the filter
				$.each(defaults.openPanel, function(val) {
					
					panels.push(':nth-child(' + defaults.openPanel[val] + ')');
					
				});
				
				// convert the array to a comma separated list
				var filter = panels.join(', ');
				
				// open the correct panels
				panel.filter(filter).children('div').show().parent().toggleClass('closed open');
				
			}
			
			
			
			/*
			|
			| if option is set, fire users function on page load
			|
			*/
			
			if(defaults.onLoad) defaults.onLoad();
			
			
			
			/*
			|
			| begin when user clicks a heading
			|
			*/
			
			heading.on('click', function() {
			
				// cache the current panel
				$this = $(this).parent();
				
				
				// call user function before the accordion fires
				if(defaults.onBefore) defaults.beforeToggle();
				
				
				// if the option is set, have all panels close when one is clicked
				if(defaults.closeAll == true) {
				
					// if the panel that was clicked is open
					if($this.hasClass('open')) {
					

						$this
							
							// add and remove the proper classes
							.toggleClass('open closed')
							
							// find the expander
							.children('div')
					
							// close the open expander and stop
							.slideToggle(defaults.speed, defaults.easing, function() {
									
								// call user function after the accordion fires
								defaults.afterToggle();
									
							});
						
						
					// if the panel that was clicked was closed
					} else {
					
						
						// close all open elements
						$this
							
							// find the accordion that was clicked (could have multiple accordions on page)
							.parent()
							
							// find all open panels
							.find('.open')
							
							// change the classes
							.toggleClass('open closed')
							
							// find the expander of the open panels
							.children('div')
							
							// and close the open panels
							.slideToggle(defaults.speed, defaults.easing);
						
						
						// open the clicked element
						$this
						
							// change the classes on the panel
							.toggleClass('closed open')
							
							// find the expander
							.children('div')
							
							// open the expander
							.slideToggle(defaults.speed, defaults.easing, function() {
										
								// call user function after the accordion fires
								defaults.afterToggle();
								
							});
						
						
					}
						
				}
				
				
				// if defaults.closeAll is false...
				if(defaults.closeAll == false) {
					
					
					// toggle the clicked panel
					$this
						
						// change the classes
						.toggleClass('open closed')
						
						// find the expander
						.children('div')
						
						// toggle the expander
						.slideToggle(defaults.speed, defaults.easing, function() {
									
							// call user function after the accordion fires
							defaults.afterToggle();
							
						});
					
					
				}
				
				
			});
		
		});
		
	};

})(jQuery);
