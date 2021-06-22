import React from 'react';
import { useSelector } from 'react-redux';

import SearchBar from './components/search/searchbar';
import Loading from './components/loading/loading';
import TrackList from './components/tracks/tracklist';
import TrackView from './components/tracks/trackView';
import TrackTest from './components/tracks/trackTest';
import SearchError from './components/error/error';

import './styles/main.scss';

const App = () => {

    const isLoading = useSelector((state) => state.search.isLoading);
    const hasLoaded = useSelector((state) => state.search.hasLoaded);
    const isTrackView = useSelector((state) => state.search.isTrackView);
    const isError = useSelector((state) => state.search.isError);

    return (
        <main>
            <header><h1>Plumi<span className="primaryHighlight">fy</span></h1></header>
            <SearchBar />
            {isLoading ? <Loading /> : ""}
            {hasLoaded && !isTrackView ? <TrackList /> : ""}
            {isTrackView ? <TrackView /> : ""}
            {isError.flag ? <SearchError message={isError.message} /> : ""}
        </main >
    )
}

export default App;