function getJSON(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function fetchType() {
    var url = "//pokeapi.co/api/v2/type/";
    //call getJSON function to get the list of ships from the api
    getJSON(url).then(function (data) {
        //stuff that should happen after the request is done.
        console.log(data);
        var results = data.results;
        var typeListElement = document.getElementById('typelist');
        typeListElement.innerHTML = "";
        data.results.forEach(function (type) {
            console.log(type);
            var listItem = document.createElement('li');
            var link = document.createElement('a');
            link.setAttribute('href', type.url);
            link.innerHTML = type.name;
            listItem.appendChild(link);
            typeListElement.appendChild(listItem);
            link.addEventListener("click", function (event) {
                event.preventDefault();
                getTypeDetails(type.url);
            });
        })
    });
}

function getTypeDetails(url) {
    getJSON(url).then(function (data) {
        console.log(data);
        displayDetails(data);
    })
}

function displayDetails(data) {
    var typeName = document.getElementById('name');
    typeName.innerHTML = data.name;
    var typeGen = document.getElementById('gen');
    typeGen.innerHTML = data.generation.name;
    var typeMove = document.getElementById('move');
    typeMove.innerHTML = data.move_damage_class.name;
}
fetchType();
