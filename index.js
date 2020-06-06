
const express = require('express')
const app = express()
const port = 3000
const tweets = require('./tweets')
//security protocols
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get('/tweets',  async(req, res) => {

  //const tweet = [{name: 'jonas', id:'tweet'}] 
  const tweet = tweets.tweet;
 // const tweet = tweets.tweetFeed.toString;
  
  res.send(tweet)
})


app.get('/follow',  async(req, res) => {

    //const tweet = [{name: 'jonas', id:'tweet'}] 
    const follow = tweets.follow;
   // const tweet = tweets.tweetFeed.toString;
    
    res.send(follow)
  })


// tweets

// creators

  
app.listen(port, () => console.log(`Example running on  ${port}`))








