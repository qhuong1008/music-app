import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import avatar from "../assets/images/account_img.jpg";

function TopBar() {
  const [openMenu, setOpenMenu] = useState(false);

  function ScrollDown() {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    console.log("Scroll Y: " + scrollY);
    document.getElementById("color").style.opacity = scrollY / 143;
  }
  window.addEventListener("scroll", ScrollDown);
  return (
    <div className="topbar-container">
      <div id="color" className="color-wrapper"></div>
      <div className="wrapper">
        <ul className="topbar-btn">
          <li className="btn disabled">
            <FontAwesomeIcon icon={faAngleLeft} />
          </li>
          <li className="btn">
            <FontAwesomeIcon icon={faAngleRight} />
          </li>
        </ul>

        {/* if not login */}
        {/* <ul className='topbar-info'>
                    <li className='topbar-info-item'>Premium</li>
                    <li className='topbar-info-item'>Support</li>
                    <li className='topbar-info-item'>Download</li>
                    <li className='vertical-block'></li>
                    <li className='topbar-info-item'>Sign up</li>
                    <li className='btn topbar-info-item login-btn'>Log in</li>
                </ul>  */}

        {/* if login */}
        <ul className="topbar-login-info">
          <li className="btn topbar-info-item upgrade-btn">Upgrade</li>
          <li className="btn topbar-info-item">
            <div
              className="account-container"
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              <img src={avatar} />
              <span className="account-name">Quynh Huong</span>
              {openMenu === false && (
                <div className="account-more">
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
              )}
              {openMenu && (
                <div className="account-more">
                  <FontAwesomeIcon icon={faCaretUp} />
                </div>
              )}
            </div>
            {openMenu && (
              <div className="user-menu-container">
                <ul className="user-menu">
                  <li className="menu-item">
                    <span>Account</span>
                    <svg
                      role="img"
                      height="16"
                      width="16"
                      viewBox="0 0 16 16"
                      class="Svg-ytk21e-0 jAKAlG"
                    >
                      <path d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z"></path>
                      <path d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z"></path>
                    </svg>
                  </li>
                  <li className="menu-item">
                    <span>Profile</span>
                  </li>
                  <li className="menu-item">
                    <span>Upgrade to Premium</span>
                    <svg
                      role="img"
                      height="16"
                      width="16"
                      viewBox="0 0 16 16"
                      class="Svg-ytk21e-0 jAKAlG"
                    >
                      <path d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z"></path>
                      <path d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z"></path>
                    </svg>
                  </li>
                  <li className="menu-item">
                    <span>Support</span>
                    <svg
                      role="img"
                      height="16"
                      width="16"
                      viewBox="0 0 16 16"
                      class="Svg-ytk21e-0 jAKAlG"
                    >
                      <path d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z"></path>
                      <path d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z"></path>
                    </svg>
                  </li>
                  <li className="menu-item">
                    <span>Download</span>
                    <svg
                      role="img"
                      height="16"
                      width="16"
                      viewBox="0 0 16 16"
                      class="Svg-ytk21e-0 jAKAlG"
                    >
                      <path d="M1 2.75A.75.75 0 011.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 01-.75.75H1.75a.75.75 0 01-.75-.75V2.75z"></path>
                      <path d="M15 1v4.993a.75.75 0 11-1.5 0V3.56L8.78 8.28a.75.75 0 01-1.06-1.06l4.72-4.72h-2.433a.75.75 0 010-1.5H15z"></path>
                    </svg>
                  </li>
                  <li className="menu-item">
                    <span>Settings</span>
                  </li>
                  <div className="horizontal-ruler"></div>
                  <li className="menu-item">
                    <span>Log out</span>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopBar;
