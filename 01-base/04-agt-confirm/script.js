/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let age = prompt('How old are you?',);
    alert(`You are ${age} years old!`);
    let gender = prompt('What is your gender',);
    alert(`You are ${gender}`);
    let city = prompt('Where do you live?',);
    alert(`You live in ${city}`);


    var resault = confirm ("You filled in: " + age + " years old, " + gender + ", from " + city + ". Is this correct?");

    if (resault === true) {
        alert("It confirmed");
    } else if (resault === false) {
        alert("Please give correct information");
location.reload();
    }
}
())"You filled in: " + age + " years old, " + gender + ", from " + town + ". Is this correct?"