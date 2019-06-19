// External JQuery
$('#blue-btn').click(function() {
    $('#blue-card').toggle(1000);
    ($(this).text() === 'HIDE') ? $(this).text('SHOW'): $(this).text('HIDE') ;
});