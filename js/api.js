// This file manages the function required to call the API.

function fetchAndDecode(url) {
    return fetch(url)
    .then(function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        } else {
            return response.json()
        }
    })
    .catch(err => {
        console.log(`Error with fetched url: ${url}` + err.message)
    })
    .finally(() => {
        console.log(`Succeed fetched url: ${url}`)
    })
}
