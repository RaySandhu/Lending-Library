// front end template for netlify functions

async function frontEndTemplate(data) {
    return fetch('/api/test', {
        body: JSON.stringify({
            data
        }), 
        method: "POST"
    })
    .then(res => res.json())
    .then(res => console.log(res))

}   

//then set the result to state after calling the func