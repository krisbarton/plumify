import React from 'react';
import { useSelector } from 'react-redux';

import SearchBar from './components/search/searchbar';
import Loading from './components/loading/loading';
import TrackList from './components/tracks/tracklist';
import TrackView from './components/tracks/trackView';

import './styles/main.scss';

const App = () => {

    const isLoading = useSelector((state) => state.search.isLoading);
    const hasLoaded = useSelector((state) => state.search.hasLoaded);
    const isTrackView = useSelector((state) => state.search.isTrackView);

    return (
        <main>
            <header><h1>Plumify</h1></header>
            <SearchBar />
            { isLoading ? <Loading /> : "" }
            { hasLoaded && !isTrackView ? <TrackList /> : "" }
            { isTrackView ? <TrackView /> : ''}
        </main>
    )
}

export default App;