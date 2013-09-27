# sporeBalance
## Experimental CSS3 3D Transform Script

----------------------
Forces an element to rotate in 3D space away or toward the location of the mouse relative to the centre of the element. 


### Meta
----------
Date:			09/03/2013

Author:			Sean Bullock

Url:			[BlueSpore.com](http://bluespore.com)               

Twitter:		[@bluespore](http://twitter.com/bluespore)


### Usage
----------
Include the scripts in your head.
When the document is ready execute sporeBalance on the chosen element: $('.element').sporeBalance();
Add the following data-attributes to the element you're targeting:
* data-balance-threshold="70" - Change how much the balance target is affected by mouse movement.
* data-balance-perspective="500" - Change the 3D perspective value.
* data-balance-x="true" - Turn off x-axis rotation.
* data-balance-y="false" - Turn off y-axis rotation.
* data-balance-relative-parent=".row" - This is the element that reacts to mouse movements and determines how far you are from the centre point of the balance element. It must be a parent element.

Experiment with these values to your heart's content.


### Recognise
----------
It'd be rad if you [tweeted at me](http://twitter.com/bluespore) to show appreciation.