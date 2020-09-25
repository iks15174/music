var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var myAudio = document.getElementById('audio');

var source = audioCtx.createMediaElementSource(myAudio);
