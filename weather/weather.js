const request = require('request');

request('https://weather.tsukumijima.net/api/forecast/city/330010', function (error, response, body) {
    if (!error && response.statusCode == 200) {
const data = JSON.parse(body);
console.log(body);
const weatherUrl = data[0].url;
console.log(weatherUrl);
}
});