// Example of bad asynchronous programming; code that
// depends on the result of the asynchronous `readFile`
// is not inside the callback for that call.

var fs = require('fs');

console.log("Starting to read the file.");
var contents = "";

fs.readFile(__filename, "utf8", function(err, results) {
  contents = results;
});

console.log("Done reading the file:", contents);
