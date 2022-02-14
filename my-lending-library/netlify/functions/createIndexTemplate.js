const faunadb = require('faunadb')

const faunaClient = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET})
const q = faunadb.query

exports.handler = async function (event, context) {

    let fullName = JSON.parse(event.body)

    let createUser = faunaClient.query(
        q.Create(
            q.Collection("Test"),
            {
                data: {
                    firstName: fullName.data[0],
                    lastName: fullName.data[1]
                }
            }
        )
    ).then(res => {
        console.log(res)
        return res
    })
     .catch(err => console.log(err))

    let sendForward = await createUser

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'                
        },
        body: JSON.stringify(sendForward.data)
    }
}
