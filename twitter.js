var express = require('express');
var app = express();

var request = require('request');
var url = require('url');

app.get('/tweets/:username', function(req,response) {

	var username = req.params.username;

	var options = {
		protocol: "http",
		host: "api.twitter.com",
		pathname: "/1/statuses/user_timeline.json",
		query: { screen_name: username, count: 10 }
	};

	var twitterUrl = url.format(options);
	
	request(twitterUrl, function(err, res, body) {
	
		var tweets = JSON.parse(body);
		response.locals = {tweets: tweets, name: username};
		response.render('tweets.ejs');							// install npm module ejs (embedded javascript) - use the tweets.eks template


	}); //.pipe(response);
});