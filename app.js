function changeCity(event) {
  event.preventDefault();

  let searchCity = document.querySelector("#city-search");
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = searchCity.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", changeCity);
