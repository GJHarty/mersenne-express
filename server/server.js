console.log('My first express app');

//just giving the name means it will look in the modules folder
// load from node_modules
const express = require('express');

// Create our "app" (server)
const app = express();

// my data
const quotes = [
    {
        text: 'Debugging is like being the detective in a crime movies where you are also the murderer',
        author: 'Filipe Fortes'
    },
    {
        text: 'If you want to increase your success rate, double your failure rate',
        author: 'Thomas Watson Jr.'
    },
    {
        text: 'Code is there to explain the comments to the computer',
        author: 'Andy Harris'
    }
]

// Tell express where to find all
// of our "public" files
// aka our "client-side" files
// aka "static assets"
app.use(express.static('./server/public'));

// Listen for requests coming to 
// a specific URL: https://localhost:5000/quotes
app.get('/quotes', function(req, res) {
    console.log('Ready to send back some quotes');
    console.log('request.route.path is', req.route.path);

    // send back data to client
    res.send(quotes);

});

// Listen for requests
const port = 5000;
app.listen(port, function() {
    // kind of like onReady
    console.log('App is up and running on localhost:5000');
    // to stop the server on the terminal hit ctrl+c
    // to stop all servers -> killall -9 node
});