$(document).ready(function(){
	$('.hide').click(function(){
		$('.form').css('margin-right','-350px');
		$('.hide').css('display','none');
		$('.show').css('display','block');

	});
	$('.show').click(function(){
		$('.form').css('margin-right','0');
		$('.show').css('display','none');
		$('.hide').css('display','block');
	});
});