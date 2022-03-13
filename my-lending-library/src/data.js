export async function getUserCornerResponse(user) {
    let retrieve = await fetch("/api/readingCornerRetrieve", {
        method: "POST",
        body: JSON.stringify({
                    user: user
                })
    })

    let cornerData = await retrieve.json()
    return cornerData
}
