let bubbles = document.querySelector('.pbtm');
let timer = document.querySelector('#timer');
let hit = document.querySelector('#hit');
let score = document.querySelector('#score');

let point = 0;
let hits = 0;

const makeBubbles = () =>{
    let clutch = '';
    for(let i = 1; i<= 72; i++){
        let rn = Math.floor(Math.random() * 10);
        clutch += `<div class="bubble">${rn}</div>`;
    
    }
    bubbles.innerHTML = clutch;
}

const timerStamp = () =>{
    let time = 60;
    let setTimer = setInterval(() =>{
        if(time > 0){
            time--;
            timer.textContent = time;
        }else{
            clearInterval(setTimer);
            bubbles.innerHTML = `<h1> Game Over </h1>`;
        }
    },1000);
}

const getNewHit = () =>{
    hits = Math.floor(Math.random() * 10);
    hit.textContent = hits;
}

const Score = () =>{
    point += 10;
    score.textContent = point;
}

bubbles.addEventListener('click',(elm) =>{
    let clickNum = Number(elm.target.textContent);

    if(hits == clickNum){
        makeBubbles();
        getNewHit();
        Score();
    }
})

makeBubbles();
getNewHit();
timerStamp();
