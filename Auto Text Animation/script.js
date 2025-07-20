const containerEl = document.querySelector(".container");
const careerEl = ["My name is Prashant Marathe.", "I am 20 Years old.", "I am a student.", "I like creating websites."];
let careerIndex = 0;
let characterIndex = 0;
updateText();
function updateText() {
    characterIndex++;
    containerEl.innerHTML = `
    <h1>${careerEl[0].slice(0,characterIndex)}</h1>
    <h1>${careerEl[1].slice(0,characterIndex)}</h1>
    <h1>${careerEl[2].slice(0,characterIndex)}</h1>
    <h1>${careerEl[3].slice(0,characterIndex)}</h1>
    `;
    if(characterIndex === careerEl[careerIndex].length) {
        // characterIndex = 0;
    }
    setTimeout(updateText, 200);

}