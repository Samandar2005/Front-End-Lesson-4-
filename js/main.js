const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
const cases = document.getElementsByClassName("case");
const timerTim = document.getElementById("timer");
const levelSpan = document.getElementById("level");


let level = 1;
let tima = 10;
let tima2 = 9;
let tima3 = 8;
let tima4 = 7;
let tima5 = 6;
let tima6 = 5;
let tima7 = 4;
let tima8 = 3;
let tima9 = 2;
let tima10 = 1;


function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


const getRandomNumber = () => Math.floor(Math.random() * 50)+1;

const setNumber = () => {
    // const v = Math.random() * 50;
    const a = Math.floor(Math.random() * 50)+1;
    const b = Math.floor(Math.random() * 50)+1;
    const sign = (Math.floor(Math.random() * 2) %2) + 1;

    console.log(a, b, sign);
    const quetionString = `${a} ${sign == 1 && '+' || '-'} ${b}`;
    question.innerHTML = quetionString;
   

    const trueAnswer = eval(quetionString);
    

    let case2 = getRandomNumber();
    let case3 = getRandomNumber();
    let case4 = getRandomNumber();

    let casesArrey = [trueAnswer];
    while(casesArrey.length < 4){
        let randomNumber = getRandomNumber();
        if(casesArrey.indexOf(randomNumber) == -1) casesArrey.push(randomNumber);
    }

    casesArrey = shuffle(casesArrey);

    for (let i = 0; i < 4; i++){
        cases[i].classList.remove("success")
        cases[i].classList.remove("error")
        cases[i].innerHTML = casesArrey[i];
        cases[i].onclick = (event) => check(event.target, casesArrey[i], trueAnswer);
    }
}
setNumber ();

setTimeout(() => {
    tima--;
    timerTim.innerHTML = tima;
    setTimeout(() => {
        tima2--;
        timerTim.innerHTML = tima2;
    }, 1000)
    setTimeout(() => {
        tima3--;
        timerTim.innerHTML = tima3;
    }, 2000)
    setTimeout(() => {
        tima4--;
        timerTim.innerHTML = tima4;
    }, 3000)
    setTimeout(() => {
        tima5--;
        timerTim.innerHTML = tima5;
    }, 4000)
    setTimeout(() => {
        tima6--;
        timerTim.innerHTML = tima6;
    }, 5000)
    setTimeout(() => {
        tima7--;
        timerTim.innerHTML = tima7;
    }, 6000)
    setTimeout(() => {
        tima8--;
        timerTim.innerHTML = tima8;
    }, 7000)
    setTimeout(() => {
        tima9--;
        timerTim.innerHTML = tima9;
    }, 8000)
    setTimeout(() => {
        tima10--;
        timerTim.innerHTML = tima10;
        alert("Siz yutqazdingiz")
    }, 9000)
    
    
}, 1000)


const check = (box, number, trueAnswer) => {
   if (number == trueAnswer){
    box.classList.add("success");

    setTimeout(() =>{
        setNumber ();
        level++;
        levelSpan.innerHTML = level;
    }, 1000)
   }
   else {
    box.classList.add("error");
   }
}
