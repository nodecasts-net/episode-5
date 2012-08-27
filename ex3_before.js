// An example of nested callbacks, which can occur when
// multiple asynchronous operations depend on each other.

var funcs = require('./funcs');

var readFile = funcs.readFile,
    convertToPdf = funcs.convertToPdf,
    writePdfFile = funcs.writePdfFile;

function convert(inputFile, outputFile, callback) {
  readFile(inputFile, function(err, contents) {
    if (err) return callback(err);
    convertToPdf(contents, function(err, pdfData) {
      if (err) return callback(err);
      writePdfFile(outputFile, pdfData, function(err) {
        if (err) return callback(err);
        callback();
      });
    });
  });
}

convert("myfile.html", "myfile.pdf", function(err) {
  if (err) console.log("There was an error!");
  else console.log("Done converting to PDF.");
});
