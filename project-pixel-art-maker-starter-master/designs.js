// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

const colorPicker = document.getElementById("colorPicker");
var table = document.getElementById("pixelCanvas");


function makeGrid(event) {
  event.preventDefault();

  var h = document.getElementById("inputHeight").value;
  var w = document.getElementById("inputWidth").value;


  table.innerHTML = ""; // Empty table before inserting new stuff

  var tbody = document.createElement("tbody");

  for (var i = 0; i < h; i++) {           // N rows...
    var row = document.createElement("tr");    // Make row.
    for (var j = 0; j < w; j++) {         // N cells...
      var cell = document.createElement("td");

      // Make cell.
      row.appendChild(cell);// Insert cell into row.

      {

      }

    }
    tbody.appendChild(row);                    // Insert row into tbody
  }

  table.appendChild(tbody);                // Insert tbody into table
}
//color cell at one event 
table.addEventListener("click", function (event) {
  if (event.target.nodeName == "TD") {
    event.target.style.backgroundColor = colorPicker.value;
  }
});