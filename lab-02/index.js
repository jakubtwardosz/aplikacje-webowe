var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var boom;
var clap;
var hihat;
var kick;
var openhat;
var ride;
var snare;
var tink;
var tom;
// let isRecordingOn : boolean = false;
// const channel1: any[] = [];
// const channel2: any[] = [];
// const channel3: any[] = [];
var Recordings = /** @class */ (function () {
    function Recordings() {
        this.isRecordingOn1 = false;
        this.isRecordingOn2 = false;
        this.isRecordingOn3 = false;
        this.channel1 = [];
        this.channel2 = [];
        this.channel3 = [];
        this.startRecording = 0;
    }
    Recordings.prototype.setRecording = function (channelNumber, ev) {
        this.startRecording = ev.timeStamp;
        console.log(this.startRecording);
        switch (channelNumber) {
            case 1:
                this.isRecordingOn1 = !this.isRecordingOn1;
                this.isRecordingOn2 = this.isRecordingOn3 = false;
                break;
            case 2:
                this.isRecordingOn2 = !this.isRecordingOn2;
                this.isRecordingOn1 = this.isRecordingOn3 = false;
                break;
            case 3:
                this.isRecordingOn3 = !this.isRecordingOn3;
                this.isRecordingOn2 = this.isRecordingOn1 = false;
                break;
        }
    };
    Recordings.prototype.record = function (toRecord) {
        // toRecord.time -= this.startRecording;
        var newRecord = __assign(__assign({}, toRecord), { time: toRecord.time - this.startRecording });
        if (this.isRecordingOn1) {
            this.channel1.push(newRecord);
        }
        else if (this.isRecordingOn2) {
            this.channel2.push(newRecord);
        }
        else if (this.isRecordingOn3) {
            this.channel3.push(newRecord);
        }
    };
    Recordings.prototype.play = function (channelNumber) {
        var channel;
        switch (channelNumber) {
            case 1:
                channel = this.channel1;
                break;
            case 2:
                channel = this.channel2;
                break;
            case 3:
                channel = this.channel3;
                break;
        }
        channel.forEach(function (sound) {
            setTimeout(function () { return playSound(sound.key); }, sound.time);
        });
    };
    return Recordings;
}());
var recordings = new Recordings();
var Drumkit = /** @class */ (function () {
    function Drumkit() {
        this.appStart();
    }
    Drumkit.prototype.appStart = function () {
        // this.isRecordingOn = false;
        document.addEventListener('keypress', this.onKeyPress);
        var btnPlayChannel1 = document.querySelector('#playChannel1');
        var btnRecordChannel1 = document.querySelector('#recordChannel1');
        btnPlayChannel1.addEventListener('click', function () { return recordings.play(1); });
        btnRecordChannel1.addEventListener('click', function (ev) { return recordings.setRecording(1, ev); });
        var btnPlayChannel2 = document.querySelector('#playChannel2');
        var btnRecordChannel2 = document.querySelector('#recordChannel2');
        btnPlayChannel2.addEventListener('click', function () { return recordings.play(2); });
        btnRecordChannel2.addEventListener('click', function (ev) { return recordings.setRecording(2, ev); });
        var btnPlayChannel3 = document.querySelector('#playChannel3');
        var btnRecordChannel3 = document.querySelector('#recordChannel3');
        btnPlayChannel3.addEventListener('click', function () { return recordings.play(3); });
        btnRecordChannel3.addEventListener('click', function (ev) { return recordings.setRecording(3, ev); });
        this.getAudioElements();
    };
    // onPlayChannel(channel : any[]): void {
    //     channel.forEach(sound => {
    //         setTimeout(() => playSound(sound.key), sound.time);
    //     })
    // }
    // onRecordChannel1(ev: Event): void{
    //     isRecordingOn = !isRecordingOn;
    //     //console.log(isRecordingOn);
    // }
    Drumkit.prototype.getAudioElements = function () {
        boom = document.querySelector('[data-sound="boom"]');
        clap = document.querySelector('[data-sound="clap"]');
        hihat = document.querySelector('[data-sound="hihat"]');
        kick = document.querySelector('[data-sound="kick"]');
        openhat = document.querySelector('[data-sound="openhat"]');
        ride = document.querySelector('[data-sound="ride"]');
        snare = document.querySelector('[data-sound="snare"]');
        tink = document.querySelector('[data-sound="tink"]');
        tom = document.querySelector('[data-sound="tom"]');
    };
    Drumkit.prototype.onKeyPress = function (ev) {
        console.log(ev);
        var key = ev.key;
        var time = ev.timeStamp;
        recordings.record({ key: key, time: time });
        console.log(recordings);
        playSound(key);
    };
    return Drumkit;
}());
function playSound(key) {
    switch (key) {
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
var drumkit = new Drumkit();
