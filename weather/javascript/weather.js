// Current Location Scripts
(function () {


    (function getGeoLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, long);

            });
        } else {
            
        }

    }());

    function getJSON(url) {
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // Get the data from the wunderground API
    function getData(lat, long) {
        var url = "http://api.wunderground.com/api/99cad94937a148b2/geolookup/conditions/q/" + lat + "," + long + ".json";
        //change this to the correct URL for wunderground
        getJSON(url).then(function (data) {
            console.log(data);
            //add the code necessary here to update the page with all of the correct data points.
            document.getElementById('cityDisplay').innerHTML = data.location.city + ", " + data.location.state;
            document.getElementById('currentTemp').innerHTML = data.current_observation.temp_f + '&deg;F';
            document.getElementById('wind').innerHTML = data.current_observation.wind_mph + " " + data.current_observation.wind_dir;
            document.getElementById('precip').innerHTML = "Precipitation: " + data.current_observation.precip_today_string;
        });


    }

    // A function for changing a string to TitleCase
    function toTitleCase(str) {
        return str.replace(/\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}());