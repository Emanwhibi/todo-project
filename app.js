console.log("Hello, world!");
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

// phase 2

// def ask_question(question):
//     while True:
//         answer = input(question + " (Yes/No): ")
//         if answer.lower() == "yes":
//             return True
//         elif answer.lower() == "no":
//             return False
//         else:
//             print("Invalid input. Please enter 'Yes' or 'No'.")


// def ask_multiple_questions(num_questions):
//     answers = []
//     for i in range(num_questions):
//         question = input("Are you hungry?" + str(i + 1) + ": ")
//         if question.strip() == "":
//             print("Invalid question. Skipping to the next one.")
//             continue
//         answer = ask_question(question)
//         answers.append(answer)
//     return answers


// def print_answers(answers):
//     print("\nAnswers:")
//     for i, answer in enumerate(answers):
//         print("Question", i + 1, ":", "Yes" if answer else "No")
//         for i, answer in enumerate(answers):
//     print("Question #" + str(i+1) + " - Answer:", answer)





