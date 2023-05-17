var name = prompt("Enter Your Name:");

var gender = prompt("Enter Your Gender:");

var age = prompt("Enter Your Age:");

if (age <= 0) {
  alert("Invalid age. Age must be greater than zero.");
}

var skipMessage = confirm("Do you want to skip the welcoming message?");

if (!skipMessage) {
  var title = "";
  if (gender.toLowerCase() === "male") {
    title = "Mr";
  } else if (gender.toLowerCase() === "female") {
    title = "Ms";
  } else {
    alert("Invalid gender. Welcome, " + name + "!");
  }
  alert("Welcome, " + title + " " + name + "!");
}
var mansaf = prompt("do you like Mansaf? (yes/no)");

var userStudy = prompt("do you study Javascript ? (yes/no)");

var userAge = prompt("are you above 25 years old? (yes/no)?");

var userAnswers =[age,gender,name,mansaf , userStudy, userAge]

 // function askingTheUserSomeQuestion(){
  


function travaresUserAnswer(){
  for (let i = 0; i < userAnswers.length; i++) {
 
    console.log(userAnswers[i]);
  }
}
travaresUserAnswer()









