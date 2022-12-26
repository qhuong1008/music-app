import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faHeart,
  faEllipsis,
  faCircle,
  faClockFour,
} from "@fortawesome/free-solid-svg-icons";
import { Link, BrowserRouter as Router } from "react-router-dom";
import NowPlayingBar from "../components/NowPlayingBar";
import music_list from "../music.js";
import album_list from "../album.js";
import chaykhoithegioinay from "../assets/images/chaykhoithegioinay.jpg";
// import sound from "../assets/audios/Chay Khoi The Gioi Nay Cukak Remix_ - Da.mp3";

function Playlist(props) {
  let curr_time = document.querySelector(".current-time");
  let total_duration = document.querySelector(".total-duration");
  let seek_slider = document.querySelector(".seek_slider");
  let updateTimer;
  // let curr_track = document.createElement("audio");
  let audio = "../assets/audios/Chay Khoi The Gioi Nay Cukak Remix_ - Da.mp3";
  let sound = require("../assets/audios/Chay Khoi The Gioi Nay Cukak Remix_ - Da.mp3");
  props.curr_track.src = sound;

  // const reset = () => {
  //   // curr_time.textContent = "00:00";
  //   // total_duration.textContent = "00:00";
  //   // seek_slider.value = 0;
  // };
  // const setUpdate = () => {
  //   let seekPosition = 0;
  //   if (!isNaN(curr_track.duration)) {
  //     seekPosition = curr_track.currentTime * (100 / curr_track.duration);
  //     seek_slider.value = seekPosition;

  //     let currentMinutes = Math.floor(curr_track.currentTime / 60);
  //     let currentSeconds = Math.floor(
  //       curr_track.currentTime - currentMinutes * 60
  //     );
  //     let durationMinutes = Math.floor(curr_track.duration / 60);
  //     let durationSeconds = Math.floor(
  //       curr_track.duration - durationMinutes * 60
  //     );

  //     if (currentSeconds < 10) {
  //       currentSeconds = "0" + currentSeconds;
  //     }
  //     if (durationSeconds < 10) {
  //       durationSeconds = "0" + durationSeconds;
  //     }
  //     if (currentMinutes < 10) {
  //       currentMinutes = "0" + currentMinutes;
  //     }
  //     if (durationMinutes < 10) {
  //       durationMinutes = "0" + durationMinutes;
  //     }

  //     // curr_time.textContent = currentMinutes + ":" + currentSeconds;
  //     // total_duration.textContent = durationMinutes + ":" + durationSeconds;
  //   }
  // };
  // const loadTrack = () => {
  //   //clearInterval(updateTimer);
  //   // reset();
  //   // let url = "../assets/audios/Chay Khoi The Gioi Nay Cukak Remix_ - Da.mp3";

  //   // updateTimer = setInterval(setUpdate, 1000);
  // };
  const playMusic = () => {
    // props.setIsPlaying(true);
    props.isPlaying.current = true;
    props.setshowPlayingBar(true);
    console.log("[in playlist page] props.isPlaying=", props.isPlaying);
    // loadTrack();
    props.curr_track.play();
    console.log(props.curr_track);
    // console.log(props.isPlaying);
  };
  return (
    <div className="playlist-container">
      <div className="playlist-page-header">
        <div className="playlist-page-img">
          <img
            src="https://i.scdn.co/image/ab67706f000000022474bcf9196ad6bee4edabb1"
            alt="Black Pink"
          />
          <h1 className="playlist-img-name">Pink Venom</h1>
        </div>
        <div className="playlist-page-title">
          <h5>PLAYLIST</h5>
          <span className="title">Today's top hits</span>
          <div className="playlist-info">
            Harry Styles is on top of the Hottest 50!
          </div>
          <div className="playlist-content">
            <div className="playlist-content-item">Spotify</div>
            <div className="spacer"></div>
            <div className="playlist-content-item">31,779,597 likes</div>
            <div className="spacer"></div>
            <div className="playlist-content-item">50 songs</div>
            <div className="spacer"></div>
            <div className="playlist-content-item">2 hr 34 mins</div>
          </div>
        </div>
      </div>
      <div className="playlist-main">
        <div className="playlist-controls">
          <div className="playlist-control-item">
            <div className="play-btn play-btn__size-l">
              <FontAwesomeIcon className="play-icon" icon={faPlay} />
            </div>
          </div>
          <div className="playlist-control-item">
            <FontAwesomeIcon className="icon" icon={faHeart} />
          </div>
          <div className="playlist-control-item">
            <FontAwesomeIcon className="icon" icon={faEllipsis} />
          </div>
        </div>
        <div className="playlist-content">
          <div className="playlist-content-container">
            <ul className="playlist-content-title">
              <li className="playlist-title-item col-1">#</li>
              <li className="playlist-title-item col-2">title</li>
              <li className="playlist-title-item col-3">album</li>
              <li className="playlist-title-item col-4">
                <FontAwesomeIcon className="play-icon" icon={faClockFour} />
              </li>
            </ul>
            <div className="horizontal-ruler"></div>
            <ul className="playlist-music-list">
              {/* <li id="target" className="playlist-music-item">
                <div className="col-1">
                  <FontAwesomeIcon className="play-icon" icon={faPlay} />
                </div>
                <div className="col-2">
                  <div className="tracklist">
                    <div className="tracklist-image">
                      <img
                        src="https://i.scdn.co/image/ab67616d00004851b46f74097655d7f353caab14"
                        alt="tracklist image"
                      />
                    </div>
                    <div className="tracklist-info">
                      <div className="tracklist-name">As it was</div>
                      <div className="tracklist-author">Harry Styles</div>
                    </div>
                  </div>
                </div>
                <div id="album-name" className="col-3">
                  As it was
                </div>
                <div className="col-4">2:47</div>
                <div className="col-5">
                  <FontAwesomeIcon icon={faEllipsis} />
                </div>
              </li> */}
              {album_list[0].map((musicItem, index) => {
                return (
                  <li
                    id="target"
                    key={index}
                    className="playlist-music-item"
                    onClick={playMusic}
                    // ref={props.isPlaying}
                  >
                    <div className="col-1">
                      <FontAwesomeIcon className="play-icon" icon={faPlay} />
                    </div>
                    <div className="col-2">
                      <div className="tracklist">
                        <div className="tracklist-image">
                          <img src={chaykhoithegioinay} alt="tracklist image" />
                        </div>
                        <div className="tracklist-info">
                          <div className="tracklist-name">{musicItem.name}</div>
                          <div className="tracklist-author">
                            {musicItem.artist}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="album-name" className="col-3">
                      {musicItem.album}
                    </div>
                    <div className="col-4">2:47</div>
                    <div className="col-5">
                      <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                  </li>
                );
              })}
              {/* <li id="target" className="playlist-music-item">
                <div className="col-1">1</div>
                <div className="col-2">
                  <div className="tracklist">
                    <div className="tracklist-image">
                      <img
                        src="https://i.scdn.co/image/ab67616d00004851b46f74097655d7f353caab14"
                        alt="tracklist image"
                      />
                    </div>
                    <div className="tracklist-info">
                      <div className="tracklist-name">As it was</div>
                      <div className="tracklist-author">Harry Styles</div>
                    </div>
                  </div>
                </div>
                <div id="album-name" className="col-3">
                  As it was
                </div>
                <div className="col-4">3 days ago</div>
                <div className="col-5">2:47</div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="horizontal-ruler"></div>
      {/* <NowPlayingBar music_list={music_list} /> */}
    </div>
  );
}

export default Playlist;
