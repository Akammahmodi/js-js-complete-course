/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const target = document.getElementById("target");
    /*
    <tr>
    <td></td>
    <td></td>
    <td></td>
    ...
    </tr>
    */

    const tableNode = document.createElement("table");
    const tableRow = document.createElement("tr");
    const table = target.appendChild(tableNode);

    for(let rows = 0; rows < 10; rows++){
        let newRow = table.insertRow();
        let newCell = newRow.insertCell();
        newCell.appendChild(document.createTextNode(rows +1));

        /*  const newRow = document.createElement("tr");
          console.log(newRow);
          table.appendChild(newRow);*/
    }


})();