//leave this component up as a lesson point for netlify functions and fetch request methods.

exports.handler = async function(event, context) {

    //HOW DO YOU PASS DATA FROM WHERE THE FUNCTION IS BEING CALLED INTO THIS FUNCTION
        //issue is the event being read: maybe functions are written or placed in ways that don't allow for the correct event to be read by
            // the netlify func
        //body is empty and the path of the url suggests that the event being read is the function itself?
    //Solved!
        //the default request to a netlify function is a GET request and to pass data and an event body through is to use a POST request.
        //the event.body must be a Readable Stream, thus JSON.stringify when POSTed to the backend and then parsed on receival.
        //then it is used as an object and can be sent back as a Readable stream again, where it is converted into an object via response.json()
    
    const data = JSON.parse(event.body)
    console.log(data)
    console.log("----------------------")


    return{
        statusCode: 200,
        //headers??? whats the point
            // look thought later: https://developer.mozilla.org/en-US/docs/Web/API/Headers
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: data.name
        })
    }    

}