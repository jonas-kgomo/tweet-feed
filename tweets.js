// For reading text file code block
var fs = require('fs');
var user = fs.readFileSync('./media/user.txt');
var tweet = fs.readFileSync('./media/tweet.txt');


// follow 

function followParse(){
    var lines = user.toString().split('\r\n'); // line break, carriage return suitable on Windows
    var follow = [];

    for(var i = 0; i < lines.length; ++i){

        var values = lines[i].split(' follows ');
        follow[i] = {user : values[0], follows : values[1].split(', ')};
    }

    return follow;
}
    
//console.log(follow);

// tweet

function tweetParse(){

    var lines = tweet.toString().split('\r\n'); // line break suitable on Windows
    var tweets = [];

    for(var i = 0; i < lines.length; ++i){

        var values = lines[i].split('> ');
        tweets[i] = {user : values[0], tweet : values[1]};

        // truncate tweet if char > 280
        if(tweets[i].tweet.length > 280)
        console.log('your tweet is exeeding 280');

       // console.log(tweets);
    }

    return tweets;
}

//console.log(tweetParse());
var feed = followParse();
var twt = tweetParse();

function tweetFeed(){
     
      

      seed = feed[0].user;
      var flw = feed[0].follow;
      twt = twt[0].tweet;

      console.log(seed, twt);
      console.log(`@flw`);    
       
  }
  
//console.log(tweetFeed())


tweetFeed();