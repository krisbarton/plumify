import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { saveSelectedTrack, setTrackView } from '../../redux/searchSlice';

import Music from '../../assets/icons/music.svg';

const Track = ({ data, id}) => {

    const dispatch = useDispatch();

    const selectTrack = () => {
        dispatch(saveSelectedTrack(data))
        dispatch(setTrackView(true))
    }

    return (
        <li onClick={(e) => { selectTrack() }} key={id}>
            <img src={Music} className="tracklist__icon" alt="A Music note track icon" />
            <p>{data.title}</p>
            <p>by {data.artist.name}</p>
            <p className="tracklist__button__holder">
                <a href="#" className="tracklist__button" onClick={(e) => { selectTrack() }}>View Track</a>
            </p>
            <span className="tracklist__divider"></span>
        </li>
    )

}

export default Track;