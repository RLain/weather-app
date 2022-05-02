//import "./env.js";

/* navigator.geolocation.getCurrentPosition access the following:
GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1651299453041}
coords: GeolocationCoordinates
accuracy: 19.098
altitude: null
altitudeAccuracy: null
heading: null
latitude: -34.0772854
longitude: 18.4572942
speed: null
[[Prototype]]: GeolocationCoordinates
timestamp: 1651299453041
[[Prototype]]: GeolocationPosition
*/



window.addEventListener('load', () => {
  let long;
  let lat;
  let timezone;
  let temperatureDescription = document.querySelector('.temperature-description');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimezone = document.querySelector('.location-timezone');
  let weatherIcon = document.querySelector('.weather-icon');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      //https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
      (position) => {
        console.log(position);
        long = position.coords.longitude;
        lat = position.coords.latitude;
        //fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`, {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d97ccee936a02298064e1d8ae3bd38f8`,
          {
            method: 'GET',
          },
        )
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            console.log(json);
            const { description, icon, main } = json.weather[0];
            //Set DOM Elements from the API
            temperatureDegree.textContent = json.main.feels_like;
            temperatureDescription.textContent = main;
            locationTimezone.textContent = json.timezone;
            //Set icon
            weatherIcon.innerHTML = setIcons(icon);
      

            
          });
      },
    );
  } else {
    h1.textContent("Oh no! We can't get access to your location :(");
  }
});
