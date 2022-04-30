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

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      //https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
      (position) => {
        console.log(position);
        long = position.coords.longitude;
        lat = position.coords.latitude;
        //const api = ``;
        console.log("About to fetch")
       //fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`, {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d97ccee936a02298064e1d8ae3bd38f8`, {
        //   method: 'GET',
        //   //body: JSON.stringify(data),
        //   headers: {
        //     'Content-Type': 'application/json',
        //     Authorization: `Basic ${Buffer.from(API_KEY).toString('base64')}`,
        //   },
        })
          .then(response => {
              return response.json();
          })
          .then(json => {
          console.log(json);
        });
      });
  }
     else {
    //throw new Error("Oh no! We can't get access to your location :(")
    h1.textContent("Oh no! We can't get access to your location :(");
  }
});
