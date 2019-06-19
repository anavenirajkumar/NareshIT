// SMS App
let charCount = 100;
$('#text-area').keyup(function() {
    $('#count').text(charCount - $(this).val().length);
});

// Change Password
$('#check').change(function() {
    let attribute  = $('#password').attr('type');
    if(attribute === 'password'){
        $('#password').attr('type','text');
    }
    else{
        $('#password').attr('type','password')
    }
});

// Likes App
let likes = 0;
let dislikes = 0;
let total = 0;
$('#likes-btn').click(function() {
    likes++;
    total++;
    $('#likes-count').text(likes);
    $('#total').text(total);
});
$('#dislikes-btn').click(function() {
    dislikes++;
    total++;
    $('#dislikes-count').text(dislikes);
    $('#total').text(total);
});

// Hobbies Selection App
// check on Eating
$('#eating').change(function() {
    let card = $('#eat-card');
    (card.hasClass('d-none')) ? card.removeClass('d-none') : card.addClass('d-none');
});

// check on coding
$('#coding').change(function() {
    let card = $('#code-card');
    (card.hasClass('d-none')) ? card.removeClass('d-none') : card.addClass('d-none');
});

// check on Sleeping
$('#sleeping').change(function() {
    let card = $('#sleep-card');
    (card.hasClass('d-none')) ? card.removeClass('d-none') : card.addClass('d-none');
});