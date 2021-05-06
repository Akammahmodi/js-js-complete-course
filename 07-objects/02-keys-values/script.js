/* becode/javascript
 *
 * /06-objects/03-keys-values/script.js - 6.3: clés & valeurs
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", function () {
        const person = {
            FirstName: 'Akam',
            LastName: 'Mahmodi',
            Age: '33',
            City: 'Lier',
        };

        console.log(Object.keys(person));
        console.log(Object.values(person));
    });
})();