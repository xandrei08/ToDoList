// Variables
let monday = document.querySelector(".monday");
let tuesday = document.querySelector(".tuesday");
let wednesday = document.querySelector(".wednesday");
let thursday = document.querySelector(".thursday");
let friday = document.querySelector(".friday");
let saturday = document.querySelector(".saturday");
let sunday = document.querySelector(".sunday");
let extraNotes = document.querySelector(".extra-notes");
const weekInput = document.querySelector(".week-input").textContent;
const savedNotes = document.querySelector(".notes-container");
let notesContainer = document.querySelector(".notes-container");
let resetBtn = document.querySelector(".reset");
let notesSubmited = document.querySelector(".notesSubmited");

//Arrays
const mondayTasks = [];
const tuesdayTasks = [];
const wednesdayTasks = [];
const thursdayTasks = [];
const fridayTasks = [];
const saturdayTasks = [];
const sundayTasks = [];
const notsTasks = [];

//Inputs
let mondayNotes = document.querySelector(".text-input-monday");
let tuesdayNotes = document.querySelector(".text-input-tuesday");
let wedNotes = document.querySelector(".text-input-wednesday");
let tuhNotes = document.querySelector(".text-input-thursday");
let friNotes = document.querySelector(".text-input-friday");
let satNotes = document.querySelector(".text-input-saturday");
let sunNotes = document.querySelector(".text-input-sunday");
let notesToAdd = document.querySelector(".text-input-notes");
// if (Object.keys(value).length === 0)

//Function to call the days. 
 function eventlistener(value,value2){
 value.addEventListener("keypress",function(e){
   if(e.key === "Enter"){
    if(value.value === ''){
     alert("Please add yor task")
    }else{
      value2();
    }
   }
 })
 }
// Monday
eventlistener(mondayNotes,function(){
  createLi(mondayTasks,mondayNotes,monday);
  resetTasks(monday);
});

 //Tuesday
 eventlistener(tuesdayNotes,function(){
  createLi(tuesdayTasks,tuesdayNotes,tuesday);
  resetTasks(tuesday);
});

 //Wednesday
 eventlistener(wedNotes, function () {
  createLi(wednesdayTasks, wedNotes, wednesday);
  resetTasks(wednesday)
});

 //Thursday
 eventlistener(tuhNotes, function () {
  createLi(thursdayTasks, tuhNotes, thursday);
  resetTasks(thursday)
});

 //Friday
 eventlistener(friNotes, function () {
  createLi(fridayTasks, friNotes, friday);
  resetTasks(friday)
});

//Saturday
eventlistener(satNotes, function () {
  createLi(saturdayTasks, satNotes, saturday);
  resetTasks(saturday)
});

//Sunday
eventlistener(sunNotes, function () {
  createLi(sundayTasks, sunNotes, sunday);
  resetTasks(sunday)
});
//Extra notes 
eventlistener(notesToAdd, function () {
  createLi(notsTasks, notesToAdd, extraNotes);
  resetTasks(extraNotes)
});

//Main function that creates the Li elements
function createLi(array,dayInput,day){
  array.push(dayInput.value);
  let li = document.createElement("li");
  li.classList.add("monday-input");
  let text = document.createTextNode(dayInput.value);
  li.appendChild(text);
  day.appendChild(li);
if(day.childElementCount === 8){
  dayInput.disabled = true;
}

// Attach event listener for deleting li elements
  li.addEventListener("click", function() {
    day.removeChild(li); // Remove the clicked li element
    array.splice(array.indexOf(dayInput.value), 1); // Remove the corresponding item from the array
    dayInput.disabled = false;
  });

}


// Main Function to reset all tasks and empty the boxes
function resetTasks(dayToReset){
resetBtn.addEventListener("click", function(){
  let resetTask = document.querySelectorAll(".monday-input");
  resetTask.forEach(element => {
    dayToReset.removeChild(element);
   let fieldsArray = [mondayNotes,tuesdayNotes,wedNotes,tuhNotes,friNotes,sunNotes,satNotes,notesToAdd];
    fieldsArray.forEach(element => {
      element.disabled = false;
    })
  })
})
}

// Notes Container 
notesSubmited.addEventListener("click",function(e){
  let submitBtn2 = document.querySelector(".submit-btn2");
  submitBtn2.style.display = "block";
  submitBtn2.addEventListener("click",function(){
      notesSubmited.innerHTML = 
    `<p class = "p-text-notes">${notesSubmited.textContent}</p>`
    notesSubmited.contentEditable = "false";
    notesSubmited.style.border = "none";
  
  })
})