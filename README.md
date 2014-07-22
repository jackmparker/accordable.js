# accordable.js
---------------

A fully loaded yet lightweight jQuery accordion to fulfill all your accordion needs! Only 4k zipped!

This is my first jQuery plugin. Any **courteous and constructive** critique is welcome.


##Set Up
Accordable assumes the following html structure.

````
<ul id="element">
  <li>
    <span>Panel Heading 1</span>
    <div>Body copy.</div>
  </li>
  <li>
    <span>Panel Heading 2</span>
    <div>Body copy.</div>
  </li>
  <!-- etc. -->
</ul>
````

## Initialize
For the easiest set up:

````javascript
(function(){

	$('#element').accordable();

})();
````

## Defaults and Options
Accordable has a number of optional settings

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
		// CALLBACK - function on accordion/page load
		
		beforeToggle: function() {},
		// CALLBACK - function before accordion fires
		
		afterToggle: function() {}
		// CALLBACK - function before accordion fires
	});

})();
````
