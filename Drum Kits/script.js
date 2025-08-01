const Kits = ["crash", "kick", "snare", "tom"];
const containerEl = document.querySelector(".container");

Kits.forEach((kit) => {
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn");
  btnEl.innerText = kit;
  btnEl.style.backgroundImage = "url( Images/" + kit + ".png)";
  containerEl.appendChild(btnEl);

  const audioEl = document.createElement("audio");
  audioEl.src = "Sounds/" + kit + ".mp3";
  containerEl.appendChild(audioEl);

  btnEl.addEventListener("click", () => {
    audioEl.play();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === kit.slice(0, 1)) {
      audioEl.play();
      btnEl.style.transform = "scale(.9)";
      setTimeout(() => {
        btnEl.style.transform = "scale(1)";
      }, 100);
    }
  });
});
