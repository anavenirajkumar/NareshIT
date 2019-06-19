// validate Form
let validateForm = () => {

    let isFormValid = validateUser()
                      && validateEmail()
                      && validatePassword()
                      && validateConfirmPassword()
                      && validatePasswordsMatch();

    // Logic
    if(isFormValid){
        alert('Form Submitted Successfully');
        return true;
    }
    else{
        return false;
    }

};

// Validate Username
let validateUser = () => {
    let username = document.querySelector('#username').value;
    if(username === ''){
        applyColors('#username');
        displayErrorMessage('User Name is Required');
        return false;
    }
    else if(!username.match(/^[A-Za-z0-9_]{1,15}$/)){
        applyColors('#username');
        displayErrorMessage('No Special Characters');
        return false;
    }
    else if(username.length < 5){
        applyColors('#username');
        displayErrorMessage('Enter at least 5 letters');
        return false;
    }
    else{
        removeColors('#username');
        return true;
    }
};

// Validate Email
let validateEmail = () => {
    let email = document.querySelector('#email').value;
    if(email === ''){
        applyColors('#email');
        displayErrorMessage('Email is Required');
        return false;
     }
    else{
        removeColors('#email');
        return true;
    }
};

// Validate Password
let validatePassword = () => {
    let password = document.querySelector('#password').value;
    if(password === ''){
        applyColors('#password');
        displayErrorMessage('Password is Required');
        return false;
    }
    else{
        removeColors('#password');
        return true;
    }
};

// Validate Confirm Password
let validateConfirmPassword = () => {
    let c_password = document.querySelector('#c_password').value;
    if(c_password === ''){
        applyColors('#c_password');
        displayErrorMessage('Confirm Password is Required');
        return false;
    }
    else{
        removeColors('#c_password');
        return true;
    }
};

// Validate PasswordsMatch
let validatePasswordsMatch = () => {
    let password = document.querySelector('#password').value;
    let c_password = document.querySelector('#c_password').value;
    if(c_password !== password){
        applyColors('#c_password');
        applyColors('#password');
        displayErrorMessage('Passwords not matched');
        return false;
    }
    else{
        removeColors('#c_password');
        removeColors('#password');
        return true;
    }
};

// Apply colors
let applyColors = (fieldId) => {
    let inputField = document.querySelector(`${fieldId}`);
    inputField.style.border = '1px solid red';
    inputField.style.boxShadow = '0 0 10px red';
};

// removeColors
let removeColors = (fieldId) => {
    let inputField = document.querySelector(`${fieldId}`);
    inputField.style.border = '1px solid green';
    inputField.style.boxShadow = '0 0 10px green';
};

// display Error Message
let displayErrorMessage = (message) => {
    let errorMsgDiv = document.querySelector('#error-msg');
    let h3Tag = document.createElement('h3');
    h3Tag.textContent = message;
    h3Tag.style.backgroundColor = 'red';
    errorMsgDiv.appendChild(h3Tag);
    setTimeout(removeErrorMessage,3000);
};

// remove Error Message
let removeErrorMessage = () => {
    document.querySelector('#error-msg h3').remove();
};