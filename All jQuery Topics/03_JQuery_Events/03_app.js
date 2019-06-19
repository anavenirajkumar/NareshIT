// Change The Image
$('#change-btn').click(function() {
    $('#img').attr('src','../img/image2.jpg');
});

// Key up event
// JS way
/*let textBox = document.querySelector('#input-field');
textBox.addEventListener('keyup',function() {
   let textEntered = textBox.value;
    let textField = document.querySelector('#text-field');
    textField.textContent = textEntered;
});*/

// JQuery
$('#input-field').keyup(function() {
    $('#text-field').text($(this).val());
});

// Change Event
$('#select-box').change(function() {
    $('#display-option').text($(this).val());
});