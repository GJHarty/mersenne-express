$(document).ready(onReady);

function onReady(){
    console.log('So Ready');

    $('body').append('<div>Hello Everybody</div');

    // on page load, grab quote data from the server
    getQuotes();
}

function getQuotes(){
    // AJAX
    // Make an HTTP request to our server
    // to our GET /quotes endpoint

    // This calls the function in server.js
    // defined in `app.get('/quotes')`
    $.ajax({
        // tell ajax what endpoint to hit
        // endpoint = url + method
        method: 'GET',
        url: '/quotes',
    })
        // network requests take a long time
        // wait for the request to complete,
        // and THEN run the function

        // response is whatever we passed through res.send (from app.get)
        .then((response) => {
            console.log('GET /quotes response', response);

            // Render quotes with jquery
            for (let quote of response){
                $('#quotes').append(`
                    <li>
                        Quote: "${quote.text}"<br>
                        Author -${quote.author}
                    </li>
                `);
            }
        });
}