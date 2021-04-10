const DOGS_URL = "https://dog.ceo/api/breeds/image/random";
const dogs = document.querySelector(".dogs");
const display = document.querySelector(".display");

function randomDog() {
  const promise = fetch(DOGS_URL);
  promise
    .then(function (response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function (processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute dog";
      display.appendChild(img);
    });
}

dogs.addEventListener("click", randomDog);
