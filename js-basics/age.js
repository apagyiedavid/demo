let userName = prompt("what is your name");
// prompt the userb for the age
 let userAge = prompt("what is your age");
 // convert the age into number
 userAge = parseInt("userAge, 10");
 if (isNaN(userAge) || userAge > 10) {
    alert("Please enter a valide age.");
 } else {
    // get the current year
    let currentYear = new Date().getFullYear();
    // caculate year of birth
 let yearofBirth = currentYear - userAge;
 // dis[play the result
 alert("Hello " + userName + " ! You were born in the year " +  yearofBirth + ".");
 }

 