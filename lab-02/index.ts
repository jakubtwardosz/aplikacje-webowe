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

class Recordings{

    isRecordingOn1 : boolean = false;
    isRecordingOn2 : boolean = false;
    isRecordingOn3 : boolean = false;

    channel1: any[] = [];
    channel2: any[] = [];
    channel3: any[] = [];

    startRecording : number = 0;

    setRecording(channelNumber : number, ev : Event){

        this.startRecording = ev.timeStamp;

        console.log(this.startRecording);
        switch(channelNumber){
            case 1 :
                this.isRecordingOn1 = !this.isRecordingOn1;
                this.isRecordingOn2 = this.isRecordingOn3 = false;
            break;
            case 2 :
                this.isRecordingOn2 = !this.isRecordingOn2;
                this.isRecordingOn1 = this.isRecordingOn3 = false;
            break;
            case 3 :
                this.isRecordingOn3 = !this.isRecordingOn3;
                this.isRecordingOn2 = this.isRecordingOn1 = false;
            break;
        }
    }

    record(toRecord : any){
        // toRecord.time -= this.startRecording;
        let newRecord = { ...toRecord, time: toRecord.time - this.startRecording };
        if(this.isRecordingOn1){
            this.channel1.push(newRecord);
        } else if(this.isRecordingOn2){
            this.channel2.push(newRecord);
        } else if(this.isRecordingOn3){
            this.channel3.push(newRecord);
        }
    }

    play(channelNumber: number){
        let channel;
        switch(channelNumber){
            case 1 :
                channel = this.channel1;
            break;
            case 2 :
                channel = this.channel2;
            break;
            case 3 :
                channel = this.channel3;
            break;
        }        
            this.playChannel(channel);
    }

    playAll(){
        console.log('aa');
        this.playChannel(this.channel1.concat(this.channel2).concat(this.channel3));
        
    }

    playChannel(channel: any[]){
        channel.forEach(sound => {
            setTimeout(() => playSound(sound.key), sound.time);
        })
    }
}


let recordings : Recordings = new Recordings();

class Drumkit{
    constructor(){
        this.appStart();

    }    

    appStart() {
        
        // this.isRecordingOn = false;

        document.addEventListener('keypress', this.onKeyPress);

        const btnPlayChannel1 = document.querySelector('#playChannel1');
        const btnRecordChannel1 = document.querySelector('#recordChannel1');

        btnPlayChannel1.addEventListener('click', () => recordings.play(1));
        btnRecordChannel1.addEventListener('click', (ev) => recordings.setRecording(1, ev));

        const btnPlayChannel2 = document.querySelector('#playChannel2');
        const btnRecordChannel2 = document.querySelector('#recordChannel2');

        btnPlayChannel2.addEventListener('click', () => recordings.play(2));
        btnRecordChannel2.addEventListener('click', (ev) => recordings.setRecording(2, ev));

        const btnPlayChannel3 = document.querySelector('#playChannel3');
        const btnRecordChannel3 = document.querySelector('#recordChannel3');

        btnPlayChannel3.addEventListener('click', () => recordings.play(3));
        btnRecordChannel3.addEventListener('click', (ev) => recordings.setRecording(3, ev));

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

        recordings.record({key, time});

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

 

   