function getFetch() {
    fetch(pagina,{
        type: 'GET'
    })
    .then(response => {
        return response.json()
    })
    .then(response =>{
       var argument = arg;
       responseCRUD(argument, response)
    })
    .catch(error => {
        console.log(error)
    })
}

function postFetch() {
    fetch(pagina,{
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{
            'Content-Type': 'application/json'
          }
    })
    .then(response =>{
       var argument = arg;
       responseCRUD(argument, response)
    })
    .catch(error => {
        console.log(error)
    })
}