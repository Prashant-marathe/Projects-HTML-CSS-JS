import config from "../config.js"
const btnEl = document.getElementById('btn');
const emojiNameEl = document.getElementById('emoji-name');

const emoji = [];
btnEl.disabled = true;

async function getEmoji() {
    let response = await fetch(`https://emoji-api.com/emojis?access_key=${config.random_emoji_generator_api_key}`);

    let data = await response.json()
    for(let i = 0; i < 1500; i++) {
        emoji.push({
            emojiName:data[i].character,
            emojiCode:(data[i].unicodeName).slice(5),
        })
    }   
}

btnEl.disabled = false; 
btnEl.addEventListener('click',()=> {
    let randomNum = Math.floor(Math.random() * emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode;
    
})

getEmoji();