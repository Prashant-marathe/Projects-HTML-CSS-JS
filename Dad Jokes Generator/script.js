const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("title");

const apiKey = "Io+3ogNaTu2vKeO74jw9jw==pcBAoamW7uxeZU6O";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes";

async function getJoke() {
try {
    jokeEl.innerText = "Updating....";
    btnEl.disabled = true;
    btnEl.innerText = "Loading.....";
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    jokeEl.innerText = data[0].joke;
} catch (error) {
    jokeEl.innerText ="An Error Happended. Please Try Again, Later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
}

}

btnEl.addEventListener("click", getJoke);
