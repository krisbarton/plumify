import React from 'react';
import { useSelector } from 'react-redux';
import Volume from '../../assets/icons/volume.svg';
import Shuffle from '../../assets/icons/shuffle.svg';
import Repeat from '../../assets/icons/repeat.svg';
import Add from '../../assets/icons/add.svg';
import Next from '../../assets/icons/next.svg';
import Pause from '../../assets/icons/pause.svg';
import Previous from '../../assets/icons/previous.svg';

const TrackView = () => {

    const selectedTrack = useSelector((state) => state.search.selectedTrack);

    return (
        <section className="trackview">
            <div className="trackview__label">Now Playing</div>
            <img src={selectedTrack.album.cover_medium}
                className="trackview__cover" 
                alt={`${selectedTrack.album.title} by ${selectedTrack.artist.name} album cover`} />
            <h2 className="trackview__title">{selectedTrack.title}</h2>
            <h3 className="trackview__artist">{selectedTrack.artist.name}</h3>
            <div className="trackview__options">
                <img src={Volume} alt="Volume icon for audio player button" />
                <img src={Repeat} alt="Repeat icon for the audio player button" />
                <img src={Shuffle} alt="Shuffle icon for audio player button" />
                <img src={Add} alt="Add icon for audio player button" />
            </div>
            <input type="range" max="100" value="0" className="trackview__progress" />
            <div className="trackview__controls">
                <img src={Previous} alt="Previus icon for the audio player button" className="trackview__control"/>
                <img src={Pause} alt="Pause icon from the audio player button" className="trackview__control trackview__control--highlight" />
                <img src={Next} alt="Next icon from the audio player button"className="trackview__control" />
            </div>
        </section>
    )

}

export default TrackView;