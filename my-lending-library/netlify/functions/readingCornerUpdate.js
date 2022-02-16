const faunadb = require('faunadb')

const faunaClient = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET})
const q = faunadb.query

exports.handler = async function (event, context) {
    let data = JSON.parse(event.body)
    console.log(data)
    let user = ""
    let reference = ""
    if(data.user === "Ray") {
        user = "Rays-corner"
        reference = "323597448897364562"
    } else if(data.user === "Joe") {
        user = "Joes-corner"
        reference = "323597677064356434"
    }
    let update = await faunaClient.query(
        q.Update(
            q.Ref(q.Collection(user), reference),
            {
                data: {
                    "user": data.user,
                    "current": data.current,
                    "recommendations": data.recommendations,
                    "next": data.next,
                    "readingTally": data.readingTally
                }
            }
        )
    )
    

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'                
        },
        body: JSON.stringify({status: "Updated"})
    }

}