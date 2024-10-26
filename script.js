

const tempoDocument = document.querySelector(".tempo"); 
let mil = 0;
let seg = 0;
let min= 0;
let interval;


function iniciar(){
    tempo();
    interval = setInterval(tempo, 10);
}

function formatTime(time){
    return time < 10 ? `0${time}`: time; 
}

const pausa = () =>{
    clearInterval(interval);
}

const zerar = () =>{
    clearInterval(interval);
    mil=0;
    seg=0;
    min=0;

    tempoDocument.innerHTML  = "00:00:00";
}

function tempo(){
    mil++;

    if (mil === 99){   
        mil = 0;
        seg++;
    }
    
    if (seg === 60) {        
        seg=0;
        min++;
    } 

   

tempoDocument.innerHTML = formatTime(min) + ":" + formatTime(seg) + ":" + formatTime(mil);

}
