function reverseStr(str){
    var listOfChars = str.split('');
    var reverseListOfChars = listOfChars.reverse();
    var reveStr = reverseListOfChars.join('');

    return reveStr
}

function isPalindrome(str){
    var reverse = reverseStr(str)

    return str === reverse;
}

function convertDateToStr(date){
    var dateStr = { day:'', month: '', year: ''};

    if(date.day < 10){
        dateStr.day = '0' + date.day;
    }
    else {
        dateStr.day = date.day.toString();
    }

    if(date.month < 10){
        dateStr.month = '0' + date.month;
    }
    else {
        dateStr.month = date.day.toString();
    }


    dateStr.year = date.year.toString();

    return dateStr
}

function getDateFormat(date) {
    var dateStr = convertDateToStr(date)

    var ddmmyy = dateStr.day + dateStr.month + dateStr.year;

    return [ddmmyy];
}





// console.log(reverseStr("hello"))
// console.log(reverseStr("racecar"))
// console.log(isPalindrome("hello"))
// console.log(isPalindrome("racecar"))

var date = {
    day: 5,
    month: 9,
    year: 2020
}

console.log(getDateFormat(date))