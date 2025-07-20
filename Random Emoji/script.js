const btnEl = document.getElementById('btn');
const emojiNameEl = document.getElementById('emoji-name');

const emoji = [];

async function getEmoji() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=5d4be8d69ad0b474c4ec24c416f6261ed9e323c9");

    data = await response.json()
    for(let i = 0; i < 1500; i++) {
        emoji.push({
            emojiName:data[i].character,
            emojiCode:(data[i].unicodeName).slice(5),
        })
    }   
}

getEmoji();

btnEl.addEventListener('click',()=> {
   let randomNum = Math.floor(Math.random() * emoji.length);
   btnEl.innerText = emoji[randomNum].emojiName;
   emojiNameEl.innerText = emoji[randomNum].emojiCode;
   
})