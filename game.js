
window.onload = function () {
    // let popup= document.getElementById("popup");
    // popup.style.visibility="hidden";


    function reset(win = false){
        // if (!win)
        //     sessionStorage.setItem('score',0);
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
    let win = false;
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
            list.innerText= alphabet[i]
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
            // createImg();
            // // document.getElementById('game-arrangement').style.fontSize="100px";
            // document.getElementById('game-arrangement').style.color="white";
            // document.getElementById('game-arrangement').style.textAlign="center";
            popup=document.getElementById('popup1')
            popup.style.display="block";
            document.getElementById('game').innerHTML = 'You Won!!!';
            score++;
            // score.innerText=score;
            document.getElementById('scoreid').innerText=score;
            console.log(score);
            sessionStorage.setItem('score',score)
            win=true

        }
    };
    // function createImg() {
    //     var x = document.createElement("IMG");
    //     x.setAttribute("src", "wn.png");
    //     x.setAttribute("width", "304");
    //     x.setAttribute("height", "228");
    //     x.setAttribute("alt", "The Pulpit Rock");
    //     document.body.appendChild(x);


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
            displayLives(lives);
            lost();
            console.log(lives)
        }
        document.getElementById(letter).disabled =true;
        winning()
        displayLives(lives);

        };
        //console.log("literele cautate se afla pe pozitiile: " +foundedIndexes);

    function displayLives(number) {
        let heartsDiv=document.getElementById('lives').src = './images/hearts.png'
        document.getElementById("lives").innerHTML = 'Lives:  ';
        for (var i = 0; i < number; i++)
            {
                //let multipyhearts= heartsDiv*i;
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


    //findLetterFromWords();

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

        document.getElementById('container').innerHTML = 'You lost.... The answer was: ' + word;


       }
}
// winning();
    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }
        if(event.key.charCodeAt()&&'A'.charCodeAt()<=event.key.charCodeAt()&&event.key.charCodeAt()<='z'.charCodeAt()) {

            findLetterIndexes(event.key)
        }
    });

//     var popupEl = document.getElementById('popup');
// // As a native plugin
//     var popup = new Popup(popupEl, {
//         width: 400,
//         height: 300
//     });
//     var open = document.getElementById('open');
//     open.onclick = function() {
//         popup.open();
//     };







//     var btnOpen = select('.js-open');
//     var btnClose = select('.js-close');
//     var modal = select('.js-modal');
//     var modalChildren = modal.children;
//
//     function hideModal() {
//         dynamics.animate(modal, {
//             opacity: 0,
//             translateY: 100
//         }, {
//             type: dynamics.spring,
//             frequency: 50,
//             friction: 600,
//             duration: 1500
//         });
//     }
//
//     function showModal() {
//         // Define initial properties
//         dynamics.css(modal, {
//             opacity: 0,
//             scale: .5
//         });
//
//         // Animate to final properties
//         dynamics.animate(modal, {
//             opacity: 1,
//             scale: 1
//         }, {
//             type: dynamics.spring,
//             frequency: 300,
//             friction: 400,
//             duration: 1000
//         });
//     }
//
//     function showBtn() {
//         dynamics.css(btnOpen, {
//             opacity: 0
//         });
//
//         dynamics.animate(btnOpen, {
//             opacity: 1
//         }, {
//             type: dynamics.spring,
//             frequency: 300,
//             friction: 400,
//             duration: 800
//         });
//     }
//
//     function showModalChildren() {
//         // Animate each child individually
//         for(var i=0; i<modalChildren.length; i++) {
//             var item = modalChildren[i];
//
//             // Define initial properties
//             dynamics.css(item, {
//                 opacity: 0,
//                 translateY: 30
//             });
//
//             // Animate to final properties
//             dynamics.animate(item, {
//                 opacity: 1,
//                 translateY: 0
//             }, {
//                 type: dynamics.spring,
//                 frequency: 300,
//                 friction: 400,
//                 duration: 1000,
//                 delay: 100 + i * 40
//             });
//         }
//     }
//
//     function toggleClasses() {
//         toggleClass(btnOpen, 'is-active');
//         toggleClass(modal, 'is-active');
//     }
//
// // Open nav when clicking sandwich button
//     btnOpen.addEventListener('click', function(e) {
//         toggleClasses();
//         showModal();
//         showModalChildren();
//     });
//
// // Open nav when clicking sandwich button
//     btnClose.addEventListener('click', function(e) {
//         hideModal();
//         dynamics.setTimeout(toggleClasses, 500);
//         dynamics.setTimeout(showBtn, 500);
//     });

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