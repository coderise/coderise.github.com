$(document).ready(function(){
	$('.dropdown').on('click', function() {
		$(this).find('ul').toggle('fast');
		$(this).siblings().find('ul').hide();
	});

	$('.icon-list').on('click', function() {
		$('nav[role="navigation"] > ul').toggle('fast');
	});
	
	$('.dropdownPlaces').on('click',function(){
		if($('.down').css('display')!='none'){
			$('.up').html('&#9650;').show().siblings('span').hide();
		} else if ($('.up').css('display')!='none'){
			$('.down').show().siblings('span').hide();
		}
	});
	
});