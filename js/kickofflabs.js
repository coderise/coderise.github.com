$(document).ready(function(){


	$('#submit_email').click(function(e){

		$.ajax({
//8915
			url: 'https://api.kickofflabs.com/v1/8915/subscribe', 

			data: $('#signup_form').serialize(),

			dataType: 'jsonp',

			jsonp: 'jsonp',

			jsonpCallback: 'subscribe_callback', 

			timeout: 2000, 

			error: function() {

				message = 'Could not subscribe the email address ' + $('#email').val();

				// alert(message);
				console.log(message);
				// $('#email').val('');

			}
		});

		e.preventDefault();

	});

});

function subscribe_callback(data)

{
				
	 alert('Your email has been added to our mailing list!'+data.email);
	console.log(data.email);
	$('#email').val('');

}