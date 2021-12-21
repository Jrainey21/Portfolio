/* const gre = document.getElementById("gre");

var stadium = document.getElementById("stadium"); */

function getWeather(e) {
  var target = e.target;
  var text = target.value;
  var body = document.getElementById("body");
  axios
    .get(
      `http://api.weatherapi.com/v1/current.json?key=721019fcfcc5415594c161330211512&q=${text}`
    )

    .then((res) => {
      console.log(res.data);
      var winds = res.data.current.wind_mph;
      var conditions = res.data.current.condition.text;
      var rains = res.data.current.precip_in;
      var temps = res.data.current.temp_f;
      var con = document.getElementById("conditions");
      con.innerHTML = "Weather Condition: " + conditions;
      var wind = document.getElementById("wind");
      var rain = document.getElementById("rain");
      wind.innerHTML = "Wind mph: " + winds;
      rain.innerHTML = "Precipitation inches: " + rains;
      var temp = document.getElementById("temp");
      temp.innerHTML = "Current Temperature: " + temps + "\u00B0F";
      if (conditions.includes("Clear") || conditions.includes("Sunny")) {
        body.className = "";
        body.classList.add("clear");
      }
      if (conditions.includes("Rain") || conditions.includes("rain")) {
        body.className = "";
        body.classList.add("rain");
      }
      if (conditions.includes("Snow") || conditions.includes("snow")) {
        body.className = "";
        body.classList.add("snow");
      }
      if (
        conditions.includes("Overcast") ||
        conditions.includes("Cloudy") ||
        conditions.includes("cloudy")
      ) {
        body.className = "";
        body.classList.add("cloudy");
      }
    })
    .catch((error) => console.error(error));
}
function getPic(e) {
  var stadium = document.getElementById("stadium");
  var imgName = e.target.id;
  stadium.src = `stadiums/${imgName}.jpg`;
}

const buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", getWeather);
  buttons[i].addEventListener("click", getPic);
  buttons[i].addEventListener("click", highlightButton);
  buttons[i].addEventListener("click", cityDisplay);
}
function highlightButton(e) {
  /* var target = e.target;
  target.style.border = "";
  target.style.border = "3px solid yellow"; */
  var selectedImages = document.getElementsByClassName("selected");
  if (selectedImages.length > 0) {
    selectedImages[0].classList.remove("selected");
  }
  this.classList.add("selected");
}
function cityDisplay(e) {
  var target = e.target;
  var text = target.value;
  var h2 = document.getElementById("teamWeather");
  h2.textContent = "Weather in " + text;
}
