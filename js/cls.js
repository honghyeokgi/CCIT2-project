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

    $ans = 8;

    $.fn.checking = function(ck) {
        if (ck != $ans)
          window.location.href = 'http://192.168.137.1:3000/clo/clo2/';

        else
          window.location.href = 'http://192.168.137.1:3000/clo/clo1/';
    };
});
