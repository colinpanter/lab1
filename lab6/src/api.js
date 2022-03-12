const forecastURL = 'https://api.weatherbit.io/v2.0/forecast/daily';
const forecastkey = '02446d1719184c48b4e147e7aedcb70b';

const geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json";
const geocodekey = "AIzaSyA136jpgq7BYbFdDJVu5QgK47lr52wZryU";

const MONTHS = {
    "01": "janvier",
    "02": "février",
    "03": "mars",
    "04": "avril",
    "05": "mai",
    "06": "juin",
    "07": "juillet",
    "08": "aout",
    "09": "septembre",
    "10": "octobre",
    "11": "novembre",
    "12": "décembre",
}

export const getForecast = async function(){
    const locationData = await getCoordinates();
    
    const params = {
        key: forecastkey,
        lang: "fr",
        lat: locationData.coords.latitude,
        lon: locationData.coords.longitude,
        days: 7,
    };
    const response = await fetch(forecastURL + '?' + ( new URLSearchParams( params ) ).toString())
    const jsonResponse = await response.json();
    
    let res = []
    for (var i = 0; i < jsonResponse.data.length; i++) {
        const date = jsonResponse.data[i].valid_date.split('-');
        const data = {
                date: date[2] + ' ' + MONTHS[date[1]],
                max_temp: jsonResponse.data[i].max_temp,
                min_temp: jsonResponse.data[i].min_temp,
                icon: "https://www.weatherbit.io/static/img/icons/"+jsonResponse.data[i].weather.icon+".png"
            }
        res.push(data);
    }
    return res
}

export const getLocalisation = async function(){
    const locationData = await getCoordinates();
    
    const params = {
        key: geocodekey,
        latlng: locationData.coords.latitude + ", " + locationData.coords.longitude
    };
    const response = await fetch(geocodeURL + '?' + ( new URLSearchParams( params ) ).toString())
    const jsonResponse = await response.json();
    
    return jsonResponse.results[0].formatted_address
}

const getCoordinates = async function() {
    return new Promise(function(resolve, reject){
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}
