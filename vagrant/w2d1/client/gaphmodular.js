
function getAndPrintHTML (options) {
 var https = require('https');
 https.get(options, function(response) {
  response.setEncoding('utf8');
  var buffer = "";
  response.on('data', function(data) {
    buffer += data
    console.log(buffer);
  });
});

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
