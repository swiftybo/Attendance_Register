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

document.querySelector(".check").addEventListener("click", function () {
  let inputtedFirstName = document.querySelector(".firstName").value;
  let inputtedLastName = document.querySelector(".lastName").value;

  for (let i = 0; i < register.length; i++) {
    if (
      inputtedFirstName == register[i].firstName &&
      inputtedLastName == register[i].lastName
    ) {
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
      document.querySelector(".hidden").style.display = "inline";
    }
  }
});

document.querySelector(".add").addEventListener("click", function () {
  let newFirstName = document.querySelector(".firstNameAdd").value;
  let newLastName = document.querySelector(".lastNameAdd").value;
  let newYearOfBirth = document.querySelector(".birthYearNameAdd").value;

  const newObject = {
    firstName: newFirstName,
    lastName: newLastName,
    yearOfBirth: newYearOfBirth,
  };

  register.push(newObject);
  console.log(register);
});
