import React from 'react';
import { useSelector } from 'react-redux';

const TrackView = () => {

    const selectedTrack = useSelector((state) => state.search.selectedTrack);

    return (
        <section>
            <strong>Now Playing</strong>
            <img src={selectedTrack.album.cover_medium} alt={`${selectedTrack.album.title} by ${selectedTrack.artist.name} album cover`} />
            <h2>{selectedTrack.title}</h2>
            <h3>{selectedTrack.artist.name}</h3>
        </section>
    )

}

export default TrackView;