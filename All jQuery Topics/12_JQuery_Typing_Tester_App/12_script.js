// Get the HTML Elements
let textArray=["Let us now look deep into what are objects. If we consider the real-world, we can find many objects around us, cars, dogs, humans, etc. All these objects have a state and a behavior.","If we consider a dog, then its state is - name, breed, color, and the behavior is - barking, wagging the tail, running.","If you compare the software object with a real-world object, they have very similar characteristics.","Software objects also have a state and a behavior. A software object's state is stored in fields and behavior is shown via methods.","So in software development, methods operate on the internal state of an object and the object-to-object communication is done via methods.","A class can have any number of methods to access the value of various kinds of methods. In the above example, barking(), hungry() and sleeping() are methods.","Following are some of the important topics that need to be discussed when looking into classes of the Java Language.","A collections framework is a unified architecture for representing and manipulating collections. All collections frameworks contain the following","In addition to collections, the framework defines several map interfaces and classes. Maps store key/value pairs. Although maps are not collections in the proper use of the term, but they are fully integrated with collections.","A constructor initializes an object when it is created. It has the same name as its class and is syntactically similar to a method. However, constructors have no explicit return type."];
let clapSound = $('#clap-sound');
let congratsSound = $('#congrats-sound');
let timer = 0;
let timerRunning = false;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let interval = 0;

// Key up event for Text Area
$('#text-area').keyup(function() {
    let textEnteredLength = $(this).val().length;
    if(textEnteredLength === 1 && !timerRunning){
        // start Timer
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
    let originalText = $('#original-text').text();
    let textEntered = $(this).val();
    let partialText = originalText.substr(0,textEntered.length);
    evaluateText(originalText,textEntered,partialText);
});

// Click event on reset button
$('#reset-button').click(function() {
    clearInterval(interval);
    clearFields();
    $('#text-area').val('');
    $('#message-card').removeClass('bg-success').removeClass('bg-danger').removeClass('bg-primary').addClass('bg-light');
    $('#message').text('');
    $('#minutes').text('00');
    $('#seconds').text('00');
    $('#m-seconds').text('00');
    generateRandomText();
});

// Evaluate Text
let evaluateText = (originalText,textEntered,partialText) => {
    if(textEntered === ''){
        // gray
        $('#message-card').removeClass('bg-success').removeClass('bg-danger').removeClass('bg-primary').addClass('bg-light');
        $('#message').text('');
    }
    else{
        if(textEntered === originalText){
            // green
            $('#message-card').removeClass('bg-light').removeClass('bg-danger').removeClass('bg-primary').addClass('bg-success');
            $('#message').text('Congratulations');
            // Stop the timer
            clearInterval(interval);
            displayCongratsModal();
            congratsSound.trigger('play');
        }
        else{
            if(textEntered === partialText){
                // blue
                $('#message-card').removeClass('bg-success').removeClass('bg-danger').removeClass('bg-light').addClass('bg-primary');
                $('#message').text('Correct !');
            }
            else{
                // red
                $('#message-card').removeClass('bg-success').removeClass('bg-light').removeClass('bg-primary').addClass('bg-danger');
                $('#message').text('Wrong !');
                clapSound.trigger('play');
            }
        }
    }
};

// Start Timer
let startTimer = () => {
    timer++;

    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));
    milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));

    $('#minutes').text(leadingZero(minutes));
    $('#seconds').text(leadingZero(seconds));
    $('#m-seconds').text(leadingZero(milliSeconds));
};

// leading Zero
let leadingZero = (time) => {
    if(time <= 9){
        return '0' + time;
    }
    else{
        return time;
    }
};

// clearFields
let clearFields = () => {
    timer = 0;
    timerRunning = false;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    interval = 0;
};

// Generate random Text
let generateRandomText = () => {
    let randomIndex = Math.floor(Math.random() * 10);
    let randomString = textArray[randomIndex];
    $('#original-text').text(randomString);
};

// displayCongratsModal
let displayCongratsModal = () => {
    $('#modal-minutes').text(leadingZero(minutes));
    $('#modal-seconds').text(leadingZero(seconds));
    $('#modal-milliSeconds').text(leadingZero(milliSeconds));
    $('#congrats-modal').modal('show');
};