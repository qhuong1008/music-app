import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faHeart,
  faShuffle,
  faLyric,
  faCirclePause,
  faCirclePlay,
  faForwardStep,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import $ from "jquery";
import music_list from "../music.js";
import chaykhoithegioinay from "../assets/images/chaykhoithegioinay.jpg";

function NowPlayingBar(props) {
  // set variables
  let trackName = useRef();
  let trackImg = useRef();
  let trackArtist = useRef();

  let randomTrack = document.querySelector(".random-track");
  let prevTrack = document.querySelector(".prev-track");
  let playpauseBtn = document.querySelector(".playpause-btn");
  let nextTrack = document.querySelector(".next-track");
  let repeatTrack = document.querySelector(".repeat-track");
  let trackIndex = 0;
  let seek_slider = document.querySelector(".seek_slider");
  let curr_time = document.querySelector(".current-time");
  let total_duration = document.querySelector(".total-duration");
  let sound = require("../assets/audios/Chay Khoi The Gioi Nay Cukak Remix_ - Da.mp3");
  props.curr_track.src = sound;

  //handle load track

  // loadTrack(track_index)
  const loadTrack = () => {
    let updateTimer;
    clearInterval(updateTimer);
    // reset();
    updateTimer = setInterval(setUpdate, 1000);
    // curr_track.addEventListener("ended", nextTrack);
  };

  // useEffect(() => {
  //   if (props.isPlaying === false) {
  //     handlePause();
  //   }
  //   if (props.isPlaying === true) {
  //     handlePlay();
  //   }
  //   console.log(props.isPlaying);
  // }, [props.isPlaying]);

  const loadSongInfo = () => {
    trackName.current.textContent = music_list[0].name;
    trackArtist.current.textContent = music_list[0].artist;
    trackImg.current.src = chaykhoithegioinay;
  };

  // const reset = () => {
  //   curr_time.textContent = "00:00";
  //   total_duration.textContent = "00:00";
  //   seek_slider.value = 0;
  // };

  const setUpdate = () => {
    let seekPosition = 0;
    if (!isNaN(props.curr_track.duration)) {
      seekPosition =
        props.curr_track.currentTime * (100 / props.curr_track.duration);
      seek_slider.value = seekPosition;

      let currentMinutes = Math.floor(props.curr_track.currentTime / 60);
      let currentSeconds = Math.floor(
        props.curr_track.currentTime - currentMinutes * 60
      );
      let durationMinutes = Math.floor(props.curr_track.duration / 60);
      let durationSeconds = Math.floor(
        props.curr_track.duration - durationMinutes * 60
      );

      if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
      }
      if (durationSeconds < 10) {
        durationSeconds = "0" + durationSeconds;
      }
      if (currentMinutes < 10) {
        currentMinutes = "0" + currentMinutes;
      }
      if (durationMinutes < 10) {
        durationMinutes = "0" + durationMinutes;
      }

      curr_time.textContent = currentMinutes + ":" + currentSeconds;
      total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
  };

  const seekTo = () => {
    let seek_to = props.curr_track.duration * (seek_slider.value / 100);
    props.curr_track.current_time = seek_to;
  };

  const handlePlay = () => {
    // loadTrack();
    props.isPlaying.current = true;
    props.curr_track.play();
  };
  const handlePause = () => {
    props.isPlaying.current = false;
    props.curr_track.pause();
  };

  const handlePlayPause = () => {
    console.log("before handle:", props.isPlaying);
    if (props.isPlaying.current === true) {
      handlePause();
      // console.log("props.isPlaying=", props.isPlaying.current);
    } else {
      handlePlay();
    }
    // props.setIsPlaying(!props.isPlaying);
    console.log("after: ", props.isPlaying.current);
    // props.isPlaying ? handlePlay() : handlePause();
  };
  // css styles
  var playElements = document.getElementsByClassName("player-btn-item");
  var playItem = playElements[2];

  return (
    <div className="now-playingbar-container">
      <div className="now-playingbar-info">
        <div className="track-img" ref={trackImg}>
          {/* <img src={props.music_list[0].img} alt="track img" /> */}
          <img src={chaykhoithegioinay} />
        </div>
        <div className="now-playingbar-music">
          <a>
            <div className="music-item music-name" ref={trackName}></div>
          </a>
          <div className="music-item music-singer" ref={trackArtist}></div>
        </div>
        <div className="options">
          <button>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button>
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <g fill="currentColor" fillRule="evenodd">
                <path
                  d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                  fillRule="nonzero"
                ></path>
                <path d="M10 8h4v3h-4z"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div className="now-playingbar-controls">
        <div className="player-buttons">
          <button className="player-btn-item" onClick={loadSongInfo}>
            <FontAwesomeIcon className="random-track" icon={faShuffle} />
          </button>
          <button className="player-btn-item">
            <FontAwesomeIcon className="prev-track" icon={faBackwardStep} />
          </button>
          <button
            className="player-btn-item playpause-btn"
            onClick={handlePlayPause}
          >
            <audio
              src="'../assets/music/blackpink/PinkVenom-BLACKPINK-7802564.mp3'"
              id="my-audio"
            ></audio>
            {props.isPlaying.current ? (
              <FontAwesomeIcon
                className="player-control"
                icon={faCirclePause}
              />
            ) : (
              <FontAwesomeIcon icon={faCirclePlay} />
            )}
          </button>
          <button className="player-btn-item">
            <FontAwesomeIcon className="next-track" icon={faForwardStep} />
          </button>
          <button className="player-btn-item">
            <FontAwesomeIcon className="repeat-track" icon={faRepeat} />
          </button>
        </div>

        <div className="playback-bar">
          <div className="current-time">0:00</div>
          <div className="progress-bar-wrapper">
            <input
              className="progress-bar seek_slider"
              type="range"
              min="1"
              max="100"
              onChange={seekTo}
            />
          </div>
          <div className="total-duration">2:41</div>
        </div>
      </div>
      <div className="now-playingbar-options">
        <button className="playingbar-option-item btn-lyric">
          <svg
            className="playingbar-svg"
            height="16"
            width="16"
            viewBox="0 0 16 16"
          >
            <path d="M13.426 2.574a2.831 2.831 0 00-4.797 1.55l3.247 3.247a2.831 2.831 0 001.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 004.74 9.075L2.065 12.12a1.287 1.287 0 001.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 114.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 01-3.933-3.933l2.676-3.045 3.505-3.99z"></path>
          </svg>
          <div className="active"></div>
        </button>
        <button className="playingbar-option-item btn-queue">
          <svg
            className="playingbar-svg"
            height="16"
            width="16"
            viewBox="0 0 16 16"
          >
            <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z"></path>
          </svg>
        </button>
        <button className="playingbar-option-item btn-device-connect">
          <svg
            className="playingbar-svg"
            height="16"
            width="16"
            aria-label="Connect to a device"
            viewBox="0 0 16 16"
          >
            <path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15h-6.5A1.75 1.75 0 016 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25h-6.5zm-6 0a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 010 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path>
            <path d="M13 10a2 2 0 11-4 0 2 2 0 014 0zm-1-5a1 1 0 11-2 0 1 1 0 012 0z"></path>
          </svg>
        </button>
        <div className="volume-bar">
          <button className="playingbar-option-item btn-mute">
            <svg
              className="playingbar-svg"
              height="16"
              width="16"
              aria-label="Volume high"
              viewBox="0 0 16 16"
            >
              <path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"></path>
              <path d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"></path>
            </svg>
          </button>
          <div className="progress-bar"></div>
        </div>
      </div>
      {/* <script type="text/javascript" src="./componentIndex.js"></script> */}
    </div>
  );
}

export default NowPlayingBar;
