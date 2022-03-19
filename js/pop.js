//namen
console.log("hey");

var namen = ["Maak Puck op voor haar date!", "Maak Esther op voor haar date!", "Maak Evie op voor haar date!", "Maak Daphne op voor haar date!", "Maak Femke op voor haar date!", "Maak Lotte op voor haar date!", "Maak Roos op voor haar date!"]

var randomNummer = Math.random() * 6;

var naamElement = document.querySelector("p.naam");

randomNummer = Math.floor(randomNummer);

naamElement.textContent = namen[randomNummer];


//haar
var haarImg = document.querySelector("#haar")

function doeHaarblond() {
    haarImg.src = "images/haarblond.png";
}

haarImg.addEventListener("click", doeHaarblond);

function doeHaarbruin() {
    haarImg.src = "images/haarbruin.png";
}

haarImg.addEventListener("dblclick", doeHaarbruin);


//lippen
var lipImg = document.querySelector("#lip")

function doeLiprood() {
    lipImg.src = "images/liprood.png";
}

lipImg.addEventListener("click", doeLiprood);

function doeLiproze() {
    lipImg.src = "images/liproze.png";
}

lipImg.addEventListener("dblclick", doeLiproze);


//ogen
var oogImg = document.querySelector("#oog")
var naarDatebutton = document.querySelector("#naardate")

function doeOogblauw( event ) {
    console.log (event);
    oogImg.src = "images/oogblauw.png";
    if (event.shiftKey) {
        naarDatebutton.hidden = false;
      alert('Mijn favoriete kleur is blauw!');
    } else {
        alert('Weet je eigenlijk wel mijn favoriete oogkleur?')
    }
}

oogImg.addEventListener("click", doeOogblauw);

function doeOogbruin() {
    oogImg.src = "images/oogbruin.png";
}

oogImg.addEventListener("dblclick", doeOogbruin);


//wenkbrauwen
var wenkbrauwImg = document.querySelector("#wenkbrauw")

function doeWenkbrauwweg() {
    wenkbrauwImg.src = "images/wenkbrauwie.png";
}

wenkbrauwImg.addEventListener("click", doeWenkbrauwweg);

function doeWenkbrauwmooi() {
    wenkbrauwImg.src = "images/wenkbrauw.png";
}

wenkbrauwImg.addEventListener("dblclick", doeWenkbrauwmooi);


//pukkel
var pukkelImg = document.querySelector("#pukkel")

function doePukkelweg() {
    pukkelImg.src = "images/huid.png";
}

pukkelImg.addEventListener("click", doePukkelweg);

function doePukkelterug() {
    pukkelImg.src = "images/pukkel.png";
}

pukkelImg.addEventListener("dblclick", doePukkelterug);


//pukkel
var pukkelImg2 = document.querySelector("#pukkel2")

function doePukkelweg2() {
    pukkelImg2.src = "images/huid2.png";
}

pukkelImg2.addEventListener("click", doePukkelweg2);

function doePukkelterug2() {
    pukkelImg2.src = "images/pukkel2.png";
}

pukkelImg2.addEventListener("dblclick", doePukkelterug2);


//blok
var blokImg1 = document.querySelector("#blok1")

function doeLetterr() {
    blokImg1.src = "images/blok1.png";
}

blokImg1.addEventListener("click", doeLetterr);

function doeLetterweg1() {
    blokImg1.src = "images/r.png";
}

blokImg1.addEventListener("mouseover", doeLetterweg1);


//blok
var blokImg2 = document.querySelector("#blok2")

function doeLettero() {
    blokImg2.src = "images/blok2.png";
}

blokImg2.addEventListener("click", doeLettero);

function doeLetterweg2() {
    blokImg2.src = "images/o.png";
}

blokImg2.addEventListener("mouseover", doeLetterweg2);


//blok
var blokImg3 = document.querySelector("#blok3")

function doeLettero2() {
    blokImg3.src = "images/blok3.png";
}

blokImg3.addEventListener("click", doeLettero2);

function doeLetterweg3() {
    blokImg3.src = "images/o2.png";
}

blokImg3.addEventListener("mouseover", doeLetterweg3);


//blok
var blokImg4 = document.querySelector("#blok4")

function doeLetterd() {
    blokImg4.src = "images/blok4.png";
}

blokImg4.addEventListener("click", doeLetterd);

function doeLetterweg4() {
    blokImg4.src = "images/d.png";
}

blokImg4.addEventListener("mouseover", doeLetterweg4);

//audio
var ouch = document.getElementById("myAudio");

function playAudio() {
    ouch.play();
}


var kiss = document.getElementById("myAudio2");

function playAudio2() {
    kiss.play();
}


var knip = document.getElementById("myAudio3");

function playAudio3() {
    knip.play();
}


var wauw = document.getElementById("myAudio4");

function playAudio4() {
    wauw.play();
}