// Displaying the current time and date

$(document).ready(function(){

const m = moment()
document.getElementById("currentTime").textContent = m.format('MMMM Do YYYY, h:mm:ss a');;

// Taking user input from input box and storing it to local storage
// const saveBtns = document.querySelectorAll("div.container button");
// const userInput = document.querySelectorAll("input.description").value

// saveBtns.forEach(btn => {
//     btn.addEventListener('click', function (){
//     localStorage.setItem("data", btn.previousElementSibling.childNodes[1].value);  
//     })
// })
var time = moment().hours()
console.log(time)

    
var block9 = $("#9am .description")
var block10 = $("#10am .description")
var block11 = $("#11am .description")
var block12 = $("#12pm .description")
var block1 = $("#1pm .description")
var block2 = $("#2pm .description")
var block3 = $("#3pm .description")
var block4 = $("#4pm .description")
var block5 = $("#5pm .description")






$(".saveBtn").on("click", function(){
    var result = block9.val()
    console.log(result)
    localStorage.setItem("9AM", result);
    var result2 = block10.val()
    console.log(result2)
    localStorage.setItem("10AM", result2);
    var result3 = block11.val()
    console.log(result3)
    localStorage.setItem("11AM", result3);
    var result4 = block12.val()
    console.log(result4)
    localStorage.setItem("12PM", result4);
    var result5 = block1.val()
    console.log(result5)
    localStorage.setItem("1PM", result5);
    var result6 = block2.val()
    console.log(result6)
    localStorage.setItem("2PM", result6);
    var result7 = block3.val()
    console.log(result7)
    localStorage.setItem("3PM", result7);
    var result8 = block4.val()
    console.log(result8)
    localStorage.setItem("4PM", result8);
    var result9 = block5.val()
    console.log(result9)
    localStorage.setItem("5PM", result9);
})

//allow the local storage to say when reloaded
$("#9am .description").append(localStorage.getItem("9AM"));
$("#10am .description").append(localStorage.getItem("10AM"));
$("#11am .description").append(localStorage.getItem("11AM"));
$("#12pm .description").append(localStorage.getItem("12PM"));
$("#1pm .description").append(localStorage.getItem("1PM"));
$("#2pm .description").append(localStorage.getItem("2PM"));
$("#3pm .description").append(localStorage.getItem("3PM"));
$("#4pm .description").append(localStorage.getItem("4PM"));
$("#5pm .description").append(localStorage.getItem("5PM"));




// changing of the color of the rows
$("textarea").each(function(){


    var currentTime = parseInt(moment().hours());
    var rowNine = parseInt($(this).attr('name'))
    if (rowNine < currentTime){
        $(this).addClass("past")
    } else if (rowNine > currentTime){
        $(this).addClass("future")
    } else {
        $(this).addClass("present")
    }
  
})   
})



//Create if statements that allow color change of rows
// if (m > moment().hour(17)){
//     document.getElementById("block5").style.backgroundColor = "grey";

// }
//     else(m < moment().hour(17))
//         document.getElementById("block5").style.backgroundColor = "green";



// if (m > moment().hour(16)){
//     document.getElementById("block4").style.backgroundColor = "grey";

// }
//     else if(m < moment().hour(16)){
//         document.getElementById("block4").style.backgroundColor = "green";
// }

