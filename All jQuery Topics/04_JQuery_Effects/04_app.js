// Hide + Show
$('#btn-1').click(function() {
    if($(this).text() === 'HIDE'){
        $(this).text('SHOW');
        $('#card-1').hide();
    }
    else{
        $(this).text('HIDE');
        $('#card-1').show();
    }
});

// Toggle
$('#btn-2').click(function() {
    $('#card-2').toggle();
    if($(this).text() === 'HIDE'){
        $(this).text('SHOW');
    }
    else{
        $(this).text('HIDE');
    }
});


// show() , hide() -> toggle()

// fadeIn() , fadeOut() -> fadeToggle()

// slideup() , slideDown() -> slideToggle()