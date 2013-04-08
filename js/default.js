$(document).ready(function(){
	$('.dropdown').on('click', function() {
		$(this).find('ul').toggle('slow');
	});

	$('.icon-list').on('click', function() {
		$('nav[role="navigation"] > ul').toggle('slow');
	});

	
});