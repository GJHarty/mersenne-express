# HTTP Jargo


## HTTP
"Hypertext Transfer Protocol"

The context for all of this 
Describes requests, responses, and how to structure them

## Request

What the client (browser) sends to the server

```js
app.get('.quotes'. function(req,res)    
                        // ^ req represents request
```

## Response

What the server sends back to the client
This can be anything, including HTML< CSS, JS
files (static content), or objects, arrays, etc... (dynamic content, data, JSON)

```js
app.get('/quotes', function(req, res) {
                                // ^ represents response
    //send back JSON data (array)
}
```

## JSON

Javascript Object Notation

The main format for data that's sent across the internets.

Looks like javascript objects, but with **double quotes**

```json
[
    {
        "text": "blah blah blah",
        "author": "someone someone"
    }
]
```

## URLs / routes / paths

We use these terms somewhat interchangeably.

We often exclude the "domain" or the "host",
like, `/quotes`

In express:

```js
app.get('/quotes', function(req, res))
        // ^ path / route / url
```

## Method

A _verb_ that describes what the client wants to do


In express:

```js
app.get('/quotes', function(req, res)
//   ^ the method
```

In HTTP there are 4 main methods:

- GET: retieve data from the server
- POST: send some new data to the server
- PUT: Update some existing data on the server
- DELETE: Delete some data from the server

## Body

part of the request: Data that we are passing back and forth
parsing the body: need to make sure the information is actually JSON

## Header
Extra meta-data that gets sent along with your request or response
eg.
`Content-Type: application/json`

## Status Code (response only)

A number that represents the status of the request.

Common Status Code:

- 200 OK
- 201 Created
- 400 Bad Request - The client messed up, sent bad data
- 404 Not Found - Probably the wrong url
- 500 Server Error - probably a js bug in your server


## Endpoint

The whole thing that we're listening for.

Includes:
- URL
- Method

Path + Method = endpoint

```js
// Listen for requests coming to 
// a specific URL: https://localhost:5000/quotes
app.get('/quotes', function(req, res) {
    console.log('Ready to send back some quotes');
    console.log('request.route.path is', req.route.path);

    // send back data to client
    res.send(quotes);

});
```

## API

The entire server.

A bunch of endpoints = An API

"Apllication Programming Interface"
A way for programs to communicate with one another.