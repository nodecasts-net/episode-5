// An example of using a flow control library to
// manage complex asynchronous functionality.

var funcs = require('./funcs');
var async = require('async'); // npm install async

var readFile = funcs.readFile,
    convertToPdf = funcs.convertToPdf,
    writePdfFile = funcs.writePdfFile;

function convert(inputFile, outputFile, callback) {
  async.waterfall([
    async.apply(readFile, inputFile),
    convertToPdf,
    async.apply(writePdfFile, outputFile)
  ], callback);
}

convert("myfile.html", "myfile.pdf", function(err) {
  if (err) console.log("There was an error!");
  else console.log("Done converting to PDF.");
});
