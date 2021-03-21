let boomSound: HTMLAudioElement;
let clapSound: HTMLAudioElement;
let hihatSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;
let openhatSound: HTMLAudioElement;
let rideSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;
let tinkSound: HTMLAudioElement;
let tomSound: HTMLAudioElement;

const channel1: any[] = [];
appStart();

function appStart() { 
    document.addEventListener('keypress', onKeyPress);
    const btnPlayChannel1 = document.querySelector('#playChannel1');
    btnPlayChannel1.addEventListener('click', onPlayChannel1);
    getAudioElements();
}

function onPlayChannel1(): void {
    channel1.forEach(sound => {
        setTimeout(() => playSound(sound.key), sound.time);
    })
}

function getAudioElements(): void {
     boomSound = document.querySelector('[data-sound="boom"]');
     clapSound = document.querySelector('[data-sound="clap"]');
     hihatSound = document.querySelector('[data-sound="kick"]');
     kickSound = document.querySelector('[data-sound="clap"]');
     openhatSound = document.querySelector('[data-sound="openhat"]');
     rideSound = document.querySelector('[data-sound="ride"]');
     snareSound = document.querySelector('[data-sound="snare"]');
     tinkSound = document.querySelector('[data-sound="tink"]');
     tomSound = document.querySelector('[data-sound="tom"]');
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
                boomSound.currentTime = 0;
                boomSound.play();
                break;
            case 'w':
                clapSound.currentTime = 0;
                clapSound.play();
                break;
            case 'e':
                hihatSound.currentTime = 0;
                hihatSound.play();
                break;
            case 'r':
                kickSound.currentTime = 0;
                kickSound.play();
                break;
            case 't':
                openhatSound.currentTime = 0;
                openhatSound.play();
                break;
            case 'a':
                rideSound.currentTime = 0;
                rideSound.play();
                break;
            case 's':
                snareSound.currentTime = 0;
                snareSound.play();
                break;
            case 'd':
                tinkSound.currentTime = 0;
                tinkSound.play();
                break;
            case 'f':
                tomSound.currentTime = 0;
                tomSound.play();
                break;            
        }        
    }
