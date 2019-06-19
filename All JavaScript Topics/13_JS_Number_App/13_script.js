let numbers = [' ZERO ',' ONE ' , ' TWO ' , ' THREE ' , ' FOUR ', ' FIVE ',' SIX ', ' SEVEN ',' EIGHT ' , ' NINE '];
let convertToWordNumber = (str) => {
    let tempStr = '';
    for(let i=0; i<str.length;i++){
        let digit = Number(str.charAt(i));
        tempStr += numbers[digit];
    }
    return tempStr;
};

// get the number Box
let numberBox = document.querySelector('#number');
numberBox.addEventListener('keyup',function() {
   let textEntered = numberBox.value;
   let stringNumber = convertToWordNumber(textEntered);
   document.querySelector('#text-number').textContent = stringNumber;
});