module.exports = {
  readFile: function(file, callback) {
    setTimeout(callback.bind(null, null, "fake html"), 10);
  },

  convertToPdf: function(html, callback) {
    setTimeout(callback.bind(null, null, "fake data"), 10);
  },

  writePdfFile: function(file, data, callback) {
    setTimeout(callback, 100);
  }
};
