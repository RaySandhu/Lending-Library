const faunadb = require('faunadb')

const faunaClient = new faunadb.Client({ secret: process.env.FAUNADB_ADMIN_SECRET})
const q = faunadb.query

exports.handler = async function(event, context) {
    let data = JSON.parse(event.body)
    console.log(data)

    const retrieve = await faunaClient.query(
        q.Get(
            q.Match(
                q.Index("book_search_by_id"),
                data.id
            )
        )
    )
    const updateBook = await faunaClient.query(
        q.Update(retrieve.ref,
            {
                data: {
                    "id": data.id,
                    "title": data.title,
                    "author": data.author,
                    "thumbnail": data.thumbnail,
                    "description": data.description,
                    "readBy": data.readBy,
                    "personal_review": data.personalReview,
                    "personal_rating": data.personalRating,
                    "last_read": data.lastRead
                }
            }
        )
    )

    console.log(updateBook)

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: "Updated Book"
    }
}
