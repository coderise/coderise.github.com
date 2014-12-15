$(document).ready(function(){
	$('.dropdown').on('click', function() {
		$(this).find('ul').toggle('fast');
		$(this).siblings().find('ul').hide();
	});

	$('.icon-list').on('click', function() {
		$('nav[role="navigation"] > ul').toggle('fast');
	});

	
});