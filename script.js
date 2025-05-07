"use strict";

let register = [
  { firstName: "John", lastName: "Doe", yearOfBirth: 1979 },
  { firstName: "Ian", lastName: "Foot", yearOfBirth: 1988 },
  { firstName: "Steven", lastName: "Talks", yearOfBirth: 1992 },
  { firstName: "Barty", lastName: "Hall", yearOfBirth: 2003 },
  { firstName: "Clarity", lastName: "Farrow", yearOfBirth: 1995 },
  { firstName: "Emily", lastName: "Chives", yearOfBirth: 1955 },
  { firstName: "Steven", lastName: "Row-Fern", yearOfBirth: 1988 },
];

document.querySelector(".btn").addEventListener("click", function () {
  let inputtedName = document.querySelector(".input").value;

  for (let i = 0; i < register.length; i++) {
    if (inputtedName === register[i].firstName) {
      console.log("Name is is in the register");
      document.querySelector(".message").textContent =
        "You are now registered!";
      document.querySelector(".message").style.color = "#60b347";
      break;
    } else {
      console.log("Not included in the attendees list");
      document.querySelector(".message").textContent =
        "You are not part of the invite list.";
      document.querySelector(".message").style.color = "#de0a26";
    }
  }

  //     if (register.includes({`firstName: ${inputtedName}`})) {
  //     console.log("name is is in the register");
  //   } else {
  //     console.log("not logged in register");
  //   }
});
