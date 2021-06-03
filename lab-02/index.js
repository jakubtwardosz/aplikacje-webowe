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
var channelNumber = 4;
var boom;
var clap;
var hihat;
var kick;
var openhat;
var ride;
var snare;
var tink;
var tom;
var Sound = /** @class */ (function () {
    function Sound(key, time) {
        this.key = key;
        this.time = time;
    }
    return Sound;
}());
var Channel = /** @class */ (function () {
    function Channel() {
        this.isRecordingOn = false;
        this.sounds = [];
        this.startRecording = 0;
    }
    return Channel;
}());
var Channels = /** @class */ (function () {
    function Channels(channelNumber) {
        this.channels = [];
        console.log(channelNumber);
        for (var number = 0; number < channelNumber; number++) {
            this.channels.push(new Channel());
        }
    }
    Channels.prototype.setRecording = function (channelNumber, ev) {
        console.log(ev.timeStamp);
        this.channels.forEach(function (element) {
            element.isRecordingOn = false;
        });
        var recording = this.channels[channelNumber];
        recording.isRecordingOn = !recording.isRecordingOn;
        recording.startRecording = ev.timeStamp;
    };
    Channels.prototype.record = function (toRecord) {
        // toRecord.time -= this.startRecording;
        this.channels
            .filter(function (recording) { return recording.isRecordingOn; })
            .forEach(function (recording) {
            return recording.sounds.push(__assign(__assign({}, toRecord), { time: toRecord.time - recording.startRecording }));
        });
    };
    Channels.prototype.play = function (channelNumber) {
        this.playSounds(this.channels[channelNumber].sounds);
    };
    Channels.prototype.playAll = function () {
        this.playSounds(this.channels.flatMap(function (recording) { return recording.sounds; }));
    };
    Channels.prototype.playSounds = function (channel) {
        channel.forEach(function (sound) {
            setTimeout(function () { return playSound(sound.key); }, sound.time);
        });
    };
    return Channels;
}());
var recordings = new Channels(channelNumber);
var Drumkit = /** @class */ (function () {
    function Drumkit() {
        this.appStart();
    }
    Drumkit.prototype.appStart = function () {
        document.addEventListener("keypress", this.onKeyPress);
        var _loop_1 = function (channel) {
            var btnPlayChannel = document.querySelector("#playChannel" + channel);
            var btnRecordChannel = document.querySelector("#recordChannel" + channel);
            btnPlayChannel.addEventListener("click", function () { return recordings.play(channel); });
            btnRecordChannel.addEventListener("click", function (ev) {
                return recordings.setRecording(channel, ev);
            });
        };
        for (var channel = 1; channel <= channelNumber; channel++) {
            _loop_1(channel);
        }
        var btnPlayAllChannel = document.querySelector("#playAllChannels");
        btnPlayAllChannel.addEventListener("click", function () { return recordings.playAll(); });
        this.getAudioElements();
    };
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
        var pad = document.querySelector(".pad-" + ev.key);
        if (pad === null) {
            return; // exception
        }
        pad.classList.add('playing');
        recordings.record(new Sound(key, time));
        var pads = document.querySelectorAll('.pad');
        pads.forEach(function (pad) {
            pad.addEventListener('transitionend', removeTransition);
            console.log(pad);
        });
        playSound(key);
    };
    return Drumkit;
}());
function removeTransition(ev) {
    if (ev.propertyName !== 'transform') //skip if not a transform
        return;
    this.classList.remove('playing');
}
function playSound(key) {
    switch (key) {
        case "q":
            boom.currentTime = 0;
            boom.play();
            break;
        case "w":
            clap.currentTime = 0;
            clap.play();
            break;
        case "e":
            hihat.currentTime = 0;
            hihat.play();
            break;
        case "r":
            kick.currentTime = 0;
            kick.play();
            break;
        case "t":
            openhat.currentTime = 0;
            openhat.play();
            break;
        case "a":
            ride.currentTime = 0;
            ride.play();
            break;
        case "s":
            snare.currentTime = 0;
            snare.play();
            break;
        case "d":
            tink.currentTime = 0;
            tink.play();
            break;
        case "f":
            tom.currentTime = 0;
            tom.play();
            break;
    }
}
var drumkit = new Drumkit();
