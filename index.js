

// console.log(typeof(vocabularyOfSuras.S112));
let allWords = Object.entries(vocabularyOfSuras); // новый лист слов [[слово:перевод], [слово1:перевод1]..] 

// choosing a sura by a user to show words from an appropriate surah
let suraChoosenByUser = document.getElementById('surah');


let words = allWords[112][1]; // by default
suraChoosenByUser.addEventListener('change', (e) => {
    let aNum = e.target.value;
    userNum = parseInt(aNum);
    let words0 = allWords[userNum][1];
    console.log(words0);
    words = Object.entries(words0); //words of 1 sura/ current level
    console.log(words);
    game(); //для первого запуска программы
});


let word = document.getElementById('word');
let meaning = document.getElementById('meaning'); 


function game() {
    meaning.id = 'meaning';
    meaning.textContent = "";
    
    let numOfWordInSuraArray = Math.floor(Math.random() * words.length);
    let newWord = words[numOfWordInSuraArray][0];
    globalThis.newMeaning = words[numOfWordInSuraArray][1];
    // console.log(newWord, newMeaning);
    
    word.textContent = newWord;

};

//game(); 

// Остановка в 5 секунд для просмотра смысла и перезапуск функции 
    meaning.addEventListener('click', function(){
        meaning.removeAttribute('id');
        meaning.textContent = newMeaning;
        setTimeout(() => {
            game();
            meaning.removeEventListener('click', game);

        }, 3000);
    });



// Hints 

// console.dir(ihlas);
// console.dir(Object.keys(ihlas));
// console.dir(Object.keys(ihlas)[1]);
// console.dir(Object.keys(ihlas).length);

// console.log(Object.values(ihlas));

// console.log(Object.entries(ihlas));
