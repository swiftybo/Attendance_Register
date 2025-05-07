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

let inputtedName = document.querySelector(".input").value;

document.querySelector(".btn").addEventListener("click", function () {
  let inputtedName = document.querySelector(".input").value;

  console.log(inputtedName, typeof inputtedName);
  for (let i = 0; i < register.length; i++) {
    if (inputtedName === register[i].firstName) {
      console.log("Name is is in the register");
    } else {
    }
  }

  //     if (register.includes({`firstName: ${inputtedName}`})) {
  //     console.log("name is is in the register");
  //   } else {
  //     console.log("not logged in register");
  //   }
});
