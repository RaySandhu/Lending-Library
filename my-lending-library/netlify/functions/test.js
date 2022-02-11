const faunadb = require('faunadb')

const faunaClient = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET})
const q = faunadb.query

exports.handler = async function(event, context) {
    const req = await faunaClient.query(
        q.Map(
            q.Paginate(
                q.Match(
                    q.Index("TestIndex")
                )
            ),
            q.Lambda(
                "X",
                q.Get(
                    q.Var("X")
                )
            )
        )
    )

    let response = req.data.map(data => data.data.name)

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(response)
    }
}
