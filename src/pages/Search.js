import { Route, Link, BrowserRouter as Router } from 'react-router-dom' 
import NavBar from '../../src/components/NavBar'
import TopBar from '../../src/components/TopBar'
import NowPlayingBar from '../../src/components/NowPlayingBar'

function Search() {

    return ( 
       <div className="search-page-container">
        <h1 className="title">Browse All</h1>
        <div className="grid-container">
            <div className="grid-item">
                <h1>Podcasts</h1>
                <img src='https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5'></img>
            </div>
            <div className="grid-item">
                <h1>Podcasts</h1>
                <img src='https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5'></img>
            </div>
            <div className="grid-item">
                <h1>Podcasts</h1>
                <img src='https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5'></img>
            </div>
            <div className="grid-item">
                <h1>Podcasts</h1>
                <img src='https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5'></img>
            </div>
            <div className="grid-item">
                <h1>Podcasts</h1>
                <img src='https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5'></img>
            </div>
            <div className="grid-item">
                <h1>Podcasts</h1>
                <img src='https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5'></img>
            </div>
            <div className="grid-item">
                <h1>Podcasts</h1>
                <img src='https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5'></img>
            </div>
        </div>
       </div>
     );
}

export default Search;