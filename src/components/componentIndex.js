// set states
const [isPlaying, setIsPlaying] = useState(false);
const [active, setActive] = useState(true);

// set variables
let trackImg = document.querySelector(".track-img");
let trackName = document.querySelector(".music-name");
let trackArtist = document.querySelector(".music-singer");

let randomTrack = document.querySelector(".random-track");
let prevTrack = document.querySelector(".prev-track");
let playpauseBtn = document.querySelector(".playpause-btn");
let nextTrack = document.querySelector(".next-track");
let repeatTrack = document.querySelector(".repeat-track");
let trackIndex = 0;
const curr_track = document.createElement("audio");

// console.log(trackName);
// console.log(trackArtist);

// set functions
const loadTrack = (trackIndex) => {
  console.log("check componentIndexs");
  // load new track + track color
  curr_track.src = music_list[trackIndex].music;
  curr_track.load();
  trackImg.style.backgroundImage = "url(" + music_list[trackIndex].img + ")";

  //load track information
  trackName.textContent = music_list[0].name;
  trackArtist = music_list[0].artist;
};

loadTrack(trackIndex);

// css styles
var playElements = document.getElementsByClassName("player-btn-item");
var playItem = playElements[2];
