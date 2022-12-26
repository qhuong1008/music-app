import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import TopBar_Search from "./components/TopBar_Search";
import NowPlayingBar from "./components/NowPlayingBar";
import { publicRoutes } from "./routes";
import { useState, useRef } from "react";

function App() {
  //hooks
  const isPlaying = useRef();
  // const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayingBar, setshowPlayingBar] = useState(false);

  //variables
  var curr_track = document.createElement("audio");

  const music_list = [
    {
      name: "Chạy khỏi thế giới này - 「Cukak Remix」",
      music: "./assets/audios/Chay Khoi The Gioi Nay Cukak Remix_ - Da.mp3",
      artist: "Da LAB ft. Phương Ly",
      img: "../assets/images/chaykhoithegioinay.jpg",
    },
    {
      name: "Golden Hour",
      music: "./assets/audios/Golden Hour - JVKE.mp3",
      artist: "JVKE",
      img: "./assets/images/goldenhour.jpg",
    },
    {
      name: "Hongkong12",
      music: "./assets/audios/Hongkong12-NguyenTrongTaiMC12-6129322.mp3",
      artist: "NGUYỄN TRỌNG TÀI ft. MC 12",
      img: "./assets/images/hongkong12.jpg",
    },
    {
      name: "Lần hẹn hò đầu tiên",
      music:
        "./assets/audios/Lan Hen Ho Dau Tien Remix - Huyen Tam Mon - NhacHay360.mp3",
      artist: "HUYỀN TÂM MÔN",
      img: "./assets/images/lanhenhodautien.jpg",
    },
    {
      name: "Waiting for you",
      music: "./assets/audios/Waiting For You - MONO, Onionn - NhacHay360.mp3",
      artist: "MONO, Onion",
      img: "./assets/images/waitingforyou.jpg",
    },
  ];
  return (
    <Router>
      <div className="container">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.element;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <div>
                    <NavBar />
                    <TopBar />
                    {/* <TopBar_Search/> */}
                    <section className="view-page">
                      <div className="view-page-container">
                        <Page
                          isPlaying={isPlaying}
                          // setIsPlaying={setIsPlaying}
                          showPlayingBar={showPlayingBar}
                          setshowPlayingBar={setshowPlayingBar}
                          curr_track={curr_track}
                        />
                      </div>
                    </section>
                    {showPlayingBar && (
                      <NowPlayingBar
                        isPlaying={isPlaying}
                        // setIsPlaying={setIsPlaying}
                        showPlayingBar={showPlayingBar}
                        setshowPlayingBar={setshowPlayingBar}
                        curr_track={curr_track}
                      />
                    )}
                  </div>
                }
              />
            );
          })}
          {/* <Route path="/" element={<Home/>}></Route>
          <Route path="/search" element={<Search/>}></Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
