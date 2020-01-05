
window.onload = function () {

    function reset(){
        window.location.reload();
    };
    document.getElementById("reset").addEventListener("click", reset);

    const words=["advice",
        "arrangement",
        "attempt",
       "brick",
        "calm",
        "cookies",
        "customs",
        "damage",
       "explanation",
        "facing",
        "film",
        "finest",
        "fireplace",
        "floating",
        "folks",
        "mission",
        "monkey",
        "poetry",
        "mysterious",
        "neighborhood",
        "Norway",
        "nuts",
        "occasionally",
        "relationship",
        "remarkable",
        "scared",
        "selection",
        "shake",
        "shaking",
        "shallow",
        "awkward",
        "pixel",
        "zombie",
    ] ;

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var categories;         // Array of topics
    var chosenCategory;     // Selected catagory
    var getHint ;          // Word getHint
    var word ;              // Selected word
   // var guess ;             // Guess
   // var guesses = [ ];      // Stored guesses
    let lives =6 ;             // Lives
    var counter ;           // Count correct guesses
   // var space;              // Number of spaces in word '-'

    //----------------------

            // Amount of Lives
    var total;           // Total of correct guesses
    var space;           // The amount of spaces in a word
    var wordList;        // array of word bank
    var pickedWord;      // picked word
    var picked;          //selected letter
    var letterSelected = [];  // Selected word
    var pickedList = [];    // worded word guesses
    let guess;
    // var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    //     'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    //     't', 'u', 'v', 'w', 'x', 'y', 'z'];


    // // Get elements
    // var showLives = document.getElementById("mylives");
    // var showCatagory = document.getElementById("scatagory");
    // var getHint = document.getElementById("hint");
    // var showClue = document.getElementById("clue");

    //let foundedIndexes=[];

    let score=0;
    let keepingScore = function(){
        let divScore= document.getElementById("score");
        let spanScore=document.createElement("span");
        spanScore.innerHTML=score;
        divScore.appendChild(spanScore);

    };
    keepingScore();
    let buttons = function () {
        let myButtons = document.getElementById('buttons');
        let letters = document.createElement('ul');
        let list;
        for (let i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement("button");
            list.id =alphabet[i];
            list.addEventListener("click",()=>findLetterFromWords(event) );
            list.innerText= alphabet[i]
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    };
    buttons();

    let winning = function () {
        let win=true;

        for(let i=0;i<word.length;i++){
            if(document.getElementById(i).innerText===' _') {
                console.log(document.getElementById(i.toString()).innerText)
                win = false;
            }
        }
        if(win===true){
            document.getElementById('game').innerHTML = 'You Won!!!';
        }
    };


//caut cuvant random din lista
    let selectedWord = function(){
        word=words[Math.floor(Math.random()*words.length)];
        console.log(word);

    };
    selectedWord();

    // let winning = function(){
    //     let win=false;
    //     let answer=0;
    //     for(let i=0;i<word.length;i++){
    //         if(document.getElementById(i).innerText!=='_'){
    //             win=true;
    //             answer++;
    //             console.log(word[i]);
    //         }
    //     }
    //     if(answer===word.length){
    //         document.getElementById('game').innerHTML = 'You Won!!!';
    //     }
    // };

    //daca litera pe care am apasat click exista in word atunci se pune in cuvant

    let findLetterIndexes = function(letter) {
        let mistake = true;
        for (let i=0;i<=word.length;i++){
            if(letter===word[i]){
                document.getElementById(i).innerText=letter;
                mistake = false;
                document.getElementById(letter).style.color="white";
                document.getElementById(letter).style.backgroundColor="green";
            }
        }
        if(mistake===true){
            document.getElementById(letter).style.background="red";
            lives--;
            updateHangmanPicture();
            lost();
            console.log(lives)
        }
        document.getElementById(letter).disabled =true;
winning()

        };
        //console.log("literele cautate se afla pe pozitiile: " +foundedIndexes);

    function updateHangmanPicture() {
        document.getElementById('hangmanPic').src = './images/' + lives + '.jpg';
    }

    let findLetterFromWords = function(element){
    letter=element.target.innerText;
    console.log(element)
        findLetterIndexes(letter)

    };


    //findLetterFromWords();

    // create alphabet ul



    let displayWord = function(){
        let firstLetter;
        let lastLetter;
        let divWord = document.getElementById('chosenWord');
        for(let i=0;i<word.length;i++){
            let selectedLetter=document.createElement("span");
            selectedLetter.innerText=' _';
            selectedLetter.id=i;
                //word[i];
            divWord.appendChild(selectedLetter);
            // firstLetter=word[0];
            // lastLetter=word.length-1;
        }
        findLetterIndexes(word[0]);
        findLetterIndexes(word[word.length-1]);
    };
    displayWord();

function  lost() {
    if(lives===0){
       window.alert("I have spoken. You lost!")
    }
}
winning()
};


    //
    //
    // let mask = function () {
    //
    //     let wordHolder = document.getElementById()
    //     let correct = document.createElement('ul');
    //     for (let i = 0; i < letterSelected.length; i++) {
    //         picked = document.createElement('li');
    //         picked.setAttribute('class', 'picked');
    //         if (letterSelected[i] === "-") {
    //             picked.innerHTML = "-";
    //             space = 1;
    //         } else {
    //             picked.innerHTML = "_";
    //         }
    //         pickedList.push(picked);
    //         wordHolder.appendChild(correct);
    //         correct.appendChild(picked);
    //         //styling ul
    //         correct.style.margin = "0";
    //         correct.style.display = "block";
    //         correct.style.padding = "0";
    //         //li
    //         picked.style.position = "relative";
    //         picked.style.listStyle = "none";
    //         picked.style.margin = "0";
    //         picked.style.display = "inline-block";
    //         picked.style.padding = "0 10px";
    //         picked.style.fontSize = "1.6em";
    //     }
    // };


    // let display = function () { //print outs for end game
    //     showLives.innerHTML = "You have " + lives + " lives";
    //     if (lives < 1) {
    //         showLives.innerHTML = "Game Over! The letterSelected was "
    //             + letterSelected + ".";
    //     }
    //     for (var i = 0; i < pickedList.length; i++) {
    //         if (total + space === pickedList.length) {
    //             showLives.innerHTML = "You Win!";
    //         }
    //     }
    // }