/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    document.getElementById("run").addEventListener("click", function () {
        const inputValue = Number(document.getElementById("number").value);
        let factorialValue = 1;
        let Value;
        for (let i = 1; i <= Value; i++) {
            factorialValue = Value * i;
        }
        alert(`The factorial of ${Value} is ${Value}.`);
    });
})();