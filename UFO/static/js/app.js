// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Try to build the table

// // Step 1: Loop Through `data` and console.log each object
// data.forEach(function(ufoData) {
//     console.log(ufoData);
// })

// // Step 2:  Use d3 to append one table row `tr` for each object
// data.forEach(function(ufoData) {
//   console.log(ufoData);
//   var row = tbody.append("tr");
// });

// Step 3:  Use `Object.entries` to console.log each value
// data.forEach(function(ufoData) {
//   console.log(ufoData);
//   var row = tbody.append("tr");

//   Object.entries(ufoData).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });