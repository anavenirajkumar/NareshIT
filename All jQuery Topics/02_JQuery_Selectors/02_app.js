// Tag Selector , class  , id
$('.Orange').click(function() {
    $(this).css({
        'background-color' : 'orange',
        'padding' : '10px',
        'box-shadow' : '0 0 10px black',
        'border-radius' : '10px'
    });
});


// Attribute selection

let textBox = $('input[type="text"]');
textBox.focus(function () {
    $(this).css({
        'outline' : 'none',
        'font-size' : '25px',
        'border' : '1px solid blue'
    });
}).blur(function () {
    $(this).css({
        'background-color' : 'white',
        'font-size' : '16px',
        'border' : '1px solid lightgray'
    });
});