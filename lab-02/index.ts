let channelNumber = 3;

let boom: HTMLAudioElement;
let clap: HTMLAudioElement;
let hihat: HTMLAudioElement;
let kick: HTMLAudioElement;
let openhat: HTMLAudioElement;
let ride: HTMLAudioElement;
let snare: HTMLAudioElement;
let tink: HTMLAudioElement;
let tom: HTMLAudioElement;
// let isRecordingOn : boolean = false;

// const channel1: any[] = [];
// const channel2: any[] = [];
// const channel3: any[] = [];

class Sound{
    key: string;
    time: number;

    constructor(key: string, time: number){
        this.key = key;
        this.time = time;
    }
}

class Channel{
    isRecordingOn : boolean = false;
    sounds: Sound[] = [];
    startRecording : number = 0;
}

class Channels{
    channels: Channel[] = [];

    constructor(channelNumber: number){
        for(let number = 0; number < channelNumber; number++){
            this.channels.push(new Channel());
        }
    }

    setRecording(channelNumber : number, ev : Event){
        console.log(ev.timeStamp);

        this.channels.forEach(element => {
            element.isRecordingOn = false;
        });

        const recording = this.channels[channelNumber];
        recording.isRecordingOn = !recording.isRecordingOn;
        recording.startRecording = ev.timeStamp;
    }

    record(toRecord : Sound){
        // toRecord.time -= this.startRecording;
        this.channels
            .filter(recording => recording.isRecordingOn)
            .forEach(recording => recording.sounds.push({ ...toRecord, time: toRecord.time - recording.startRecording }));
    }

    play(channelNumber: number){
        this.playSounds(this.channels[channelNumber].sounds);
    }

    playAll(){
        console.log('aa'); 
        this.playSounds(this.channels.flatMap(recording => recording.sounds));
        
    }

    playSounds(channel: Sound[]){
        channel.forEach(sound => {
            setTimeout(() => playSound(sound.key), sound.time);
        })
    }
}


let recordings : Channels = new Channels(channelNumber);

class Drumkit{
    constructor(){
        this.appStart();

    }    

    appStart() {
        
        // this.isRecordingOn = false;
        
        document.addEventListener('keypress', this.onKeyPress);

        for (let channel = 1; channel <= channelNumber; channel++){
            const btnPlayChannel = document.querySelector('#playChannel' + channel);
            const btnRecordChannel = document.querySelector('#recordChannel' + channel);
    
            btnPlayChannel.addEventListener('click', () => recordings.play(channel));
            btnRecordChannel.addEventListener('click', (ev) => recordings.setRecording(channel, ev));
        }
 
        // const btnPlayChannel2 = document.querySelector('#playChannel2');
        // const btnRecordChannel2 = document.querySelector('#recordChannel2');

        // btnPlayChannel2.addEventListener('click', () => recordings.play(2));
        // btnRecordChannel2.addEventListener('click', (ev) => recordings.setRecording(2, ev));

        // const btnPlayChannel3 = document.querySelector('#playChannel3');
        // const btnRecordChannel3 = document.querySelector('#recordChannel3');

        // btnPlayChannel3.addEventListener('click', () => recordings.play(3));
        // btnRecordChannel3.addEventListener('click', (ev) => recordings.setRecording(3, ev));

        const btnPlayAllChannel = document.querySelector('#playAllChannels');

        btnPlayAllChannel.addEventListener('click', () => recordings.playAll());


        this.getAudioElements();
    }

    // onPlayChannel(channel : any[]): void {
    //     channel.forEach(sound => {
    //         setTimeout(() => playSound(sound.key), sound.time);
    //     })
    // }

    // onRecordChannel1(ev: Event): void{
    //     isRecordingOn = !isRecordingOn;
    //     //console.log(isRecordingOn);
    // }

    getAudioElements(): void {
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

    onKeyPress(ev: KeyboardEvent): void{
        console.log(ev);
        const key = ev.key;
        const time = ev.timeStamp;

        recordings.record(new Sound(key, time));

        console.log(recordings);
        
            
        
        playSound(key);    
    }    
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

const drumkit = new Drumkit();

 

   