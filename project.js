function getJSON(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
            console.log(error);
        });
}

// Get the data from the json
function getData() {
    var url = "project.json";
    getJSON(url).then(function (data) {
        console.log(data);
        displayDetails();
    });


}

function pickRandom() {
    getJSON("project.json").then(function (data) {
        
        var obj_keys = Object.keys(data);
        var ran_key = obj_keys[Math.floor(Math.random() * obj_keys.length)];
        randomSelect = data[ran_key];
        console.log(randomSelect);

        var n_obj_keys = Object.keys(randomSelect);
        var n_ran_key = n_obj_keys[Math.floor(Math.random() * n_obj_keys.length)];
        nRandomSelect = randomSelect[n_ran_key];
        console.log(nRandomSelect);

        var z_obj_keys = Object.keys(nRandomSelect);
        var z_ran_key = z_obj_keys[Math.floor(Math.random() * z_obj_keys.length)];
        zRandomSelect = nRandomSelect[z_ran_key];
        console.log(zRandomSelect);

        displayDetails(zRandomSelect);
    });
}

function displayDetails(obj) {
    console.log(obj);
    document.getElementById('place').innerHTML = obj.place;
    document.getElementById('desc').innerHTML = obj.description;
    document.getElementById('add').innerHTML = obj.address;
    document.getElementById('hours').innerHTML = obj.hours;
    document.getElementById('phone').innerHTML = obj.phone;
};
