import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faMagnifyingGlass, faXmark, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import {useEffect, useState} from 'react'
import { getValue } from '@testing-library/user-event/dist/utils'

function TopBar() {  
    const [searchInput, setSearchInput] = useState('')
    console.log(searchInput)

    const handleInput = () => {
        var x = document.getElementById("myText").value;
        setSearchInput(x)
        console.log(searchInput)
    }

    
    function ScrollDown(){
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        console.log('Scroll Y: ' + scrollY)
        document.getElementById('color').style.opacity = scrollY/143
        
    }
    window.addEventListener("scroll", ScrollDown);

    return ( 
        <div className="topbar-container">
            <div id='color' className="color-wrapper"></div>
            <div className="wrapper">
                <ul className="topbar-btn">
                    <li className='btn disabled'>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </li>
                    <li className='btn'>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </li>
                </ul>
                <div className='search-container'>
                    <div className='wrapper'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <form>
                            <input
                            id="myText"
                            // value={searchInput} 
                            onChange={handleInput} 
                            placeholder='What do you want to listen?'
                            />
                        </form>
                     
                        {(searchInput !== '') && <button onClick={console.log('check')}><FontAwesomeIcon icon={faXmark} /></button>}
                    </div>
                </div>
                <ul className='topbar-info'>
                    {/* if not login */}
                    {/* <li className='topbar-info-item'>Premium</li>
                    <li className='topbar-info-item'>Support</li>
                    <li className='topbar-info-item'>Download</li>
                    <li className='vertical-block'></li>
                    <li className='topbar-info-item'>Sign up</li>
                    <li className='btn topbar-info-item login-btn'>Log in</li> */}
                    {/* if login */}
                    <li className='btn topbar-info-item upgrade-btn'>Upgrade</li>
                    <li className='btn topbar-info-item account-container'>
                        <img src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1897648663860354&amp;height=300&amp;width=300&amp;ext=1664332373&amp;hash=AeSOtRBoT99CdMjNpg0"/>
                        <span className='account-name'>Quynh Huong</span>
                        <div className='account-more'><FontAwesomeIcon icon={faCaretDown} /></div>
                    </li>
                </ul>
            </div>
        </div>
     );
}

export default TopBar;