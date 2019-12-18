"use strict";

function validateContactForm() {
    let nameValue = document.forms["contactForm"]["name"].value;
    let emailValue = document.forms["contactForm"]["email"].value;
    if (nameValue == "" && emailValue == "") {
        alert("Name and Email must be filled out")
    } else if (nameValue == "") {
        alert("Name must be filled out")
    } else if (emailValue == "") {
        alert("Email must be filled out")
    }
}