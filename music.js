var key_tone = {
  Q : "25",
  W : "26",
  E : "27",
  R : "28",
  T : "29",
  Y : "30",
  U : "31",
  I : "32",
  O : "33",
  P : "34",
  A : "35",
  S : "36",
  D : "37"
}
var arr = new Array();
var i = 0;
for(key in key_tone){
  arr[i] = new Audio(`sound_files/${key_tone[key]}.wav`);
  i++;
}

/*var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var source;
var analyser = audioCtx.createAnalyser();

function getData() {
  source = audioCtx.createBufferSource();
  var request = new XMLHttpRequest();

  request.open('GET', 'sound_files/25.wav', true);

  request.responseType = 'arraybuffer';


  request.onload = function() {
    console.log('hi');
    var audioData = request.response;

    audioCtx.decodeAudioData(audioData, function(buffer) {
        source.buffer = buffer;
        source.connect(analyser);
        analyser.connect(audioCtx.destination);
      },

      function(e){ console.log("Error with decoding audio data" + e.err); });

  }
  request.send();
}*/

document.addEventListener('keydown',e => {
  var key = e.key.toUpperCase();
  var num = key_tone[key];
  var index = num - 25;
  arr[index].currentTime = 0;
  arr[index].play();
  var small_key = key.toLowerCase();
  var pad = document.getElementById(small_key);
  //getData();
  pad.style.background = 'radial-gradient(circle, #96FFFF, #1EDDFF)';
})

document.addEventListener('keyup', e => {
  var key = e.key.toUpperCase();
  var small_key = key.toLowerCase();
  var pad = document.getElementById(small_key);
  pad.style.background = 'radial-gradient(circle, #C0FFFF,	#F4FFFF)';
})
