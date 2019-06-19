/* ------------------------------------------------------------------
                            Math Object Examples
 -------------------------------------------------------------------- */

// Math PI
let piValue = Math.PI;
console.log(piValue);

// Math sqrt
let sqrt = Math.sqrt(144);
console.log(`sqrt of 144 is : ${sqrt}`);

// find the min of 4 numbers
let min = Math.min(8798,546,484,41,561,894,61,61,4,4,7,7,897,651,8,1);
console.log(`Min : ${min}`);

// find the Max of 4 numbers
let max = Math.max(8798,546,484,41,561,894,61,61,4,4,7,7,897,651,8,1);
console.log(`Max : ${max}`);

// find the 'x' to the power of 'y' value, ex: 2^4
let pow = Math.pow(2,5);
console.log(`2 ^ 5 is : ${pow}`);

// generate the random numbers from 0 to 100
let random = Math.round(Math.random() * 10000000);
console.log(random);

/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/* ------------------------------------------------------------------
                            Date Object Examples
 -------------------------------------------------------------------- */

// get today's date
let date = new Date();
console.log(date);

// Get proper date
let today = new Date().toLocaleDateString();
console.log(today);

// Get Current Time
let time = new Date().toLocaleTimeString();
console.log(time);

// get full day of the week using switch statement
let day = new Date().getDay();
today = 'Today is : ';
switch(day){
    case 0:
        today += 'SUNDAY';
        break;
    case 1:
        today += 'MONDAY';
        break;
    case 2:
        today += 'TUESDAY';
        break;
    case 3:
        today += 'WEDNESDAY';
        break;
    case 4:
        today += 'THURSDAY';
        break;
    case 5:
        today += 'FRIDAY';
        break;
    case 6:
        today += 'SATURDAY';
        break;

    default:
        today += 'No Match';
        break;
}
console.log(today);

// Display a Digital Clock on the web page


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/* ------------------------------------------------------------------
                            Number Object Examples
 -------------------------------------------------------------------- */
let num1 = Number('100.125');
console.log(`value : ${num1} Type : ${typeof num1}`);

let num2 = 1000;
let str = num2.toString();
console.log(`value : ${str} Type : ${typeof str}`);

// Min Number
console.log(Number.MIN_SAFE_INTEGER);

// Max Number
console.log(Number.MAX_SAFE_INTEGER);

// Pos Infinity
console.log(Number.POSITIVE_INFINITY);

// Neg Infinity
console.log(Number.NEGATIVE_INFINITY);

/* ------------------------------------------------------------------
                            String Object Examples
 -------------------------------------------------------------------- */
let theStr = 'Good Morning';

// uppercase
console.log(theStr.toUpperCase());

// Lowercase
console.log(theStr.toLowerCase());

// charAt
console.log(theStr.charAt(0));

// charCodeAt
console.log(theStr.charCodeAt(0));

// Substring
console.log(theStr.substr(2,5)); //
console.log(theStr.substring(2,5)); //

// substring
console.log(theStr.substr(0,5));

// length
console.log(theStr.length);

// Example 1: Count the number of 'a' in the given String
let aStr = 'ABA';
let countAs = (str) => {
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str.charAt(i).toUpperCase() === 'A'){
            count++
        }
    }
    return count;
};
console.log(`Count is : ${countAs(aStr)}`);

// Example 2 : Reverse String
let theMsg = 'Good Morning'; // gninroM dooG
let reverseString = (str) => {
    let tempStr = '';
    for(let i=str.length-1; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
console.log(reverseString(theMsg).toUpperCase());

// Example 3 : isPalindrome String
theMsg = 'ABA';
let isPalindrome = (str) => {
     return str === reverseString(str);
};
console.log(`${theMsg} is palindrome ? : ${isPalindrome(theMsg)}`);

// Example 4: convertToPalindrome
theMsg = 'AB';
let convertToPalindrome = (str) => {
    let tempStr = str;
    for(let i=str.length-2; i>=0; i--){
        tempStr += str.charAt(i);
    }
    return tempStr;
};
console.log(convertToPalindrome(theMsg));

// Example 5: Convert the given numbers to String Number
let theNumber = '142';
let convertToString = (str) => {
    let tempStr = '';
    for(let i=0; i<str.length; i++){
        let digit = Number(str.charAt(i));
        switch(digit){
            case 0:
                tempStr += ' ZERO ';
                break;
            case 1:
                tempStr += ' ONE ';
                break;
            case 2:
                tempStr += ' TWO ';
                break;
            case 3:
                tempStr += ' THREE ';
                break;
            case 4:
                tempStr += ' FOUR ';
                break;
            case 5:
                tempStr += ' FIVE ';
                break;
            case 6:
                tempStr += ' SIX ';
                break;
            case 7:
                tempStr += ' SEVEN ';
                break;
            case 8:
                tempStr += ' EIGHT ';
                break;
            case 9:
                tempStr += ' NINE ';
                break;
        }
    }
    return tempStr;
};
console.log(convertToString(theNumber));

// Example 6: Convert the given numbers to String Number EASY
theNumber = '142';
let numbers = [' ZERO ',' ONE ' , ' TWO ' , ' THREE ' , ' FOUR ', ' FIVE ',' SIX ', ' SEVEN ',' EIGHT ' , ' NINE '];
let convertToWordNumber = (str) => {
    let tempStr = '';
    for(let i=0; i<str.length;i++){
        let digit = Number(str.charAt(i));
        tempStr += numbers[digit];
    }
    return tempStr;
};
console.log(convertToWordNumber(theNumber));

// Example 7: Reverse String Number
theNumber = '123';
let reverseStringNumber = (str) => {
    return convertToWordNumber(reverseString(str));
};
console.log(reverseSer));tringNumber(theNumb