var https = require('https');

// console.log("I did it!");

// Make a simple request to http://www.example.org

var options = {
  host: 'www.example.org',
  path: "/"
};

var callback =function(res){
  console.log('In response handler callback');
  res.on('data', function(data){
    console.log("[--- CHUNK OF LENGTH " + data.length + '---]');
    console.log(data.toString());
  });

};

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");