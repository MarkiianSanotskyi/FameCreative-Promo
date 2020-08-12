/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#797977" });
 });

jQuery(document).ready(function() {
    // Initialise the first and second carousel by class selector.
	// Note that they use both the same configuration options (none in this case).
	jQuery('.d-carousel .carousel').jcarousel({
        scroll: 1
    });
});

$(document).ready(function(){
	dynamicFaq();
});

function dynamicFaq(){
	$('dd').hide();
	$('dt').bind('click', function(){
		$(this).toggleClass('open').next().slideToggle();;
	});
}

$(function () {
      $(".rslides").responsiveSlides({
		manualControls: '#slider-pager',  
        speed: 800,
		timeout: 8000,
		nav:true,
		
});
});

/*Fancybox*/
$(document).ready(function(){

            var forms = $('.form-modal'),
            cb_input = forms.find('input[type=text], input[type=email], input[type=tel] , textarea'),
            cr_close = $.fancybox.close();

    $("#fancybox-overlay").fancybox({
        padding: [0, 0, 0, 0],
        margin: [120, 0, 0, 0],
        scrolling: 'visible',
        minWidth: 414,
        minHeight: 351,
        autoSize: false,
        autoHeight: true,
        autoWidth: true,
        maxWidth: 9999,
        maxHeight: 9999,
        fixed: false,
        autoCenter: false,
        closeBtn: true,
        afterClose: function () {
            cb_input.val('');
        }
    });

    $('.btr').click(function () {
        $.fancybox.close();
    });
	
   });
/*Fancybox end*/  
