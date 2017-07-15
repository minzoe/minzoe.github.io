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
    });
}

function pickSelect(i) {
    getJSON("project.json").then(function (data) {
        var y = 0;
        var list = data[i];
        var obj = list[y];
        console.log(obj);
        displayDetails(obj);

        var prev = document.getElementById('prev');
        prev.addEventListener("click", function (e) {
            e.preventDefault();
            if (y > 0) {
                y = y - 1;
                console.log(y);
                obj = list[y];
                displayDetails(obj);
            } else {
                document.getElementById('place').innerHTML = "The Begining";
                document.getElementById('desc').innerHTML = "";
                 document.getElementById('add').innerHTML = ""; document.getElementById('hours').innerHTML = ""; document.getElementById('phone').innerHTML = "";
                y = -1;
            }
        });

        var next = document.getElementById('next');
        next.addEventListener("click", function (e) {
            e.preventDefault();
            if (y < list.length - 1) {
                y = y + 1;
                console.log(y);
                obj = list[y];
                displayDetails(obj);
            } else {
                document.getElementById('place').innerHTML = "End";
                document.getElementById('desc').innerHTML = "";
                 document.getElementById('add').innerHTML = ""; document.getElementById('hours').innerHTML = ""; document.getElementById('phone').innerHTML = "";
                y = list.length;
            }
        })
    })
}

function pickRandom() {
    getJSON("project.json").then(function (data) {

        var ranTopic = data[Math.floor(Math.random() * data.length)];
        
        var ranSelect = ranTopic[Math.floor(Math.random() * ranTopic.length)];
        
        displayDetails(ranSelect);
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
