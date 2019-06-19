// SMS App
let charCount = 100;
let smsAppFunction = () => {
    let textEnteredLength = document.querySelector('#text-area').value.length;
    let spanTag = document.querySelector('#chars');
    let displayCount = charCount - textEnteredLength;
    spanTag.textContent = (displayCount).toString();
};

 // Change Password
let changePassword = () => {
    let passwordBox = document.querySelector('#pass-box');
    let theAttribute = passwordBox.getAttribute('type');
    if(theAttribute === 'password'){
        passwordBox.setAttribute('type','text');
    }
    else{
        passwordBox.setAttribute('type','password');
    }
};

// Likes App
let likesCount = 0;
let dislikesCount = 0;
let total = 0;
let liked = () => {
    likesCount++;
    total++;
    document.querySelector('#likes').textContent = likesCount;
    document.querySelector('#total').textContent = total;
};

let disLiked = () => {
    dislikesCount++;
    total++;
    document.querySelector('#dislikes').textContent = dislikesCount;
    document.querySelector('#total').textContent = total;
};

// Slider App
let images = ['image1.jpg','image2.jpg','image3.jpeg','image4.jpeg','image5.jpeg','image6.jpeg','image7.jpeg'];

// farwardbutton
let count = 0;
let farwardButton = () => {
    let imgTag = document.querySelector('#img');
    let imageAddress = `../img/${images[count]}`;
    imgTag.setAttribute('src',imageAddress);
    changeAnimation(imgTag);
    count++;
    if(count > 6){
        count = 0;
    }
};

let backwardButton = () => {
    let imgTag = document.querySelector('#img');
    let imageAddress = `../img/${images[count]}`;
    imgTag.setAttribute('src',imageAddress);
    changeAnimation(imgTag);
    count--;
    if(count < 0){
        count = 6;
    }
};

let changeAnimation = () => {
    let zooms = ['jello','zoomIn' , 'bounce' ,'pulse','rubberBand','swing','tada','wobble','heartBeat' ,'bounceIn'];
    let randomNumber = Math.round(Math.random() * 10);
    let randomClass = zooms[randomNumber];
    let classList = document.querySelector('#img').classList;
    while (classList.length > 0) {
        classList.remove(classList.item(0));
    }
    document.querySelector('#img').classList.add('animated');
    document.querySelector('#img').classList.add(`${randomClass}`);
};