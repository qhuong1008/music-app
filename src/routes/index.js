import Home from '../../src/pages/Home'
import Search from '../../src/pages/Search'
import Playlist from '../../src/pages/Playlist'
import LikedSongs from '../../src/pages/LikedSongs'
import YourLibrary from '../../src/pages/YourLibrary'

//Public routes
const publicRoutes = [
    {
        path: '/',
        element: Home,
    },
    {
        path: '/search',
        element: Search,
    },
    {
        path: 'collection/playlist',
        element: YourLibrary
    },
    {
        path: '/playlist',
        element: Playlist,
    },
    {
        path: '/tracks',
        element: LikedSongs,
    },
    // {
    //     path: '/@:nickname',
    //     component: Profile,
    // },
    // {
    //     path: '/search',
    //     component: Search,
    //     layout: null,
    // },
    // {
    //     path: '/upload',
    //     component: Upload,
    //     layout: HeaderOnly,
    // },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
