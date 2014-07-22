# accordable.js
---------------

A fully loaded jQuery accordion to fulfill all your accordion needs!


##Set Up
Accordable assumes the following html structure.

````
<ul>
  <li>
    <span>Heading</span>
    <div>Copy</div>
  </li>
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
