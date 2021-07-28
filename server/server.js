console.log('My first express app');

//just giving the name means it will look in the modules folder
// load from node_modules
const express = require('express');
// Load the body parser module
const bodyParser = require('body-parser');

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

// Setup body parser
// Tells express how to read data from the client
// either JSON, or url-encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Listen for requests coming to 
// a specific URL: https://localhost:5000/quotes
app.get('/quotes', (req, res) => {
    console.log('Ready to send back some quotes');
    console.log('request.route.path is', req.route.path);

    // send back data to client
    res.send(quotes);

});

// POST /quotes
app.post('/quotes', (req, res) => {
    console.log('we have a new quote');

    // body parser gives us req.body
    // which includes the data from our client
    console.log('req.body', req.body);

    //add body to list
    let newQuote = req.body;

    // validate our new quote
    if (!newQuote.author || !newQuote.text){
        // set status code to 400 (client error)
        // send back useful message in the response body
        res.status(400).send({
            message: 'Missing a required field! Try again.'
        });
        // end function
        return;
    };

    quotes.push(newQuote);  

    // send back a status code
    res.sendStatus(201); // 201 created
});

// Listen for requests
const port = 5000;
app.listen(port, function() {
    // kind of like onReady
    console.log('App is up and running on localhost:5000');
    // to stop the server on the terminal hit ctrl+c
    // to stop all servers -> killall -9 node
});