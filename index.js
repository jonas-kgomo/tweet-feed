const express = require('express')
const app = express()
const port = 3000

//security protocols
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get('/',  (req, res) => 
    res.send('Hello World')
)

app.
  
app.listen(port, () => console.log(`Example running on  ${port}`))