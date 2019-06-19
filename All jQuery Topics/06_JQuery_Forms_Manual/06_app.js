// Click on submit Button
$('#submit-button').click(function() {
    $('#user_text').text($('#username').val());
    $('#email_text').text($('#email').val());
    $('#pass_text').text($('#password').val());
});