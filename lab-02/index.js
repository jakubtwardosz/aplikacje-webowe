var boom;
var clap;
var hihat;
var kick;
var openhat;
var ride;
var snare;
var tink;
var tom;
var channel1 = [];
appStart();
function appStart() {
    document.addEventListener('keypress', onKeyPress);
    var btnPlayChannel1 = document.querySelector('#playChannel1');
    var btnRecordChannel1 = document.querySelector('#recordChannel1');
    btnPlayChannel1.addEventListener('click', onPlayChannel1);
    btnRecordChannel1.addEventListener('click', onRecordChannel1);
    getAudioElements();
}
function onPlayChannel1() {
    channel1.forEach(function (sound) {
        setTimeout(function () { return playSound(sound.key); }, sound.time);
    });
}
function onRecordChannel1(ev) {
    console.log(ev);
    0;
}
function getAudioElements() {
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
function onKeyPress(ev) {
    var key = ev.key;
    var time = ev.timeStamp;
    channel1.push({ key: key, time: time });
    playSound(key);
    console.log(channel1);
}
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
