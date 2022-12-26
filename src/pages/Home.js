import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link, BrowserRouter as Router } from "react-router-dom";
import album from "../assets/images/account_img.jpg";

function Home() {
  // console.log(props);
  return (
    <div className="home-container">
      <div className="home-menu-section">
        <h2 className="title">spotify playlist</h2>
        <ul className="grid-container">
          <Link to="/playlist">
            <li className="home-menu-item">
              <div className="music-img-container">
                <img
                  className="home-item-image"
                  src={album}
                  alt="album image"
                />
                <div className="play-btn play-btn__size-s">
                  <FontAwesomeIcon className="play-icon" icon={faPlay} />
                </div>
              </div>
              <h3>today's top hit</h3>
              <div className="info">
                BLACKPINK are on top of the Hottest 50!
              </div>
            </li>
          </Link>
          <a>
            <li className="home-menu-item">
              <img className="home-item-image" src={album} alt="album image" />
              <h3>today's top hit</h3>
              <div className="info">
                BLACKPINK are on top of the Hottest 50!
              </div>
            </li>
          </a>
          <a>
            <li className="home-menu-item">
              <img className="home-item-image" src={album} alt="album image" />
              <h3>today's top hit</h3>
              <div className="info">
                BLACKPINK are on top of the Hottest 50!
              </div>
            </li>
          </a>
          <a>
            <li className="home-menu-item">
              <img className="home-item-image" src={album} alt="album image" />
              <h3>today's top hit</h3>
              <div className="info">
                BLACKPINK are on top of the Hottest 50!
              </div>
            </li>
          </a>
        </ul>
      </div>
      <div className="home-menu-section">
        <h2 className="title">uniquely yours</h2>
        <ul className="grid-container">
          <a>
            <li className="home-menu-item">
              <img className="home-item-image" src={album} alt="album image" />
              <h3>today's top hit</h3>
              <div className="info">
                BLACKPINK are on top of the Hottest 50!
              </div>
            </li>
          </a>
          <a>
            <li className="home-menu-item">
              <img className="home-item-image" src={album} alt="album image" />
              <h3>today's top hit</h3>
              <div className="info">
                BLACKPINK are on top of the Hottest 50!
              </div>
            </li>
          </a>
          <a>
            <li className="home-menu-item">
              <img className="home-item-image" src={album} alt="album image" />
              <h3>today's top hit</h3>
              <div className="info">
                BLACKPINK are on top of the Hottest 50!
              </div>
            </li>
          </a>
          <a>
            <li className="home-menu-item">
              <img className="home-item-image" src={album} alt="album image" />
              <h3>today's top hit</h3>
              <div className="info">
                BLACKPINK are on top of the Hottest 50!
              </div>
            </li>
          </a>
        </ul>
      </div>
      <div className="home-menu-section">
        <h2 className="title">focus</h2>
        <ul className="grid-container">
          <a>
            <li className="home-menu-item">
              <img className="home-item-image" src={album} alt="album image" />
              <h3>today's top hit</h3>
              <div className="info">
                BLACKPINK are on top of the Hottest 50!
              </div>
            </li>
          </a>
          <a>
            <li className="home-menu-item">
              <img className="home-item-image" src={album} alt="album image" />
              <h3>today's top hit</h3>
              <div className="info">
                BLACKPINK are on top of the Hottest 50!
              </div>
            </li>
          </a>
          <a>
            <li className="home-menu-item">
              <img className="home-item-image" src={album} alt="album image" />
              <h3>today's top hit</h3>
              <div className="info">
                BLACKPINK are on top of the Hottest 50!
              </div>
            </li>
          </a>
          <a>
            <li className="home-menu-item">
              <img className="home-item-image" src={album} alt="album image" />
              <h3>today's top hit</h3>
              <div className="info">
                BLACKPINK are on top of the Hottest 50!
              </div>
            </li>
          </a>
        </ul>
      </div>
      <div className="home-menu-section">
        <h2 className="title">mood</h2>
        <ul className="grid-container">
          <a>
            <li className="home-menu-item">
              <img className="home-item-image" src={album} alt="album image" />
              <h3>today's top hit</h3>
              <div className="info">
                BLACKPINK are on top of the Hottest 50!
              </div>
            </li>
          </a>
          <a>
            <li className="home-menu-item">
              <img className="home-item-image" src={album} alt="album image" />
              <h3>today's top hit</h3>
              <div className="info">
                BLACKPINK are on top of the Hottest 50!
              </div>
            </li>
          </a>
          <a>
            <li className="home-menu-item">
              <img className="home-item-image" src={album} alt="album image" />
              <h3>today's top hit</h3>
              <div className="info">
                BLACKPINK are on top of the Hottest 50!
              </div>
            </li>
          </a>
          <a>
            <li className="home-menu-item">
              <img className="home-item-image" src={album} alt="album image" />
              <h3>today's top hit</h3>
              <div className="info">
                BLACKPINK are on top of the Hottest 50!
              </div>
            </li>
          </a>
        </ul>
      </div>
      <div className="home-menu-section">
        <h2 className="title">popular new releases</h2>
        <ul className="grid-container">
          <a>
            <li className="home-menu-item">
              <img className="home-item-image" src={album} alt="album image" />
              <h3>today's top hit</h3>
              <div className="info">
                BLACKPINK are on top of the Hottest 50!
              </div>
            </li>
          </a>
          <a>
            <li className="home-menu-item">
              <img className="home-item-image" src={album} alt="album image" />
              <h3>today's top hit</h3>
              <div className="info">
                BLACKPINK are on top of the Hottest 50!
              </div>
            </li>
          </a>
          <a>
            <li className="home-menu-item">
              <img className="home-item-image" src={album} alt="album image" />
              <h3>today's top hit</h3>
              <div className="info">
                BLACKPINK are on top of the Hottest 50!
              </div>
            </li>
          </a>
          <a>
            <li className="home-menu-item">
              <img className="home-item-image" src={album} alt="album image" />
              <h3>today's top hit</h3>
              <div className="info">
                BLACKPINK are on top of the Hottest 50!
              </div>
            </li>
          </a>
        </ul>
      </div>
      <div className="horizontal-ruler"></div>
    </div>
  );
}

export default Home;
