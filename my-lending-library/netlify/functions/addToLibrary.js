const faunadb = require('faunadb')

const faunaClient = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET})
const q = faunadb.query

exports.handler = async function (event, context) {
    let data = JSON.parse(event.body)
    console.log(data)

    await faunaClient.query(
        q.Create(q.Collection("Library"), {data: data})
    )
    

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'                
        },
        body: JSON.stringify({status: "Created object"})
    }

}