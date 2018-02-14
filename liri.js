var keys = require("./keys.js")
console.log(keys);

var Twitter = require('twitter');
 
var client = new Twitter({
    consumer_key: 'dkwToGh1uUYl7GBrkrJu0n3MQ',
  consumer_secret: 'l4eao34oeb96tA63JZHYlDEoYcOLmLQ0VLDBYIdvR7nSEReUoh',
  access_token_key: '2807407982-N87cdI46rKU3GPDMzv5VC6sxmEuZxZzoN2OyXMW',
  access_token_secret: 'dEhzJED4AYvCAnCccq0FkpsT8tBbea5MCeNR9mpJlq1fX'
});
 


var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "74d3f9f2f4244307857dda8a3e0dca8e",
  secret: "fb435f72c7294b6a90698e5814bc423d"
});




if (process.argv[2]) {
  var userinput = process.argv[2];
}

if (userinput === "my-tweets"){ 
	var params = {screen_name: 'AbdelFaisal'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    
    for (var i = tweets.length - 1; i >= 0; i--) {
    	
    	console.log(tweets[i].text)
    }
  }
});

	
}
else if( userinput === "spotify-this-song"){
	var nodeArg = process.argv;

	
	var songName = "";

	
	for (var i = 3; i < nodeArg.length; i++) {

	   
	    songName += nodeArg[i] + " ";


	}
	spotify.search({ type: 'track', query: songName }, function(err, data) {
 		if (err) {
    		return console.log('Error occurred: ' + err);
  		}
  		for (var i = 0; i < data.tracks.items.length; i++) {
  			// console.log(data.tracks.items)
  			console.log(data.tracks.items[i].album.name); 
		    console.log(data.tracks.items[i].album.href); 
  		}
        // console.log(JSON.stringify(data, null, 2))
		// console.log(data.tracks.items[0].album.artists[0].name); 
		// console.log(data.tracks.items[0].album.artists[0].href); 
		// console.log(data.tracks.items[0].album.artists[0].songName);
		// console.log(data.tracks.items[0].album.artists.name.popularity);
		// console.log(data.tracks.items[0].album);

	});



}


	// var imdbRating = ""

 // else if(userinput==="movie-this"){

//  	var request = require("request");


// request("http://www.omdbapi.com/apikey.aspx?VERIFYKEY=ed6cd174-fc10-4855-b434-1550c35f6879", function(error, response, body) {

//   // If there were no errors and the response code was 200 (i.e. the request was successful)...
//   if (!error && response.statusCode === 200) {

//     // Then we print out the imdbRating
//     console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
//   }
// });







// else if(userinput==="do-what-it-says"){

// 	var fs = require("fs");


// fs.readFile("do-what-it-says", "utf8", function(error, data) {

//     // If the code experiences any errors it will log the error to the console.
//     if (error) {
//         return console.log(error);
//     }

//     // We will then print the contents of data
//     console.log(data);

//     // Then split it by commas (to make it more readable)
//     var dataArr = data.split(",");

//     // We will then re-display the content as an array for later use.
//     console.log(dataArr);

// });





