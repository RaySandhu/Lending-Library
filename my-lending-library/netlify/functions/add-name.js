// const faunadb = require('faunadb')

exports.handler = async function(event, context) {
    // let data = "I like chicken"
    // const {name} = JSON.parse(event.body)
    // const faunaClient = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET})
    // const q = faunadb.query
    console.log(event)
    //HOW DO YOU PASS DATA FROM WHERE THE FUNCTION IS BEING CALLED INTO THIS FUNCTION
        //issue is the event being read: maybe functions are written or placed in ways that don't allow for the correct event to be read by
            // the netlify func
        //body is empty and the path of the url suggests that the event being read is the function itself?


    return{
        statusCode: 200,
        //headers??? whats the point
            // look thought later: https://developer.mozilla.org/en-US/docs/Web/API/Headers
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: "Joelle"
        })
    }

    // let createUser = client.query(
    //     q.Create(
    //         q.Collection("users-test"),
    //         {
    //             data: {
    //                 firstName: "Joelle",
    //                 lastName: "Hass"
    //             }
    //         }
    //     )
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    // )   
    

}