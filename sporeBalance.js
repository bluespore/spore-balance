/* --------------------------------------------------

@script:        sporeBalance
@date:          09/03/13
@author:        Sean Bullock
@url:           http://bluespore.com               
@twitter:       bluespore

@description:
Sexy CSS3 hovers based on mouse position

@usage:
Execute on elements you want the effect on.

@recognise:
It'd be rad if you tweeted at me to show appreciation.

-------------------------------------------------- */
(function($){

    $.fn.sporeBalance = function(){

    	var _self = $(this);

    	//Magic
    	$(_self.data('balance-relative-parent')).delegate(_self, 'mousemove', function(e){

			var height 			= parseInt(_self.outerHeight()),
				threshold	 	= parseInt(_self.data('balance-threshold')) ? parseInt(_self.data('balance-threshold')) : 8,
				use_x			= _self.data('balance-x'),
				use_y			= _self.data('balance-y'),
    			cp_x 		 	= parseInt(_self.outerWidth()) / 2,
    			cp_y 			= height / 2,
				x 				= e.pageX - this.offsetLeft,
				y 				= e.pageY - this.offsetTop,
				values 			= 'translateZ(1px) ',
				perspective 	= _self.data('balance-perspective') ? _self.data('balance-perspective') : 500;

			//Check directions
			if(use_x == true && use_y == true){
				values += 'rotateY(' + (x - cp_x) / threshold + 'deg) rotateX(' + (height - y - cp_y) / threshold + 'deg)';
			}
			else if(use_y == true){
				values += 'rotateX(' + (y - cp_y) / threshold + 'deg)';
			}
			else if(use_x == true){
				values += 'rotateY(' + (x - cp_x) / threshold + 'deg)';
			}

			//Fall back to using both axis
			else{
				values += 'rotateY(' + (x - cp_x) / threshold + 'deg) rotateX(' + (y - cp_y) / threshold + 'deg)';
			}

			//Apply CSS
			_self.css({
				
				'-moz-transform' 		: values,
				'-webkit-transform' 	: values,
				'-o-transform' 			: values,
				'-ie-transform' 		: values,
				'transform' 			: values

			}).parent().css('perspective', perspective + 'px');

    	});

    };

})(jQuery);