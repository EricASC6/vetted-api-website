const url ="	https://api.funtranslations.com/translate/yoda.json"




fetch(url).then(function(response){
    return response.json()
    })
    .then(function(myJson){
    console.log(myJson)
    });