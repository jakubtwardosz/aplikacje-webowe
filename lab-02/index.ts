let boom: HTMLAudioElement;
let clap: HTMLAudioElement;
let hihat: HTMLAudioElement;
let kick: HTMLAudioElement;
let openhat: HTMLAudioElement;
let ride: HTMLAudioElement;
let snare: HTMLAudioElement;
let tink: HTMLAudioElement;
let tom: HTMLAudioElement;
 
const channel1: any[] = [];

appStart();

function appStart() { 
    document.addEventListener('keypress', onKeyPress);

    const btnPlayChannel1 = document.querySelector('#playChannel1');

    const btnRecordChannel1 = document.querySelector('#recordChannel1');

    btnPlayChannel1.addEventListener('click', onPlayChannel1);

    btnRecordChannel1.addEventListener('click', onRecordChannel1);

    getAudioElements();
}

function onPlayChannel1(): void {
    channel1.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time);
    })
}

function onRecordChannel1(ev: KeyboardEvent): void{
    console.log(ev);0
}

function getAudioElements(): void {
     boom = document.querySelector('[data-sound="boom"]');
     clap = document.querySelector('[data-sound="clap"]');
     hihat = document.querySelector('[data-sound="hihat"]');
     kick = document.querySelector('[data-sound="kick"]');
     openhat = document.querySelector('[data-sound="openhat"]');
     ride = document.querySelector('[data-sound="ride"]');
     snare = document.querySelector('[data-sound="snare"]');
     tink = document.querySelector('[data-sound="tink"]');
     tom = document.querySelector('[data-sound="tom"]');
}

function onKeyPress(ev: KeyboardEvent): void{
    const key = ev.key;
    const time = ev.timeStamp;

    channel1.push({key, time});
    
    playSound(key);
    console.log(channel1);
}

function playSound(key: string) {

    switch(key){
        case 'q':
            boom.currentTime = 0;
            boom.play();
            break;
        case 'w':
            clap.currentTime = 0;
            clap.play();
            break;
        case 'e':
            hihat.currentTime = 0;
            hihat.play();
            break;
        case 'r':
            kick.currentTime = 0;
            kick.play();
            break;
        case 't':
            openhat.currentTime = 0;
            openhat.play();
            break;
        case 'a':
            ride.currentTime = 0;
            ride.play();
            break;
        case 's':
            snare.currentTime = 0;
            snare.play();
            break;
        case 'd':
            tink.currentTime = 0;
            tink.play();
            break;
        case 'f':
            tom.currentTime = 0;
            tom.play();
            break;            
    }
}
   