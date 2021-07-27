console.log('My first express app');

//just giving the name means it will look in the modules folder
// load from node_modules
const express = require('express');

// Create our "app" (server)
const app = express();

// Tell express where to find all
// of our "public" files
// aka our "client-side" files
// aka "static assets"
app.use(express.static('./server/public'));

// Listen for requests
const port = 5000;
app.listen(port, function() {
    // kind of like onReady
    console.log('App is up and running on localhost:5000');
    // to stop the server on the terminal hit ctrl+c
    // to stop all servers -> killall -9 node
});