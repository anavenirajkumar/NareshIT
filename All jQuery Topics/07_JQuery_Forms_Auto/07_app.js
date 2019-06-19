// Key up on text Box
$('#username').keyup(function() {
    $('#user_text').text($(this).val());
});

// Key up on Password Box
$('#password').keyup(function() {
    $('#pass_text').text($(this).val());
});

// Key up on Email
$('#email').keyup(function() {
    $('#email_text').text($(this).val());
});