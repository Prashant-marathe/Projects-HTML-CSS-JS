const inputEl = document.getElementById("input");
const meaningContainerEl = document.getElementById("meaning-container");
const textEl = document.querySelector(".text");
const wordTitleEl = document.getElementById("word");
const wordMeaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");
inputEl.addEventListener("keyup", (e) => {
  if (e.target.value && e.key === "Enter") {
    fetchApi(e.target.value);
  }
});
async function fetchApi(word) {
  try {
    textEl.style.display = "block";
    meaningContainerEl.style.display = "none";
    textEl.innerText = `Searching for the meaning of "${word}"`;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());
    if (result.title) {
      meaningContainerEl.style.display = "block";
      textEl.style.display = "none";
      wordTitleEl.innerText = word;
      wordMeaningEl.innerText = "N/A";
      audioEl.style.display = "none";
    } else {
      textEl.style.display = "none";
      meaningContainerEl.style.display = "block";
      wordTitleEl.innerText = result[0].word;
      wordMeaningEl.innerText = result[0].meanings[0].definitions[0].definition;
      audioEl.src = result[0].phonetics[0].audio || result[0].phonetics[1].audio;
    }
  } catch (error) {
    console.log(error);
    textEl.innerText = "Network connection error. Please check your internet connection.";
  }
}
