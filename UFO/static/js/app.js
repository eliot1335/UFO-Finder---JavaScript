// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Try to build the table
tbody.html("");
// Step 1: Loop Through `data` and console.log each object
// Step 2:  Use d3 to append one table row `tr` for each object
// Step 3:  Use `Object.entries` to console.log each value
// Step 4: Use d3 to append 1 cell per sighting report value (date/time, city, state, country, shape, and comment)
// Step 5: Use d3 to update each cell's text with sighting report values
// Simplefied using Arrow Functions
// data.forEach((ufoData) => {
//     var row = tbody.append("tr");
//     Object.entries(ufoData).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });

// Create a function to build the table
function buildTable() {
    tbody.html(""); // Cleans the table first when the function is called each time
    data.forEach((ufoData) => {
        var row = tbody.append("tr");
        Object.entries(ufoData).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
}

buildTable(tableData);