const yodaUrl ="https://api.funtranslations.com/translate/yoda.json";


fetch(url)
.then(function(response){
    return response.json();
})
.then(function(json){
    const data = json.properties.periods;
    const filteredData = getNeededData(data);

    for (let i = 0; i < filteredData.length; i++) {
        fetch(yodaUrl + "?text=hello").then(function(response){
            return response.json()
            })
            .then(function(myJson){
                console.log(myJson)
            });
    }

});






for (let i = 0; i < ; i++) {
    fetch(yodaUrl).then(function(response){
        return response.json()
        })
        .then(function(myJson){
        console.log(myJson)
        });
}

