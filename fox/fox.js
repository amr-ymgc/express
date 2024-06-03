const request = require('request');

request('https://randomfox.ca/floof/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
const data = JSON.parse(body);
console.log(body);
const foxImageUrl = data[0].url;
console.log(foxImageUrl);
}
});