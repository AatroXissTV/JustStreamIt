const url = 'http://localhost:8000/api/v1/';

fetch(`${url}titles/`)
    .then(function(res){
        if (res.ok) {
            data = res.json()
            return data;
        }
    })

fetch(`${url}titles/499549`)
    .then(function(res){
        if (res.ok) {
            data = res.json()
            return data;
        }
    })
    .then(data => {
        movie_t.textContent = "";
        movie_t.textContent = `${data.original_title}`;
        movie_des.textContent = "";
        movie_des.textContent = `${data.description}`;
    })
