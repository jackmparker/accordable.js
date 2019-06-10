$(document).ready(function(){
		
	/*
	|----------------------------------------------------------
	| accordable.js examples
	|----------------------------------------------------------
	*/
	
	(function(){
	
		$('#accordable-example-one').accordable({
			openPanel: [1]
		});
		
		$('#accordable-example-two').accordable({
			openPanel: [1, 3],
			closeAll: false
		});
		
		$('#accordable-example-three').accordable({
			easing: 'easeInOutQuint',
			speed: 600
		});
		
		$('#accordable-example-four').accordable({
			afterToggle: function() {
	        	alert('Transition complete!');
	        }
		});
	
	})();
	
	
	
	/*
	|----------------------------------------------------------
	| center main window content
	|----------------------------------------------------------
	*/
	
	(function(){
		
		var center = $('.center');
		
		center.css({
			
			'position' : 'absolute',
	        'left' : '50%',
	        'top' : '50%',
	        'margin-left' : -center.width() / 2,
	        'margin-top' : -center.height() / 2
			
		});
		
		$(window).resize(function() {
			
			center.css({
			
			'position' : 'absolute',
	        'left' : '50%',
	        'top' : '50%',
	        'margin-left' : -center.width() / 2,
	        'margin-top' : -center.height() / 2
			
		});
			
		});
	
	})();
	
	
	
	/*
	|----------------------------------------------------------
	| localscroll
	|----------------------------------------------------------
	*/
	
	(function(){
	
		$('nav, #fixed-nav').localScroll({ duration: 550, offset: -100 });
	
	})();
	
	
	
	/*
	|----------------------------------------------------------
	| fixed header
	|----------------------------------------------------------
	*/
	
	(function(){
	
		$('#features').waypoint({
		
			handler: function(direction) {
		
				if(direction == 'down') {
					
					$('#fixed-nav').animate({
						
						top: '0px'
						
					});
			
				} else {
				
					$('#fixed-nav').animate({
						
						top: '-80px'
						
					});
					
				}
				
			}, offset: 140
			
		});
	
	})();
	
	
	/*
	|----------------------------------------------------------
	| tracking buttons
	|----------------------------------------------------------
	*/
	
	// download button
	$('#download-accordablejs').on('click', function() {
		
		ga('send', 'event', 'download-button', 'click', 'download-button');
		
	});
	
	// github button
	$('#github').on('click', function() {
		
		ga('send', 'event', 'github-button', 'click', 'github-button');
		
	});

});