
// Global Variables
var currentDay = $("#currentDay");
var day = moment().format("MMM Do YY");
var currentTime = moment().format('HH');

// Fill in current day in header
currentDay.text(day);

// grabs all textareas
var descript = document.getElementsByClassName("description");
// This code impliments a dual fashion wherein I'm both checking an id to add a class to as well as using the literal number of that id (09, 10, 11 etc) to compare to the current time!
for (var i = 0; i < descript.length; i++) {
    // console.log(descript[i].getAttribute("id"));
    if (parseInt(currentTime) > parseInt(descript[i].getAttribute("id"))) {
        $("#" + descript[i].getAttribute("id")).addClass('past');
        // return true;
    } else if (parseInt(currentTime) == parseInt(descript[i].getAttribute("id"))) {
        $("#" + descript[i].getAttribute("id")).addClass('present')
    } else {
        $("#" + descript[i].getAttribute("id")).addClass('future')
    }
};

// localStorage get - Short form
var arrayInput = JSON.parse(localStorage.getItem("keyInput")) || [];

// localStorage
$(".saveBtn").on("click", function () {
    var text = $(this).siblings("textarea").val();
    var id = $(this).siblings("textarea").attr("id");
    // Need to push an OBJECT into arrayInput
    // Object has property-value pair
    arrayInput.push({ notes: text, idNum: id });
    localStorage.setItem("keyInput", JSON.stringify(arrayInput));
})

// Take note from storage and display it on textfield AFTER refresh is hit. Go into the stored array and get the property-value to display on the text area. 
function displayNotes() {
    for (var i = 0; i < arrayInput.length; i++) {
        var objectNotes = arrayInput[i].notes;
        var objectId = arrayInput[i].idNum;
        $("textarea").each(function () {
            if ($(this).attr("id") == objectId) {
                $(this).text(objectNotes);
            }
        })
    }
};
displayNotes();