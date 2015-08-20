var main = function(){

	$('.btn').click(function(){
		var status=$('.status-box').val();
		date= new Date().toTimeString();
		$('<li>').text('status@'+date+':'+status).prependTo('.posts');
		$('.btn').addClass('disabled');
		$('.status-box').val('');
		$('.counter').text('140');
	});

	$('.status-box').keyup(function(){
		var charactersTyped = $('.status-box').val().length;
		var charactersLeft = 140 - charactersTyped;
		$('.counter').text(charactersLeft);
		
		if(charactersLeft<0){
			$('.btn').addClass('disabled');
		}
		else if(charactersLeft===140)
			$('.btn').addClass('disabled');
		else
			$('.btn').removeClass('disabled');
	});
}
$(document).ready(main);