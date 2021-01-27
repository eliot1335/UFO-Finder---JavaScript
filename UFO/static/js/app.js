// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Create a function to build the table
// Scratch the object.entries and use object.value to append values only
function buildTable(data){
    tbody.html(""); // Cleans the table first when the function is called each time
    data.forEach(ufoData => {
        console.table(ufoData);
        var row = tbody.append("tr");

       console.table(Object.values(ufoData));
       Object.values(ufoData).forEach((value) => {
           var cell = row.append("td");
           cell.text(value);
       });
    });
}

// Create another function to trigger and display filtered data
function buttonClick() {

    d3.event.preventDefault()
    var dateInput = d3.select("#datetime").property("value"); // Use D3 to select "Enter a Date"

    var filterData = tableData;

    // If filter the data to match the input date
    if (dateInput) {
        filterData = filterData.filter((row) => row.datetime === dateInput);
    }

    buildTable(filterData);
}


d3.selectAll("#filter-btn").on("click", buttonClick);
buildTable(tableData);