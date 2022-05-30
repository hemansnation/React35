// speech recognition for chrome 
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

// speech recognition object
const s = new SpeechRecognition()
s.lang = 'en-US'
s.interimResults = true

// create html elements
const p = document.createElement('p')

const d = document.querySelector('.words')

d.appendChild(p)

// event handler
s.addEventListener('result', e => {

    // console.log(e);
    let transcript = Array.from(e.results)
                            .map(result => result[0])
                            .map(result => result.transcript)
                            .join("");
    p.textContent = transcript
    
    if(e.results[0].isFinal){
        const p = document.createElement('p')
        d.appendChild(p);
    }
    console.log(transcript);
})

// start 

s.addEventListener('end', s.start)

s.start()