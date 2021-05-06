/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    const img = document.querySelector("img");
    const goOn = img.src;
    const hover = img.getAttribute("data-hover");

    img.onmouseover = function () {
        img.src = hover;
    }
    img.onmouseout = function () {
        img.src = goOn;

    }

})();

//What have to be done:

//const img
//const start
//const hover en get its attribute
//img on mouse over
//img on mouse out