const request = require('request');
const fs = require('fs');


console.log("Fetching image")
request.get('https://sytantris.github.io/http-examples/future.jpg')
        .on('error', function (err) {
          console.log("Error encountered")
        })
        .on('response', function(response) {
          console.log(response.statusMessage, response.statusCode, response.headers['content-type'])
        })
        .pipe(fs.createWriteStream('./future.jpg'))

response.on
