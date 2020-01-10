
window.onload = function () {
    // let popup= document.getElementById("popup");
    // popup.style.visibility="hidden";


    function reset(keepScore = false){
        if (!keepScore)
            sessionStorage.setItem('score',0);
        window.location.reload();
    };

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
    let keepScore = false;
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
    document.getElementById("reset").addEventListener("click", ()=>reset(keepScore));

    let sessionScore=sessionStorage.getItem('score');
    let score;
    if(sessionScore)
        score=sessionScore;
    else score=0;
    let keepingScore = function(){
        let divScore= document.getElementById("score");
        let spanScore=document.createElement("span");
        spanScore.innerHTML=score;
        spanScore.id='scoreid';
        divScore.appendChild(spanScore);

    };
    if (!sessionStorage.getItem('score')) {
        sessionStorage.setItem('score',score.toString());
    }
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
            list.innerText= alphabet[i];
            list.className="letter";
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
            document.getElementById('hideImgWin').style.display="block";
            let all=document.getElementsByClassName('all')[0];
            let gameArrangement=document.getElementsByClassName('game-arrangement')[0];
            all.removeChild(gameArrangement);
            // document.getElementById("reset").style.marginTop="10vh";

            // addImg();
            // document.getElementById("hangmanPic").innerHTML="<img src=\"./images/badass.jpg\"  alt>";
            // document.getElementById('container').style.fontSize="30px";
            // document.getElementById('container').style.color="white";
            // document.getElementById('container').innerHTML = "Yay! You won +1p! Click play again to collect more points";
            score++;
            // score.innerText=score;
            document.getElementById('scoreid').innerText=score;
            console.log(score);
            sessionStorage.setItem('score',score);
            keepScore=true;
            // popup=document.getElementById('popup1');
            // popup.style.display="block";
            // console.log(popup)

        }
    };

//caut cuvant random din lista
    let selectedWord = function(){
        word=words[Math.floor(Math.random()*words.length)];
        console.log(word);

    };
    selectedWord();

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
            displayLives(lives);
            lost();
            console.log(lives)
        }
        document.getElementById(letter).disabled =true;
        winning()
        displayLives(lives);

        };
        //console.log("literele cautate se afla pe pozitiile: " +foundedIndexes);

    function addImg() {
        let img = document.createElement('img');
        img.src = './images/badass.jpg';
        document.getElementsByClassName('game-arrangement').innerHtml=img;
    }

    function displayLives(number) {
        //let heartsDiv=document.getElementById('lives').src = './images/hearts.png'
        document.getElementById("lives").innerHTML = 'Lives:  ';
        for (var i = 0; i < number; i++)
            {
                let a = new Image();
                a.src = './images/hearts.png';
                a.width = 25;
                a.height = 25;
                document.getElementById("lives").appendChild(a);
            }


    }

    function updateHangmanPicture() {
        document.getElementById('hangmanPic').src = './images/' + lives + '.jpg';
    }

    let findLetterFromWords = function(element){
    letter=element.target.innerText;
    console.log(element)
        findLetterIndexes(letter)

    };


    // create alphabet ul

    let displayWord = function(){
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
        sessionStorage.removeItem('score');
        //window.alert("I have spoken. You lost!");
        document.getElementById('container').style.fontSize="30px";
        document.getElementById('container').style.color="white";
        // document.getElementById('hideImgLost').style.display="block";
        // let all=document.getElementsByClassName('all')[0];
        // let gameArrangement=document.getElementsByClassName('game-arrangement')[0];
        // all.removeChild(gameArrangement);
        // document.getElementById("reset").style.marginTop="60vh";
        // document.getElementById('lost').style.marginTop="80vh";
        document.getElementById('container').innerHTML = 'You lost.... The answer was: ' + word;


       }
}
    function isLetter(str) {
        return str.length === 1 && str.match(/[a-z]/i);
    }
// winning();
    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }
        if(isLetter(event.key)) {
            // findLetterIndexes(event.key)
            document.getElementById(event.key.toLowerCase()).click()
        }
    });
};