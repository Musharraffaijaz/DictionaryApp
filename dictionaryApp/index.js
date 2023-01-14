const result = document.getElementById('result');
const sound = document.getElementById('sound');
const btn = document.getElementById('search-btn');
const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';


btn.addEventListener('click', ()=>{
    const inputWrd = document.getElementById('inp-word').value;
    console.log(inputWrd.value);
    console.log(`${URL}${inputWrd}`)
    fetch(`${URL}${inputWrd}`).then((data) => data.json()).then((item)=>{
        console.log(item);
        result.innerHTML = `
        <div class="word">
        <h3> ${inputWrd} </h3>
        <button><i class="fa-solid fa-volume-up"></i></button>
    </div>
    <div class="details">
        <p> ${ item[0].meanings[0].partOfSpeech|| item[0].meanings[1].partOfSpeech} </p>
        <p> ${item[0].phonetics[0].text || item[0].phonetics[1].text} </p>
    </div>
    <p class="word-meaning"> ${ item[0].meanings[0].definitions[0].definition || item[0].meanings[1].definitions[0].definition} </p>
    <p class="word-example"><span>Example: </span>${ item[0].meanings[0].definitions[0].example || item[0].meanings[1].definitions[0].example || "No Examples found" }  </p>`
  sound.setAttribute('src', `${item[0].phonetics[0].audio || item[0].phonetics[1].audio} `);
 console.log(sound)
    })  

})

function playSound(){
    sound.play();
}



// item[0].meanings[0].synonyms