module.exports = function getHTML (options, callback) {
  function getHTML (options, callback) {
    var https = require('https');
    https.get(options, function(response) {
     response.setEncoding('utf8');
     var html = "";
     response.on('data', function(data) {
       html += data;
     });
     response.on('end', function() {
       callback(html);
     });
   });
  }
  function printHTML (html) {
    console.log(html);
  }

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };
};
