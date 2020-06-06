# Console Tweeter 
 ![npm][npm-image] ![express][express]     ![lic][lic] 

 
[npm-image]: https://img.shields.io/npm/v/simple-peer.svg 

[lic]: https://img.shields.io/apm/l/vim-mode
[express]: https://img.shields.io/github/v/release/expressjs/express

[downloads-image]: https://img.shields.io/npm/dm/simple-peer.svg
[downloads-url]: https://npmjs.org/package/simple-peer 




#### Simple console and web interface for twitter feed

## dependencies

- This application uses **Node.js** and express. 
- Make sure you have `Node v10.16.0` 


## install

```
npm install 
```
This will install all the dependencies used in the application. This project works in the browser with and in the console. It exports functions on the terminal.  

## start the server
```
node index
```

This will open `localhost:3000` in browser. 


## console display

To display the feed in the console, you can run 

```
node tweets.js
```

## API

Our API gives you response about both user and follow endpoints, with `localhost:3000/tweets` and `localhost:3000/follow` respectively. 

![img](https://gitlab.com/jonas-kgomo/tweet-feed/raw/master/media/main.png)