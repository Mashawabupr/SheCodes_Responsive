//CURRENT DATE

//SEARCHING CITY

function showWhatCity(input) {
  let apiKey = "0a438755c0214c93834115811221606";
  let apiURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}`;
  axios.get(apiURL).then(showApi);
}
showWhatCity("Paris");

function displayForecast() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satuday",
  ];
  let forecastHTML = `<div class="row">`;

  days.forEach(function (day) {
    forecastHTML += `
                   <div class="col-2">
                      <p>${day}</p>
                      <img src="sunny.png">
                      <p>27°C</p>
                   </div>
                
       `;
  });
  forecastHTML += `</div>`;
  document.querySelector("#forecast").innerHTML = forecastHTML;
}
displayForecast();

function showApi(response) {
  //CITY

  function cuurentDate() {
    let nowDate = new Date();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Satuday",
    ];

    let day = nowDate.getDay();
    let time = response.data.location.localtime.split(" ")[1];
    return `${days[day]} ${time}`;
  }
  document.querySelector("#currentDate").innerHTML = cuurentDate();

  document
    .querySelector("#img")
    .setAttribute("src", response.data.current.condition.icon);
  document.querySelector("#gradus").innerHTML = Math.round(
    response.data.current.temp_c
  );

  document.querySelector("#showCity").innerHTML = response.data.location.name;

  function cels() {
    document.querySelector("#gradus").innerHTML = Math.round(
      response.data.current.temp_c
    );
  }
  document.querySelector("#cels").addEventListener("click", cels);

  function faren() {
    document.querySelector("#gradus").innerHTML = Math.round(
      response.data.current.temp_f
    );
  }
  document.querySelector("#faren").addEventListener("click", faren);
  document.querySelector("#description").innerHTML =
    response.data.current.condition.text;
}

function showCity(event) {
  event.preventDefault();
  let input = document.querySelector("#searchingCity").value;
  showWhatCity(input);
}
document.querySelector("#submitInput").addEventListener("click", showCity);

//current weather
function balo(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showposition);
  function showposition(position) {
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    let apiKey = "0a438755c0214c93834115811221606";
    let apiURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}`;
    axios.get(apiURL).then(showApi);
  }
}

document.querySelector("#getCurentPosition").addEventListener("click", balo);
