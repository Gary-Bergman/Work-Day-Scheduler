
// Global Variables
var currentDay = $("#currentDay");
var day = moment().format("MMM Do YY");
var currentTime = moment().format('HH');
var text = $(".description1").val();
var testText = $(".description1").text();

var textValue = "";
console.log(text);

var textNine = $("#nineAM").val;

var nineAM = moment().format('09');
var tenAM = moment().format('10');
var elevenAM = moment().format('11');
var twelvePM = moment().format('12');
var onePM = moment().format('13');
var twoPM = moment().format('14');
var threePM = moment().format('15');
var fourPM = moment().format('16');
var fivePM = moment().format('17');

// function testFunc() {
//     console.log(document.getElementById("myTextArea").value);
// };

var timeIndexed;
var timeArray = [09, 10, 11, 12, 13, 14, 15, 16, 17];
// var nineAM = timeArray[i];
// var tenAM = timeArray[1];
// var elevenAM = timeArray[2];
// var twelvePM = timeArray[3];
// var onePM = timeArray[4];
// var twoPM = timeArray[5];
// var threePM = timeArray[6];
// var fourPM = timeArray[7];
// var fivePM = timeArray[8];



console.log(currentTime)
// console.log(nineAM)
console.log(timeArray[0])

// Fill in current day in header
currentDay.text(day);


// write functions for past, present, and future


// need to write a loop to ++ checkedTime

// function checkTime() {
//     var timeIndexed;
//     var timeArray = [09, 10, 11, 12, 13, 14, 15, 16, 17];
//     timeIndexed = timeArray[i]
//     for (var i = 0; i < 9; i++) {
//         if (parseInt(currentTime) > timeArray[i]) {
//             $(timeIndexed).addClass('past')
//         } else if (parseInt(currentTime) == timeArray[i]) {
//             $(timeIndexed).addClass('present')
//         } else {
//             $(timeIndexed).addClass('future')
//         }
//     }
// }
// return checkTime();

function checkTime() {
    if (parseInt(currentTime) > parseInt(nineAM)) {
        $('#nineAM').addClass('past')
        return true;
    } else if (parseInt(currentTime) == parseInt(tenAM)) {
        $('#nineAM').addClass('present')
    } else {
        $('#nineAM').addClass('future')
    }
};
checkTime();

function checkTime1() {
    if (parseInt(currentTime) > parseInt(tenAM)) {
        $('#tenAM').addClass('past')
        return true;
    } else if (parseInt(currentTime) == parseInt(tenAM)) {
        $('#tenAM').addClass('present')
    } else {
        $('#tenAM').addClass('future')
    }
};
checkTime1();


function checkTime2() {
    if (parseInt(currentTime) > parseInt(elevenAM)) {
        $('#elevenAM').addClass('past')
        return true;
    } else if (parseInt(currentTime) == parseInt(elevenAM)) {
        $('#elevenAM').addClass('present')
    } else {
        $('#elevenAM').addClass('future')
    }
}

checkTime2();

function checkTime3() {
    if (parseInt(currentTime) > parseInt(twelvePM)) {
        $('#twelvePM').addClass('past')
        return true;
    } else if (parseInt(currentTime) == parseInt(twelvePM)) {
        $('#twelvePM').addClass('present')
    } else {
        $('#twelvePM').addClass('future')
    }
};

checkTime3();


function checkTime4() {
    if (parseInt(currentTime) > parseInt(onePM)) {
        $('#onePM').addClass('past')
        return true;
    } else if (parseInt(currentTime) == parseInt(onePM)) {
        $('#onePM').addClass('present')
    } else {
        $('#onePM').addClass('future')
    }
};

checkTime4();


function checkTime5() {
    if (parseInt(currentTime) > parseInt(twoPM)) {
        $('#twoPM').addClass('past')
        return true;
    } else if (parseInt(currentTime) == parseInt(twoPM)) {
        $('#twoPM').addClass('present')
    } else {
        $('#twoPM').addClass('future')
    }
};

checkTime5();


function checkTime6() {
    if (parseInt(currentTime) > parseInt(threePM)) {
        $('#threePM').addClass('past')
        return true;
    } else if (parseInt(currentTime) == parseInt(threePM)) {
        $('#threePM').addClass('present')
    } else {
        $('#threePM').addClass('future')
    }
};

checkTime6();


function checkTime7() {
    if (parseInt(currentTime) > parseInt(fourPM)) {
        $('#fourPM').addClass('past')
        return true;
    } else if (parseInt(currentTime) == parseInt(fourPM)) {
        $('#fourPM').addClass('present')
    } else {
        $('#fourPM').addClass('future')
    }
};

checkTime7();


function checkTime8() {
    if (parseInt(currentTime) > parseInt(fivePM)) {
        $('#fivePM').addClass('past')
        return true;
    } else if (parseInt(currentTime) == parseInt(fivePM)) {
        $('#fivePM').addClass('present')
    } else {
        $('#fivePM').addClass('future')
    }
};

checkTime8();

// create onclick function to turn on saves

// $(".saveBtn").on("click", function () {
//     console.log(text);


//     // console.log(text);
//     // textValue += $(this).val();
//     // console.log(textNine);
//     // $("textValue").text(textValue);
//     // var textField = $(this).parent().children("description");
// });



// $(document).ready(function () {
//     var savesnotesbtn = document.getElementById("savenotesbtn");

//     //FILL TEXT AREAS WITH NOTES
//     for (var i = 1; i < 11; i++) {
//       $("#note" + i + "input").val(localStorage.getItem("note" + i));
//     }

//     function saveNotes() {
//       //Change styles of button
//       $("#savenotesbtn").removeClass("notSaved").addClass("Saved");
//       // Save data to localstorage
//       for (var i = 1; i < 11; i++) {
//         localStorage.setItem("note" + i, $("#note" + i + "input").val());
//       }
//     };
//     savesnotesbtn.addEventListener("click", saveNotes);
// });




// // localStorage

// var inputKey = document.getElementById("inputKey")
// var inputValue = document.getElementById("inputValue")

// localStorage.setItem("name", "Gary");

// console.log(localStorage.getItem("name"));

// // console.log(localStorage.key(0));




// $(".saveBtn").on("click", function () {
//     if (text !== "") {
//         console.log(text)
//     }
//     // var value = inputValue.val();
//     // console.log(key);
//     // console.log(value);
// })