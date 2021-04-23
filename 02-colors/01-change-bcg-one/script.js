/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function Background(color) {
    let page = document.querySelector("body")
    let red = document.querySelector("#red")


    red.addEventListener("click", change);

    function change() {
        page.style.backgroundColor = "red";
    }


})();
(function Background(color) {
    let page = document.querySelector("body")
    let green = document.querySelector("#green")


    green.addEventListener("click", change);

    function change() {
        page.style.backgroundColor = "green";
    }


})();
(function Background(color) {
    let page = document.querySelector("body")
    let yellow = document.querySelector("#yellow")


    yellow.addEventListener("click", change);

    function change() {
        page.style.backgroundColor = "yellow";
    }


})();
(function Background(color) {
    let page = document.querySelector("body")
    let red = document.querySelector("#blue")


    blue.addEventListener("click", change);

    function change() {
        page.style.backgroundColor = "blue";
    }


})();