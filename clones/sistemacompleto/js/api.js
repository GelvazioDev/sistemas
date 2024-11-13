function getHeaders() {
    return {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
}


function callApi(method, rota, fn = false) {
    const url = "http://localhost:3000/" + rota;
    try {
        fetch(url, {
                method: method, // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: getHeaders(),
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer"
            }).then(response => response.json())
            .then(data => {
                if (fn) {
                    fn(data);
                }
            });
    } catch (error) {
        console.log("Erro:" + error);
    }
}

function callApiPost(method, rota, fn = false, body = false) {
    const url = "http://localhost:3000/" + rota;
    try {
        fetch(url, {
                method: method, // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: getHeaders(),
                redirect: "follow", // "follow", // manual, *follow, error
                referrerPolicy: "no-referrer",
                body: JSON.stringify(body)
            }).then(response => response.json())
            .then(data => {
                if (fn) {
                    fn(data);
                }
            });
    } catch (error) {
        console.log("Erro:" + error);
    }
}