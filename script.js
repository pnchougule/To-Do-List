"use strict";

var tasklist = ["Charge your phone", "eat an apple"];
let choice;

document.getElementById("start").addEventListener("click", function () {
  choice = prompt("Enter your choice: ");

  while (choice !== "Quit") {
    if (choice === "New") {
      let task = prompt("Enter new task");
      tasklist.push(task);
      console.log("New task added.");
    }
    if (choice === "List") {
      tasklist.forEach(function (task, i) {
        console.log(i + ": " + task);
      });
    }
    if (choice === "Delete") {
      let count = prompt("Which task you want to delete");
      tasklist.splice(count, 1);
      console.log("Task deleted.");
    }
    choice = prompt("Enter your choice: ");
  }
  console.log("You quit the app");
});
