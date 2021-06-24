import React from 'react';
import { useSelector } from 'react-redux';

import SearchBar from '../search/searchbar';
import Loading from '../loading/loading';
import TrackList from '../tracks/tracklist';
import TrackView from '../tracks/trackView';
import SearchError from '../error/error';

const Mobile = () => {

    const isLoading = useSelector((state) => state.search.isLoading);
    const hasLoaded = useSelector((state) => state.search.hasLoaded);
    const isTrackView = useSelector((state) => state.search.isTrackView);
    const isError = useSelector((state) => state.search.isError);

    return (
        <>
            <SearchBar />
            {isLoading ? <Loading /> : ""}
            {hasLoaded && !isTrackView ? <TrackList /> : ""}
            {isTrackView ? <TrackView /> : ""}
            {isError.flag ? <SearchError message={isError.message} /> : ""}
        </>
    )

}

export default Mobile;