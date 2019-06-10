# accordable.js

A responsive, fully-loaded jQuery accordion plugin.

(*This is my first jQuery plugin. Any courteous and constructive critique is welcome.*)


## Full Site & Demo
https://jackmparker.github.io/accordable.js/


## Features
- Fully responsive with lots of features yet lightweight (only 4k minified)
- Supports jQuery easing for panel transitions
- Built-in callback functions on load, before, and after panel transitions
- Use your own custom CSS to style
- Gracefully degrades if JavaScript is disabled
- Can hold any HTML/PHP/JavaScript, etc.
- Allows multiple instances on a page
- Works in IE8+ and all <strike>real</strike> modern browsers (Chrome, Safari, Firefox, Opera)


## Set Up
Include the proper files in your page:
````javascript
<!-- include jQuery -->
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>

<!-- include jQuery easing (optional for easing transitions) -->
<script type="text/javascript" src="jquery.easing.1.3.min.js"></script>

<!-- include accordable.js -->
<script type="text/javascript" src="jquery.accordable.min.js"></script>
````
Next, set up your HTML.
accordable.js assumes the following HTML structure:

````
<ul id="element-id">
    <li>
        <span>Panel Heading One</span>
        <div>Body copy goes here...</div>
    </li>
    <li>
        <span>Panel Heading Two</span>
        <div>Body copy goes here...</div>
    </li>
    
    <!-- etc. -->
    
</ul>
````
Then just call the function to initialize the plugin:

````javascript
(function(){

	$('#element-id').accordable();

})();
````
That's it! accordable.js should now be up and working.

## Default Settings & Options
accordable.js has a number of optional settings:

````javascript
(function(){

	$('#element').accordable({
		
		openPanel: [],
		// ARRAY - choose which panels should start opened. accepts array of panels, i.e., [1, 3, 4] etc.
		
		openAll: false,
		// BOOLEAN - open all panels on page load
		
		closeAll: true,
		// BOOLEAN - when user clicks, only allow one panel open at a time
		
		speed: 300,
		// INTEGER - speed of the transition (milliseconds)
		
		easing: 'swing',
		// STRING - easing style (be sure to include jquery easing)
		
		addClasses: true,
		// BOOLEAN - adds class names to accordion elements for CSS styling
		
		onLoad: function() {},
		// FUNCTION - callback on accordion/page load
		
		beforeToggle: function() {},
		// FUNCTION - callback before accordion fires
		
		afterToggle: function() {}
		// FUNCTION - callback after accordion fires
	});

})();
````

## Support
For questions or bug reports please [create an issue on Github](https://github.com/jackmparker/accordable.js/issues).

## License

Dual licensed under the MIT and GPL licenses:
- http://www.gnu.org/licenses/gpl.html
- http://www.opensource.org/licenses/mit-license.php

## Author
Copyright &copy;2014 [Jack Parker](http://jackmparker.com). All Rights Reserved.
