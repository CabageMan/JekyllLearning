"use strict";

document.getElementById("submitButton").addEventListener("click", function(event){
    event.preventDefault();
    validateContactForm();
});

function validateContactForm() {
    let nameValue = document.forms["contactForm"]["name"].value;
    let emailValue = document.forms["contactForm"]["email"].value;
    if (nameValue == "" && emailValue == "") {
        alert("Name and Email must be filled out");
    } else if (nameValue == "") {
        alert("Name must be filled out");
    } else if (emailValue == "") {
        alert("Email must be filled out");
    } else {
        let subjectValue = document.forms["contactForm"]["subject"].value;
        let messageValue = document.forms["contactForm"]["message"].value;
        let alertString = `You entered:\nName: ${nameValue}\nEmail: ${emailValue}`;
        if (isValid(subjectValue)) {
            alertString += `\nSubject: ${subjectValue}`;
        }
        if (isValid(messageValue)) {
            alertString += `\nMessage: ${messageValue}`;
        }
        alert(alertString);
    }
}

// Helpers
function isValid(str) {
    return (!isEmpty(str) && !isBlank(str) && !hasOnlyWhiteSpaces(str));
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function hasOnlyWhiteSpaces(str) {
    return (str.length === 0 || !str.trim());
}