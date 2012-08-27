// Assign a function to a variable

var logger = function(message) {
  console.log("MESSAGE:", message);
}

logger("my message");

// Pass a function into another function via a variable

function output(message, func) {
  func(message);
}

output("my other message", logger);

// Pass a function into another function anonymously

output("my other message", function(message) {
  console.log("MESSAGE:", message);
});
