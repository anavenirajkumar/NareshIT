// on Change Event

// get the element
let selectBox = document.querySelector('#select-tag');
// hook up an event listener
selectBox.addEventListener('change',function() {
    let selectedOption = selectBox.value;
    let spanTag = document.querySelector('#span-1');
    spanTag.innerText = selectedOption;
});

// key up event
let reverseString = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
let textBox = document.querySelector('#username');
textBox.addEventListener('keyup',function() {
    let textEntered = textBox.value;
    let h3Tag = document.querySelector('#user-text');
    h3Tag.innerText = reverseString(textEntered);
});


// SMS App
let textArea = document.querySelector('#text-area');
let charCount = 100;
textArea.addEventListener('keyup',function() {
    let textEnteredLength = textArea.value.length;
    let spanTag = document.querySelector('#span-2');
    spanTag.innerText = (charCount -  textEnteredLength);
});

// Change the Password
let checkBox = document.querySelector('#check');
checkBox.addEventListener('change',function() {
   let passwordBox = document.querySelector('#password');
   let theAttribute = passwordBox.getAttribute('type');
   if(theAttribute === 'password'){
       passwordBox.setAttribute('type','text');
   }
   else{
       passwordBox.setAttribute('type','password');
   }
});