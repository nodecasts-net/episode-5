// Example of good asynchronous programming; code that
// depends on the result of the asynchronous `readFile`
// is inside the callback for that call.

var fs = require('fs');

console.log("Starting to read the file.");

fs.readFile(__filename, "utf8", function(err, results) {
  console.log("Done reading the file:", results);
});
