import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setTrackView } from '../../redux/searchSlice';

import Volume from '../../assets/icons/volume.svg';
import Shuffle from '../../assets/icons/shuffle.svg';
import Repeat from '../../assets/icons/repeat.svg';
import Add from '../../assets/icons/add.svg';
import Next from '../../assets/icons/next.svg';
import Pause from '../../assets/icons/pause.svg';
import Previous from '../../assets/icons/previous.svg';
import Back from '../../assets/icons/back.svg';
import Play from '../../assets/icons/play.svg';

const TrackView = () => {

    const [playing, setPlaying] = useState(false);

    const selectedTrack = useSelector((state) => state.search.selectedTrack);
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = `Plumify - ${selectedTrack.title} by ${selectedTrack.artist.name}`;
    });

    const backToList = (e) => {
        e.preventDefault();
        dispatch(setTrackView(false))
    }

    const setAudio = () => {
        const audio = document.getElementById("player");
        if(!playing) {
            setPlaying(true);
            audio.play();
        } else {
            setPlaying(false);
            audio.pause();
        }
    }

    return (
        <>
            <audio src={selectedTrack.preview} preload="metadata" id="player"></audio>
            <a href="#" className="trackview__back" onClick={(e) => { backToList(e) }}>
                <img src={Back} alt="Back Icon" />
            </a>
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
                <div className="trackview__times">
                    <span className="trackview__times--current"></span>
                    <span className="trackview__times--total"></span>
                </div>
                <input type="range" id="track-range" min="0" max="100" step="0.01" value="0.00" />
                <div className="trackview__controls">
                    <img src={Previous} alt="Previus icon for the audio player button" className="trackview__control" />
                    <div className="trackview__control--highlight">
                        <img onClick={(e) => {setAudio()}} src={playing ? Pause : Play} alt="Play or Pause icon from the audio player button depending on state" className="trackview__control" />
                    </div>
                    <img src={Next} alt="Next icon from the audio player button" className="trackview__control" />
                </div>
            </section>
        </>
    )

}

export default TrackView;