// On Click Event
let h2Tag = document.querySelector('#msg');

let displayWishMsg = (message,color) => {
    h2Tag.textContent = message;
    h2Tag.style.backgroundColor = color;
};

// On Change Event
let displayOptions = () => {
    let selectedOption = document.querySelector('#select').value;
    let spanTag = document.querySelector('#option');
    spanTag.textContent = selectedOption;
};

// On Keyup Event
let displayText = () => {
    let textEntered = document.querySelector('#text-box').value;
    let textMsg = document.querySelector('#text-msg');
    textMsg.textContent = textEntered;
};

// Change Images
let changeImage = (imageName) => {
    let imgTag = document.querySelector('#img');
    imgTag.setAttribute('src',`../img/${imageName}`);
};