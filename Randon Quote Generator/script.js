const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const apiUrl = "https://api.api-ninjas.com/v1/quotes";
const apiKey = "Io+3ogNaTu2vKeO74jw9jw==pcBAoamW7uxeZU6O";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};
async function fetchApi() {
  try {
    btnEl.innerText = "loading....";
    btnEl.disabled = true;
    quoteEl.innerText = "Updating....";
    authorEl.innerText = "Updating....";
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    quoteEl.innerText = data[0].quote;
    authorEl.innerText = "~ " + data[0].author;
    btnEl.innerText = "Get quote";
  } catch (error) {
    quoteEl.innerText = "Internet Connection Error. Please Check your Internet Connection";
    authorEl.style.display = "none";
    btnEl.innerText = "Get quote";
    btnEl.disabled = true;
  }
}
fetchApi();
btnEl.addEventListener("click", fetchApi);
