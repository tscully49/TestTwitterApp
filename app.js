var express = require('express');
var twit = require('twit');
var app = express();
var credentials = require('./credentials.js');
app.use(express.static('public'));

var T = new twit({
  consumer_key: credentials.twitterKey,
  consumer_secret: credentials.twitterSecret,
  access_token : credentials.twitterAccess,
  access_token_secret: credentials.twitterTokenSecret
})

var stream = T.stream('statuses/filter',
  { track: '#apple', language: 'en' });

stream.on('tweet',function(tweet) {
  console.log(tweet.text);
})

// app.listen(3000)
/* using basic */

