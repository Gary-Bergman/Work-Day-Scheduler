
// Global Variables
var currentDay = $("#currentDay");
var day = moment().format("MMM Do YY");
var currentTime = moment().format('HH');
// var nineAM = moment().format('09');
// var tenAM = moment().format('10');
// var elevenAM = moment().format('11');
// var twelvePM = moment().format('12');
// var onePM = moment().format('13');
// var twoPM = moment().format('14');
// var threePM = moment().format('15');
// var fourPM = moment().format('16');
// var fivePM = moment().format('17');

var timeIndexed;
var timeArray = [09, 10, 11, 12, 13, 14, 15, 16, 17];
var nineAM = timeArray[i];
var tenAM = timeArray[1];
var elevenAM = timeArray[2];
var twelvePM = timeArray[3];
var onePM = timeArray[4];
var twoPM = timeArray[5];
var threePM = timeArray[6];
var fourPM = timeArray[7];
var fivePM = timeArray[8];



console.log(currentTime)
// console.log(nineAM)
console.log(timeArray[0])

// Fill in current day in header
currentDay.text(day);


// write functions for past, present, and future


//need to write a loop to ++ checkedTime

function checkTime() {
    var timeIndexed;
    var timeArray = [09, 10, 11, 12, 13, 14, 15, 16, 17];
    var nineAM = timeArray[i];
    var tenAM = timeArray[1];
    var elevenAM = timeArray[2];
    var twelvePM = timeArray[3];
    var onePM = timeArray[4];
    var twoPM = timeArray[5];
    var threePM = timeArray[6];
    var fourPM = timeArray[7];
    var fivePM = timeArray[8];
    timeIndexed = timeArray[i]
    for (var i = 0; i < 9; i++) {
        if (parseInt(currentTime) > timeArray[i]) {
            $(timeIndexed).addClass('past')
        } else if (parseInt(currentTime) == timeArray[i]) {
            $(timeIndexed).addClass('present')
        } else {
            $(timeIndexed).addClass('future')
        }
    }
}
return checkTime();
// console.log(checkTime());
// function checkTime() {
//     if (parseInt(currentTime) > parseInt(tenAM)) {
//         $('#tenAM').addClass('past')
//         return true;
//     } else if (parseInt(currentTime) == parseInt(tenAM)) {
//         $('#tenAM').addClass('present')
//     } else {
//         $('#tenAM').addClass('future')
//     }
// }
// console.log(checkTime());

// function checkTime() {
//     if (parseInt(currentTime) > parseInt(elevenAM)) {
//         $('#elevenAM').addClass('past')
//         return true;
//     } else if (parseInt(currentTime) == parseInt(elevenAM)) {
//         $('#elevenAM').addClass('present')
//     } else {
//         $('#elevenAM').addClass('future')
//     }
// }
// console.log(checkTime());


// function checkTime() {
//     if (parseInt(currentTime) > parseInt(nineAM)) {
//         $('#nineAM').addClass('past')
//         return true;
//     } else if (parseInt(currentTime) == parseInt(nineAM)) {
//         $('#nineAM').addClass('present')
//     } else {
//         $('#nineAM').addClass('future')
//     }
// }
// console.log(checkTime());

// function checkTime() {
//     if (parseInt(currentTime) > parseInt(nineAM)) {
//         $('#nineAM').addClass('past')
//         return true;
//     } else if (parseInt(currentTime) == parseInt(nineAM)) {
//         $('#nineAM').addClass('present')
//     } else {
//         $('#nineAM').addClass('future')
//     }
// }
// console.log(checkTime());

// function checkTime() {
//     if (parseInt(currentTime) > parseInt(nineAM)) {
//         $('#nineAM').addClass('past')
//         return true;
//     } else if (parseInt(currentTime) == parseInt(nineAM)) {
//         $('#nineAM').addClass('present')
//     } else {
//         $('#nineAM').addClass('future')
//     }
// }
// console.log(checkTime());

// function checkTime() {
//     if (parseInt(currentTime) > parseInt(nineAM)) {
//         $('#nineAM').addClass('past')
//         return true;
//     } else if (parseInt(currentTime) == parseInt(nineAM)) {
//         $('#nineAM').addClass('present')
//     } else {
//         $('#nineAM').addClass('future')
//     }
// }
// console.log(checkTime());

// function checkTime() {
//     if (parseInt(currentTime) > parseInt(nineAM)) {
//         $('#nineAM').addClass('past')
//         return true;
//     } else if (parseInt(currentTime) == parseInt(nineAM)) {
//         $('#nineAM').addClass('present')
//     } else {
//         $('#nineAM').addClass('future')
//     }
// }
// console.log(checkTime());

// function checkTime() {
//     if (parseInt(currentTime) > parseInt(nineAM)) {
//         $('#nineAM').addClass('past')
//         return true;
//     } else if (parseInt(currentTime) == parseInt(nineAM)) {
//         $('#nineAM').addClass('present')
//     } else {
//         $('#nineAM').addClass('future')
//     }
// }
// console.log(checkTime());

