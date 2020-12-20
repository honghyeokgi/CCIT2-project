$(function(){
    var loading = $('#loadbar').hide();
    $(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
    	loading.hide();
    });

    $("label.btn").on('click',function () {
    	var choice = $(this).find('input:radio').val();
    	$('#loadbar').show();
    	$('#quiz').fadeOut();
    	setTimeout(function(){
           $( "#answer" ).html(  $(this).checking(choice) );
            $('#quiz').show();
            $('#loadbar').fadeOut();
           /* something else */
    	}, 1500);
    });

    $ans = 10;

    $.fn.checking = function(ck) {
        if (ck == 10){
          window.location.href = 'http://192.168.137.1:3000/season/season_1';
        }else if(ck ==11){
          window.location.href = 'http://192.168.137.1:3000/season/season_2';
        }else if(ck == 12){
          window.location.href = 'http://192.168.137.1:3000/season/season_3';
        }else
          window.location.href = 'http://192.168.137.1:3000/season/season_4';
    };
});
