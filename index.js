
const express = require('express')
const app = express()
const port = 3000
const tweets = require('./tweets')
var path = require('path')
//security protocols
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
  
app.get('/tweets',  async(req, res) => {

  //const tweet = [{name: 'jonas', id:'tweet'}] 
  const tweet = tweets.tweet;
 // const tweet = tweets.tweetFeed.toString;
  
  res.send(tweet);
})


app.get('/follow',  async(req, res) => {

    //const tweet = [{name: 'jonas', id:'tweet'}] 
    const follow = tweets.follow;
   // const tweet = tweets.tweetFeed.toString;
    
    res.send(follow)
  })


// tweets

// creators

  
app.listen(port, () => console.log(`Tweets are running here: localhost:${port} \nRun 'node tweets.js' for console`))








