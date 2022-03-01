const faunadb = require('faunadb')

const faunaClient = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET})
const q = faunadb.query

exports.handler = async function(event, context) {
    let data = JSON.parse(event.body)
    console.log(data.id)

    const retrieve = await faunaClient.query(
        q.Get(
            q.Match(
                q.Index("book_search_by_id"),
                data.id
            )
        )
    )

    console.log(retrieve)

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(retrieve)
    }
}
