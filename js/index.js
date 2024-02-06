//*******************  steps I go through :)  ******************** */

// 1- fetch the data from the api link and return it

// 2- store the return value in a variable to use it in my function as a parameter

// 3- create a function for each day

// 4- call all the function in the startapp() function that i store the returned fetch data in it

// 5- pass the returned object as an argument in each function to woks with it and can access all the object proberties

// 6- call startapp() to run all functions in sequence from fetching the data from the api link to using this data in my all functions

// 7- search value is add event on the search and pass this search value in as an argument in the startapp() to pass this argument in getdata() to be in this function parameter to use this value in sending a the fetch request and the search value will replace the "q="

// note: the returned value from the fetch is promise so write await before it and put it in async function

//*******************  ******************* ******************** */

// Weather Api link

// https://api.weatherapi.com/v1/forecast.json?Key=c588adcdfbac4692b8c13147240502&q=${latitude},${longitude}&days=3

async function getData(query) {
  let response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?Key=c588adcdfbac4692b8c13147240502&q=${query} &days=3`
  );

  let finalResponse = await response.json();

  return finalResponse;
}

let FirstDay = document.querySelector(".FirstDay");

function todayWeather(weaterData) {
  let temp = ` <div class="my-card day-one pb-5">
  <div class="d-flex justify-content-between">
    <h5 id="dayNameFirstDay">
      <i class="fa-solid fa-calendar-days pe-2"></i> ${new Date(
        weaterData.current.last_updated
      ).toDateString()}
    </h5>
  </div>

  <div class="d-flex justify-content-between align-items-center">
    <h3 class="pt-5">
      <span id="cityName">${weaterData.location.name}</span>
      <span id="degreeFirstDay">${weaterData.current.temp_c}</span>
      °C</h3>
    <div class="mt-4 me-5" id="weatherImgFirstDay">
      <img src="${weaterData.current.condition.icon}" alt="" />
    </div>
  </div>

  <h6 class="mt-4" id="weatherMoodFirstDay">${
    weaterData.current.condition.text
  }</h6>

  <ul class="list-unstyled ms-4 mt-4">
    <li>
      <i class="fa-solid fa-wind pe-2"></i>wind speed :<span id="windSpeedFirstDay">${
        weaterData.current.wind_kph
      } km</span
      >
    </li>
    <li>
      <i class="fa-solid fa-droplet"></i><span id="degreeOfRainsFirstDay">${
        weaterData.current.humidity
      }</span>
      %</li>
  </ul>
</div>`;

  FirstDay.innerHTML = temp;
}

let NextDay = document.querySelector(".NextDay");

function nexDayWeather(weaterData) {
  let temp = ` <div class="my-card day-one pb-5">
  <div class="d-flex justify-content-between">
    <h5 id="dayNameFirstDay">
      <i class="fa-solid fa-calendar-days pe-2"></i> ${new Date(
        weaterData.forecast.forecastday[1].date
      ).toDateString()}
    </h5>
  </div>

  <div class="d-flex justify-content-between align-items-center">
    <h3 class="pt-5">
      <span id="cityName">${weaterData.location.name}</span>
      <span id="degreeSecondDay">${
        weaterData.forecast.forecastday[1].day.maxtemp_c
      }</span>
      °C</h3>
    <div class="mt-4 me-5" id="weatherImgFirstDay">
      <img src="${
        weaterData.forecast.forecastday[1].day.condition.icon
      }" alt="" />
    </div>
  </div>

  <h6 class="mt-4" id="weatherMoodFirstDay">${
    weaterData.forecast.forecastday[1].day.condition.text
  }</h6>

  <ul class="list-unstyled ms-4 mt-4">
    <li>
      <i class="fa-solid fa-wind pe-2"></i>wind speed :<span id="windSpeedFirstDay">${
        weaterData.forecast.forecastday[1].day.maxwind_kph
      } km</span
      >
    </li>
    <li>
      <i class="fa-solid fa-droplet"></i><span id="degreeOfRainsFirstDay">${
        weaterData.forecast.forecastday[1].day.avghumidity
      }</span>
      %</li>
  </ul>
</div>`;

  NextDay.innerHTML = temp;
}

let ThirdDay = document.querySelector(".ThirdDay");

function ThirdDayWeather(weaterData) {
  let temp = ` <div class="my-card day-one pb-5">
  <div class="d-flex justify-content-between">
    <h5 id="dayNameFirstDay">
      <i class="fa-solid fa-calendar-days pe-2"></i> ${new Date(
        weaterData.forecast.forecastday[2].date
      ).toDateString()}
    </h5>
  </div>

  <div class="d-flex justify-content-between align-items-center">
    <h3 class="pt-5">
      <span id="cityName">${weaterData.location.name}</span>
      <span id="degreeSecondDay">${
        weaterData.forecast.forecastday[2].day.maxtemp_c
      }</span>
      °C</h3>
    <div class="mt-4 me-5" id="weatherImgFirstDay">
      <img src="${
        weaterData.forecast.forecastday[2].day.condition.icon
      }" alt="" />
    </div>
  </div>

  <h6 class="mt-4" id="weatherMoodFirstDay">${
    weaterData.forecast.forecastday[2].day.condition.text
  }</h6>

  <ul class="list-unstyled ms-4 mt-4">
    <li>
      <i class="fa-solid fa-wind pe-2"></i>wind speed :<span id="windSpeedFirstDay">${
        weaterData.forecast.forecastday[2].day.maxwind_kph
      } km</span
      >
    </li>
    <li>
      <i class="fa-solid fa-droplet"></i><span id="degreeOfRainsFirstDay">${
        weaterData.forecast.forecastday[2].day.avghumidity
      }</span>
      %</li>
  </ul>
</div>`;

  ThirdDay.innerHTML = temp;
}

// the app will start running from here !!!

async function startapp(query = "cairo") {
  let weatherData = await getData(query);
  // console.log(weatherData);
  todayWeather(weatherData);
  nexDayWeather(weatherData);
  ThirdDayWeather(weatherData);
}

startapp();

let searchInput = document.querySelector(".custoum_search");

searchInput.addEventListener("keyup", searchFunction);

async function searchFunction() {
  let query = searchInput.value;

  startapp(query);
}

// for aouto location detecting

// // API to auto detect the location of the user
// async function getCurrentPositionAsync() {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => resolve(position),
//       (error) => reject(error)
//     );
//   });
// }

/*destructeing the proberties of position.coords bdl ma aktp 
  
  var latitude =  position.coords.latitude
  var longitude = position.coords.longitude

  ===

  const {latitude, longitude } = position.coords;

  latitude is a variable that store this value => position.coords.latitude

  longitude is a variable that store this value => position.coords.longitude

  ktbtha fe line wa7ed
  
  */

// const position = await getCurrentPositionAsync();
// const { latitude, longitude } = position.coords;

//the query here is the latitude and longitude which are the returned from the auto detected user location to get the weather of the user location by default
// let response = await fetch(
//   `https://api.weatherapi.com/v1/forecast.json?Key=c588adcdfbac4692b8c13147240502&q=${latitude},${longitude}&days=3`
// );
